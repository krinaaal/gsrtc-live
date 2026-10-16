import urllib.request
import ssl
import base64
import time
import json
import os
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor

SOAP_URL = "https://gsrtc.in/GSRTCWSAnd/reservationservice/"
AUTH_HEADER = "Basic " + base64.b64encode(b"radwsgps:radwsgps").decode()

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

CACHE_DIR = os.path.join(os.path.dirname(__file__), 'cache')
STOPS_CACHE_DIR = os.path.join(CACHE_DIR, 'stops')
DETAILS_CACHE_DIR = os.path.join(CACHE_DIR, 'details')
os.makedirs(STOPS_CACHE_DIR, exist_ok=True)
os.makedirs(DETAILS_CACHE_DIR, exist_ok=True)

_live_trips_cache = {'time': 0, 'data': []}
_mem_stops_cache = {}
_mem_details_cache = {}

def call_soap(op_name, body_xml=""):
    soap_body = f"""<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="com.gsrtc.prws.service.bo">
  <soap:Body>
    <tns:{op_name}>
      {body_xml}
    </tns:{op_name}>
  </soap:Body>
</soap:Envelope>"""
    req = urllib.request.Request(
        SOAP_URL,
        data=soap_body.encode('utf-8'),
        headers={
            'Content-Type': 'text/xml; charset=utf-8',
            'SOAPAction': '',
            'Authorization': AUTH_HEADER,
            'User-Agent': 'ksoap2-android/2.6.0+'
        }
    )
    with urllib.request.urlopen(req, context=ctx, timeout=8) as resp:
        return resp.read().decode('utf-8', errors='replace')

def get_live_trips():
    now = time.time()
    if now - _live_trips_cache['time'] < 300 and _live_trips_cache['data']:
        return _live_trips_cache['data']

    # Check file cache for live trips
    trips_file = os.path.join(CACHE_DIR, 'live_trips.json')
    if os.path.exists(trips_file):
        try:
            mtime = os.path.getmtime(trips_file)
            if now - mtime < 300:
                with open(trips_file, 'r') as f:
                    data = json.load(f)
                    if data:
                        _live_trips_cache['time'] = mtime
                        _live_trips_cache['data'] = data
                        return data
        except Exception:
            pass

    try:
        xml_data = call_soap("GetLiveTripCodesList")
        root = ET.fromstring(xml_data)
        trips = [el.text.strip() for el in root.iter('tripCode') if el.text]
        if trips:
            _live_trips_cache['time'] = now
            _live_trips_cache['data'] = trips
            with open(trips_file, 'w') as f:
                json.dump(trips, f)
            return trips
    except Exception as e:
        print(f"[GSRTC] Error fetching live trips: {e}")
    return _live_trips_cache['data']

def get_trip_details(trip_code):
    if trip_code in _mem_details_cache:
        return _mem_details_cache[trip_code]

    fpath = os.path.join(DETAILS_CACHE_DIR, f"{trip_code}.json")
    if os.path.exists(fpath):
        try:
            with open(fpath, 'r', encoding='utf-8') as f:
                data = json.load(f)
                _mem_details_cache[trip_code] = data
                return data
        except Exception:
            pass

    try:
        body = f"<arg0>{trip_code}</arg0>"
        xml_data = call_soap("GetLiveTripCodeDetailsList", body)
        root = ET.fromstring(xml_data)
        item = root.find('.//GetLiveTripCodeDetailsList')
        if item is not None:
            details = {
                'tripCode': trip_code,
                'vehicleNo': (item.findtext('vehicleNo') or '').strip(),
                'className': (item.findtext('className') or 'EXPRESS').strip(),
                'conductorNo': (item.findtext('conductorNo') or '').strip(),
                'depotName': (item.findtext('depotName') or '').strip(),
                'divisonName': (item.findtext('divisonName') or '').strip(),
                'startPlaceName': (item.findtext('startPlaceName') or '').strip(),
                'endPlaceName': (item.findtext('endPlaceName') or '').strip(),
                'actualdate': (item.findtext('actualdate') or '').strip()
            }
            _mem_details_cache[trip_code] = details
            with open(fpath, 'w', encoding='utf-8') as f:
                json.dump(details, f)
            return details
    except Exception as e:
        pass
    return None

def get_trip_stops(trip_code):
    if trip_code in _mem_stops_cache:
        return _mem_stops_cache[trip_code]

    fpath = os.path.join(STOPS_CACHE_DIR, f"{trip_code}.json")
    if os.path.exists(fpath):
        try:
            with open(fpath, 'r', encoding='utf-8') as f:
                data = json.load(f)
                _mem_stops_cache[trip_code] = data
                return data
        except Exception:
            pass

    try:
        body = f"<arg0>{trip_code}</arg0>"
        xml_data = call_soap("GetServiceDetailsByTripCode", body)
        root = ET.fromstring(xml_data)
        stops = []
        for s in root.iter('GetServiceDetailsByTripCode'):
            pname = (s.findtext('placeName') or '').strip()
            pcode = (s.findtext('placeCode') or '').strip()
            ptime = (s.findtext('pickupPointTime') or '').strip()
            point = (s.findtext('pickPointName') or '').strip()
            if pname:
                stops.append({
                    'placeName': pname,
                    'placeCode': pcode,
                    'time': ptime,
                    'pointName': point
                })
        if stops:
            _mem_stops_cache[trip_code] = stops
            with open(fpath, 'w', encoding='utf-8') as f:
                json.dump(stops, f)
            return stops
    except Exception as e:
        pass
    return []

def batch_get_trip_stops(trip_codes, max_workers=10):
    """Fetches trip stops concurrently using thread pool."""
    results = {}
    missing = []
    for tc in trip_codes:
        if tc in _mem_stops_cache:
            results[tc] = _mem_stops_cache[tc]
        else:
            fpath = os.path.join(STOPS_CACHE_DIR, f"{tc}.json")
            if os.path.exists(fpath):
                try:
                    with open(fpath, 'r') as f:
                        data = json.load(f)
                        _mem_stops_cache[tc] = data
                        results[tc] = data
                        continue
                except Exception:
                    pass
            missing.append(tc)

    if missing:
        with ThreadPoolExecutor(max_workers=max_workers) as executor:
            future_to_tc = {executor.submit(get_trip_stops, tc): tc for tc in missing}
            for future in future_to_tc:
                tc = future_to_tc[future]
                try:
                    stops = future.result()
                    if stops:
                        results[tc] = stops
                except Exception:
                    pass
    return results
