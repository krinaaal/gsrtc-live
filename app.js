/**
 * GSRTC Live Clone - Mobile PWA & Real-Time Bus Tracker
 * Exclusively designed by Krinal ❤️ Mittal (ક્રિનલ ❤️ મિત્તલ)
 * Directly powered by official GSRTC WebServices (gsrtc.in) backend
 */

// --- 1. Authentic Stations Database with GPS Coordinates ---
const STATIONS = [
  // Gir-Somnath, Junagadh & Coastal Belt
  { id: 'VRL', nameGu: 'વેરાવળ (એસ.ટી. બસ સ્ટેશન)', nameEn: 'Veraval (ST Bus Stand)', lat: 20.9129, lng: 70.3639, code: 'VRL' },
  { id: 'PRC', nameGu: 'પ્રાચી તીર્થ (બસ સ્ટેન્ડ)', nameEn: 'Prachi Tirtha', lat: 20.9238, lng: 70.6135, code: 'PRC' },
  { id: 'GRKMD', nameGu: 'ગોરખ મઢી (બસ સ્ટેન્ડ)', nameEn: 'Gorakh Madhi', lat: 20.9148, lng: 70.5285, code: 'GRKMD' },
  { id: 'KDN', nameGu: 'કોડીનાર (એસ.ટી. બસ ડેપો)', nameEn: 'Kodinar Depot', lat: 20.7946, lng: 70.7032, code: 'KDN' },
  { id: 'UNA', nameGu: 'ઉના (એસ.ટી. બસ સ્ટેશન)', nameEn: 'Una Bus Stand', lat: 20.8242, lng: 71.0392, code: 'UNA' },
  { id: 'DIU', nameGu: 'દીવ (એસ.ટી. બસ સ્ટેન્ડ)', nameEn: 'Diu Bus Stand', lat: 20.7145, lng: 70.9875, code: 'DIU' },
  { id: 'SMN', nameGu: 'સોમનાથ (યાત્રાધામ સ્ટેન્ડ)', nameEn: 'Somnath Temple Stand', lat: 20.8878, lng: 70.4014, code: 'SMN' },
  { id: 'TLG', nameGu: 'તાલાલા ગીર (બસ સ્ટેન્ડ)', nameEn: 'Talala Gir', lat: 21.0500, lng: 70.5200, code: 'TLG' },
  { id: 'RJL', nameGu: 'રાજુલા (એસ.ટી. સ્ટેન્ડ)', nameEn: 'Rajula', lat: 20.9490, lng: 71.4330, code: 'RJL' },
  { id: 'MHV', nameGu: 'મહુવા (એસ.ટી. ડેપો)', nameEn: 'Mahuva Depot', lat: 21.0910, lng: 71.7610, code: 'MHV' },
  { id: 'JFR', nameGu: 'જાફરાબાદ (બસ સ્ટેશન)', nameEn: 'Jafrabad', lat: 20.8680, lng: 71.3660, code: 'JFR' },
  { id: 'KSD', nameGu: 'કેશોદ (બસ સ્ટેશન)', nameEn: 'Keshod', lat: 21.3025, lng: 70.2480, code: 'KSD' },
  { id: 'GDU', nameGu: 'ગડુ શેરબાગ (બસ સ્ટેન્ડ)', nameEn: 'Gadu Sherbag', lat: 21.0543, lng: 70.2905, code: 'GDU' },
  { id: 'GDDR', nameGu: 'માળીયા હાટીના (બસ સ્ટેન્ડ)', nameEn: 'Maliya Hatina', lat: 21.1578, lng: 70.3015, code: 'GDDR' },
  { id: 'CHRVD', nameGu: 'ચોરવાડ (બસ સ્ટેન્ડ)', nameEn: 'Chorvad', lat: 20.9985, lng: 70.2355, code: 'CHRVD' },
  { id: 'MDVPR', nameGu: 'માધવપુર ઘેડ', nameEn: 'Madhavpur Ghed', lat: 21.2545, lng: 69.9548, code: 'MDVPR' },
  { id: 'LOYEJ', nameGu: 'લોયેજ', nameEn: 'Loyej', lat: 21.1948, lng: 70.0210, code: 'LOYEJ' },
  { id: 'VNTL', nameGu: 'વંથલી (બસ સ્ટેન્ડ)', nameEn: 'Vanthali', lat: 21.4682, lng: 70.3340, code: 'VNTL' },
  { id: 'DLS', nameGu: 'ડોળાસા (બસ સ્ટેન્ડ)', nameEn: 'Dolasa', lat: 20.8068, lng: 70.8351, code: 'DLS' },
  { id: 'KSRY', nameGu: 'કેસરીયા (ઉના)', nameEn: 'Kesariya', lat: 20.8082, lng: 70.9398, code: 'KSRY' },
  { id: 'MNG', nameGu: 'માંગરોળ (એસ.ટી. સ્ટેન્ડ)', nameEn: 'Mangrol', lat: 21.1215, lng: 70.1172, code: 'MNG' },
  { id: 'UPL', nameGu: 'ઉપલેટા (એસ.ટી. બસ સ્ટેશન)', nameEn: 'Upleta Bus Stand', lat: 21.7335, lng: 70.2828, code: 'UPL' },
  { id: 'DHJ', nameGu: 'ધોરાજી (બસ સ્ટેશન)', nameEn: 'Dhoraji', lat: 21.7348, lng: 70.4502, code: 'DHJ' },
  { id: 'SPD', nameGu: 'સુપેડી', nameEn: 'Supedi', lat: 21.7582, lng: 70.3552, code: 'SPD' },
  { id: 'GDL', nameGu: 'ગોંડલ (એસ.ટી. સ્ટેન્ડ)', nameEn: 'Gondal', lat: 21.9610, lng: 70.7960, code: 'GDL' },
  { id: 'JND', nameGu: 'જૂનાગઢ (બસ સ્ટેશન)', nameEn: 'Junagadh', lat: 21.5225, lng: 70.4575, code: 'JND' },
  { id: 'AMR', nameGu: 'અમરેલી (સેન્ટ્રલ ડેપો)', nameEn: 'Amreli Central', lat: 21.6030, lng: 71.2220, code: 'AMR' },
  { id: 'SVK', nameGu: 'સાવરકુંડલા (એસ.ટી.)', nameEn: 'Savarkundla', lat: 21.3320, lng: 71.3070, code: 'SVK' },

  // Statewide Major Hubs
  { id: 'ADI', nameGu: 'અમદાવાદ (ગીતા મંદિર)', nameEn: 'Ahmedabad (Geeta Mandir)', lat: 23.0131, lng: 72.5913, code: 'GTM' },
  { id: 'RJT', nameGu: 'રાજકોટ (સેન્ટ્રલ બસ સ્ટેન્ડ)', nameEn: 'Rajkot (Central)', lat: 22.3039, lng: 70.8022, code: 'RJT' },
  { id: 'ST', nameGu: 'સુરત (સેન્ટ્રલ બસ સ્ટેશન)', nameEn: 'Surat (Central)', lat: 21.1959, lng: 72.8302, code: 'SUR' },
  { id: 'BRD', nameGu: 'વડોદરા (સેન્ટ્રલ એસ.ટી. સ્ટેન્ડ)', nameEn: 'Vadodara (Central)', lat: 22.3106, lng: 73.1812, code: 'BRD' },
  { id: 'BVN', nameGu: 'ભાવનગર (એસ.ટી. બસ સ્ટેશન)', nameEn: 'Bhavnagar', lat: 21.7645, lng: 72.1519, code: 'BVN' },
  { id: 'JMN', nameGu: 'જામનગર (એસ.ટી. સ્ટેન્ડ)', nameEn: 'Jamnagar', lat: 22.4707, lng: 70.0577, code: 'JMN' },
  { id: 'BHJ', nameGu: 'ભુજ (કચ્છ એસ.ટી. સ્ટેન્ડ)', nameEn: 'Bhuj (Kutch)', lat: 23.2420, lng: 69.6669, code: 'BHJ' },
  { id: 'PBR', nameGu: 'પોરબંદર (એસ.ટી. સ્ટેન્ડ)', nameEn: 'Porbandar', lat: 21.6417, lng: 69.6293, code: 'PBR' },
  { id: 'DWK', nameGu: 'દ્વારકા (બસ સ્ટેશન)', nameEn: 'Dwarka', lat: 22.2442, lng: 68.9685, code: 'DWK' },
  { id: 'MRB', nameGu: 'મોરબી (નવા બસ સ્ટેન્ડ)', nameEn: 'Morbi', lat: 22.8120, lng: 70.8407, code: 'MRB' },
  { id: 'SDR', nameGu: 'સુરેન્દ્રનગર (બસ સ્ટેન્ડ)', nameEn: 'Surendranagar', lat: 22.7279, lng: 71.6370, code: 'SDR' },
  { id: 'GNR', nameGu: 'ગાંધીનગર (સેક્ટર ૧૧ ડેપો)', nameEn: 'Gandhinagar (Sec 11)', lat: 23.2156, lng: 72.6369, code: 'GNR' },
  { id: 'MSH', nameGu: 'મહેસાણા (બસ સ્ટેન્ડ)', nameEn: 'Mehsana', lat: 23.5880, lng: 72.3693, code: 'MSH' },
  { id: 'PLN', nameGu: 'પાલનપુર (એસ.ટી. સ્ટેશન)', nameEn: 'Palanpur', lat: 24.1724, lng: 72.4346, code: 'PLN' },
  { id: 'AND', nameGu: 'આણંદ (નવું બસ સ્ટેશન)', nameEn: 'Anand', lat: 22.5645, lng: 72.9289, code: 'AND' },
  { id: 'NDD', nameGu: 'નડિયાદ (એસ.ટી. ડેપો)', nameEn: 'Nadiad', lat: 22.6916, lng: 72.8634, code: 'NDD' },
  { id: 'BRC', nameGu: 'ભરૂચ (એસ.ટી. સ્ટેન્ડ)', nameEn: 'Bharuch', lat: 21.7051, lng: 72.9959, code: 'BRC' },
  { id: 'NVS', nameGu: 'નવસારી (બસ સ્ટેન્ડ)', nameEn: 'Navsari', lat: 20.9467, lng: 72.9520, code: 'NVS' },
  { id: 'VLS', nameGu: 'વલસાડ (એસ.ટી. ડેપો)', nameEn: 'Valsad', lat: 20.6105, lng: 72.9268, code: 'VLS' },
  { id: 'AMB', nameGu: 'અંબાજી (યાત્રાધામ સ્ટેશન)', nameEn: 'Ambaji', lat: 24.3313, lng: 72.8504, code: 'AMB' }
];

// --- 2. Highway Waypoint Splines for Precision On-Road Driving (NH 51 / SH 26 / NH 27) ---
const HIGHWAY_ROAD_SECTORS = {
  'VRL-SMN': [
    [20.9129, 70.3639], [20.9050, 70.3750], [20.8980, 70.3850], [20.8920, 70.3950],
    [20.8878, 70.4014]
  ],
  'SMN-PRC': [
    [20.8878, 70.4014], [20.8950, 70.4200], [20.9050, 70.4600], [20.9148, 70.5285],
    [20.9200, 70.5750], [20.9238, 70.6135]
  ],
  'PRC-KDN': [
    [20.9238, 70.6135], [20.9100, 70.6300], [20.8750, 70.6550], [20.8350, 70.6750],
    [20.7946, 70.7032]
  ],
  'VRL-PRC': [
    [20.9129, 70.3639], [20.9200, 70.3800], [20.9160, 70.4300], [20.9150, 70.4700],
    [20.9148, 70.5285], [20.9180, 70.5750], [20.9238, 70.6135]
  ],
  'VRL-KDN': [
    [20.9129, 70.3639], [20.9200, 70.3800], [20.9160, 70.4300], [20.9148, 70.5285],
    [20.9238, 70.6135], [20.9100, 70.6300], [20.8750, 70.6550], [20.8350, 70.6750],
    [20.7946, 70.7032]
  ],
  'SMN-KDN': [
    [20.8878, 70.4014], [20.8980, 70.4350], [20.9148, 70.5285], [20.9238, 70.6135],
    [20.8750, 70.6550], [20.7946, 70.7032]
  ],
  'KDN-UNA': [
    [20.7946, 70.7032], [20.8000, 70.7450], [20.8068, 70.8351], [20.8082, 70.9398],
    [20.8242, 71.0392]
  ],
  'UNA-DIU': [
    [20.8242, 71.0392], [20.8000, 71.0300], [20.7750, 71.0180], [20.7500, 71.0080],
    [20.7300, 70.9980], [20.7145, 70.9875]
  ],
  'VRL-UNA': [
    [20.9129, 70.3639], [20.9200, 70.3800], [20.9148, 70.5285], [20.9238, 70.6135],
    [20.7946, 70.7032], [20.8068, 70.8351], [20.8082, 70.9398], [20.8242, 71.0392]
  ],
  'VRL-DIU': [
    [20.9129, 70.3639], [20.9200, 70.3800], [20.9148, 70.5285], [20.9238, 70.6135],
    [20.7946, 70.7032], [20.8242, 71.0392], [20.7145, 70.9875]
  ],
  'PBR-VRL': [
    [21.6425, 69.6288], [21.4500, 69.7800], [21.2545, 69.9548], [21.1948, 70.0210],
    [21.1215, 70.1172], [20.9985, 70.2355], [20.9129, 70.3639]
  ],
  'JND-KSD': [
    [21.5225, 70.4575], [21.4800, 70.4200], [21.4300, 70.3700], [21.3700, 70.3100],
    [21.3025, 70.2480]
  ],
  'KSD-GDDR': [
    [21.3025, 70.2480], [21.2925, 70.2514], [21.2650, 70.2574], [21.2500, 70.2589],
    [21.2298, 70.2595], [21.2044, 70.2631], [21.1814, 70.2655], [21.1641, 70.2692],
    [21.1506, 70.2718], [21.1565, 70.2902], [21.1578, 70.3015]
  ],
  'GDDR-GDU': [
    [21.1578, 70.3015], [21.1547, 70.2863], [21.1492, 70.2743], [21.1381, 70.2742],
    [21.1220, 70.2771], [21.1077, 70.2793], [21.0964, 70.2856], [21.0836, 70.2903],
    [21.0631, 70.2903], [21.0543, 70.2905]
  ],
  'GDU-VRL': [
    [21.0543, 70.2905], [21.0427, 70.2871], [21.0326, 70.2909], [21.0212, 70.2923],
    [21.0116, 70.2989], [20.9960, 70.3097], [20.9866, 70.3155], [20.9711, 70.3282],
    [20.9613, 70.3345], [20.9473, 70.3414], [20.9382, 70.3495], [20.9314, 70.3524],
    [20.9218, 70.3565], [20.9143, 70.3611], [20.9129, 70.3639]
  ],
  'KSD-GDU': [
    [21.3025, 70.2480], [21.2500, 70.2589], [21.2044, 70.2631], [21.1506, 70.2718],
    [21.1077, 70.2793], [21.0836, 70.2903], [21.0543, 70.2905]
  ],
  'KSD-VRL': [
    [21.3025, 70.2480], [21.2650, 70.2574], [21.2298, 70.2595], [21.2044, 70.2631],
    [21.1641, 70.2692], [21.1506, 70.2718], [21.1077, 70.2793], [21.0836, 70.2903],
    [21.0543, 70.2905], [21.0212, 70.2923], [20.9960, 70.3097], [20.9711, 70.3282],
    [20.9473, 70.3414], [20.9218, 70.3565], [20.9129, 70.3639]
  ],
  'KDN-DLS': [
    [20.7946, 70.7032], [20.7980, 70.7400], [20.8010, 70.7800], [20.8068, 70.8351]
  ],
  'DLS-KSRY': [
    [20.8068, 70.8351], [20.8080, 70.8800], [20.8082, 70.9398]
  ],
  'KSRY-UNA': [
    [20.8082, 70.9398], [20.8180, 70.9800], [20.8242, 71.0392]
  ],
  'UPL-DHJ': [
    [21.7335, 70.2828], [21.7335, 70.3500], [21.7348, 70.4502]
  ],
  'DHJ-JND': [
    [21.7348, 70.4502], [21.6800, 70.4500], [21.6000, 70.4550], [21.5225, 70.4575]
  ],
  'JND-PRC': [
    [21.5225, 70.4575], [21.4000, 70.4800], [21.2500, 70.5200], [21.1000, 70.5700],
    [20.9238, 70.6135]
  ],
  'UNA-RJL': [
    [20.8242, 71.0392], [20.8650, 71.1500], [20.9200, 71.2800], [20.9490, 71.4330]
  ],
  'RJL-MHV': [
    [20.9490, 71.4330], [21.0300, 71.5500], [21.0650, 71.6500], [21.0910, 71.7610]
  ],
  'MHV-BVN': [
    [21.0910, 71.7630], [21.2930, 71.8500], [21.4500, 71.9500], [21.7645, 72.1519]
  ],
  'JND-GDL': [
    [21.5222, 70.4579], [21.6500, 70.5800], [21.8000, 70.6900], [21.9619, 70.7925]
  ],
  'GDL-RJT': [
    [21.9619, 70.7925], [22.0800, 70.8000], [22.1800, 70.8010], [22.3039, 70.8022]
  ]
};

// --- 3. Romantic Krinal & Mittal Quotes ---
const LOVE_NOTES = [
  "જિંદગીની દરેક સફર સુંદર બની જાય છે મિત્તલ, જ્યારે તું મારી સાથે હોય છે. - ક્રિનલ ❤️",
  "બસ ગમે તેટલી દૂર જાય, મારું દિલ હંમેશા તારી પાસે જ રહે છે મારા પ્રેમ. - ક્રિનલ ❤️",
  "ઈશ્વર કરે તારી દરેક મુસાફરી સુખરૂપ અને મંગલમય રહે, મારી વ્હાલી મિત્તલ. - ક્રિનલ ❤️",
  "જ્યાં સુધી રસ્તાઓ છે અને શ્વાસ છે, હું તને આ જ રીતે અનહદ પ્રેમ કરતો રહીશ. - ક્રિનલ ❤️",
  "તારા મુખ પરનું હાસ્ય જ મારા જીવનની સૌથી મોટી મૂડી છે, ડિયર વાઈફ મિત્તલ. - ક્રિનલ ❤️"
];

// --- 4. Translations & i18n ---
const I18N = {
  gu: {
    appTitle: 'Mittal💗',
    appSubtitle: 'ક્રિનલ ❤️ મિત્તલ લાઈવ બસ ટ્રેકિંગ',
    tabSearch: 'બસ શોધો',
    tabTrack: 'બસ ટ્રેકિંગ',
    tabStations: 'નજીકનું સ્ટેશન',
    tabBoard: 'સ્ટેશન બોર્ડ',
    tabHelpline: 'હેલ્પલાઇન',
    fromLabel: 'ક્યાંથી (ઉપડવાનું સ્ટેશન)',
    toLabel: 'ક્યાં સુધી (પહોંચવાનું સ્થળ)',
    searchBtn: 'બસ સમયપત્રક શોધો',
    popularRoutes: 'લોકપ્રિય રૂટ્સ:',
    trackBusBtn: 'લાઈવ ટ્રેક કરો',
    fare: 'ભાડું:',
    platform: 'પ્લેટફોર્મ નં:',
    departs: 'ઉપડશે:',
    arrives: 'પહોંચશે:',
    speed: 'ઝડપ:',
    kmh: 'કિમી/કલાક',
    selectStation: 'સ્ટેશન પસંદ કરો',
    stationBoardTitle: 'સ્ટેશન ડિજિટલ બોર્ડ (સમયસારણી)',
    noBusesFound: 'આ રૂટ માટે હાલ કોઈ બસ ઉપલબ્ધ નથી.'
  },
  en: {
    appTitle: 'Mittal💗',
    appSubtitle: 'Krinal ❤️ Mittal Live Bus Tracker',
    tabSearch: 'Search Bus',
    tabTrack: 'Bus Tracking',
    tabStations: 'Nearby Station',
    tabBoard: 'Station Board',
    tabHelpline: 'Helpline',
    fromLabel: 'From Station',
    toLabel: 'To Station',
    searchBtn: 'Search Buses',
    popularRoutes: 'Popular Routes:',
    trackBusBtn: 'Live Track',
    fare: 'Fare:',
    platform: 'Platform No:',
    departs: 'Departs:',
    arrives: 'Arrives:',
    speed: 'Speed:',
    kmh: 'km/h',
    selectStation: 'Select Station',
    stationBoardTitle: 'Digital Station Schedule Board',
    noBusesFound: 'No buses found for this route.'
  }
};

// --- Global Application State ---
let currentLang = 'gu';
let trackMapInstance = null;
let stationsMapInstance = null;
let stationMarkersOnMap = [];

let routeLine = null;
let busMarker = null;
let stopMarkers = [];
let activeTrackingTripCode = null;
let liveTrackingInterval = null;
let activeRoadCoordinates = [];
let activeRouteSegments = [];
let roadCache = {};

let trackMapUserZoom = null;
let isAutoFollowEnabled = true;
let isInitialTripTrack = true;
let currentBusLocation = null;
let deferredPrompt = null;

// Helpers
function parseTimeToMinutes(timeStr) {
  if (!timeStr) return 0;
  const parts = timeStr.trim().split(':');
  return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
}

function t(key) {
  return I18N[currentLang][key] || key;
}

function calculateBearing(lat1, lon1, lat2, lon2) {
  const phi1 = (lat1 * Math.PI) / 180;
  const phi2 = (lat2 * Math.PI) / 180;
  const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;
  const y = Math.sin(deltaLambda) * Math.cos(phi2);
  const x = Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(deltaLambda);
  const theta = Math.atan2(y, x);
  return Math.round(((theta * 180 / Math.PI) + 360) % 360);
}

function getCoordsDist(c1, c2) {
  const dLat = c2[0] - c1[0];
  const dLng = (c2[1] - c1[1]) * Math.cos((c1[0] * Math.PI) / 180);
  return Math.hypot(dLat, dLng);
}

// --- 5. Application Initialization & Celebration Animation ---
let hideSplashScreenFn = null;
let heartsAlreadyLaunched = false;

function triggerGrandCelebrationBurst(originX = null, originY = null) {
  const heartEmojis = ['❤️', '💖', '💕', '💓', '💗', '💘', '💝', '💞', '💟', '💌', '🌸', '✨', '🌟', '🥰', '🌹'];
  let container = document.getElementById('celebration-hearts-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'celebration-hearts-container';
    container.className = 'fixed inset-0 pointer-events-none z-[99999] overflow-hidden select-none';
    document.body.appendChild(container);
  }

  const isCustomPoint = originX != null && originY != null;
  const startX = isCustomPoint ? originX : window.innerWidth / 2;
  const startY = isCustomPoint ? originY : window.innerHeight;

  // 1. Cannon Fireworks Blast (shooting outwards in arcs)
  const cannonCount = 75;
  for (let i = 0; i < cannonCount; i++) {
    const el = document.createElement('div');
    el.className = 'celebration-heart-cannon';
    el.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    const angle = (Math.random() * 140 + 20) * (Math.PI / 180);
    const velocity = Math.random() * 320 + 200;
    const burstX = Math.cos(angle) * velocity * (Math.random() > 0.5 ? 1 : -1) * 1.35;
    const burstY = -(Math.sin(angle) * velocity + 160);

    const size = Math.random() * 16 + 15; // 15px to 31px
    const duration = Math.random() * 1.2 + 2.2; // 2.2s to 3.4s
    const delay = Math.random() * 0.35;

    el.style.left = `${startX}px`;
    el.style.top = `${startY}px`;
    el.style.fontSize = `${size}px`;
    el.style.setProperty('--burst-x', `${burstX}px`);
    el.style.setProperty('--burst-y', `${burstY}px`);
    el.style.setProperty('--rot-1', `${(Math.random() - 0.5) * 90}deg`);
    el.style.setProperty('--rot-2', `${(Math.random() - 0.5) * 180}deg`);
    el.style.setProperty('--rot-3', `${(Math.random() - 0.5) * 270}deg`);
    el.style.setProperty('--rot-4', `${(Math.random() - 0.5) * 360}deg`);
    el.style.animationDuration = `${duration}s`;
    el.style.animationDelay = `${delay}s`;

    container.appendChild(el);
    setTimeout(() => el.remove(), (duration + delay + 0.3) * 1000);
  }

  // 2. Romantic Screen-Wide Floating Stream (swaying upwards)
  const floatCount = 65;
  for (let i = 0; i < floatCount; i++) {
    const el = document.createElement('div');
    el.className = 'celebration-heart';
    el.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    const left = Math.random() * 94 + 3; // 3% to 97%
    const size = Math.random() * 14 + 14; // 14px to 28px
    const duration = Math.random() * 2.2 + 2.8; // 2.8s to 5.0s
    const delay = Math.random() * 1.5;

    el.style.left = `${left}%`;
    el.style.fontSize = `${size}px`;
    el.style.setProperty('--sway-1', `${(Math.random() - 0.5) * 45}px`);
    el.style.setProperty('--sway-2', `${(Math.random() - 0.5) * 55}px`);
    el.style.setProperty('--sway-3', `${(Math.random() - 0.5) * 40}px`);
    el.style.setProperty('--sway-4', `${(Math.random() - 0.5) * 30}px`);
    el.style.animationDuration = `${duration}s`;
    el.style.animationDelay = `${delay}s`;

    container.appendChild(el);
    setTimeout(() => el.remove(), (duration + delay + 0.3) * 1000);
  }
}

function launchCelebrationHearts() {
  if (heartsAlreadyLaunched) return;
  heartsAlreadyLaunched = true;

  // Wave 1: Immediate Cannon Fireworks Blast (140 hearts)
  triggerGrandCelebrationBurst();

  // Wave 2: Left and right celebratory cannons at 380ms (150 hearts)
  setTimeout(() => {
    triggerGrandCelebrationBurst(window.innerWidth * 0.22, window.innerHeight);
    triggerGrandCelebrationBurst(window.innerWidth * 0.78, window.innerHeight);
  }, 380);

  // Wave 3: Grand cascading finale at 850ms (140 hearts)
  setTimeout(() => {
    triggerGrandCelebrationBurst(window.innerWidth * 0.5, window.innerHeight);
  }, 850);
}

function setupCelebrationTapListeners() {
  const romanticTargets = [
    document.querySelector('header'),
    document.querySelector('.love-banner'),
    document.getElementById('love-notes-marquee')
  ];
  romanticTargets.forEach(el => {
    if (el) {
      el.addEventListener('click', (e) => {
        triggerGrandCelebrationBurst(e.clientX, e.clientY);
      });
    }
  });
}

function startKeepAliveHeartbeat() {
  setInterval(() => {
    fetch('/api/health')
      .then(r => r.json())
      .catch(() => {});
  }, 120000); // Heartbeat every 2 minutes while page is active
}

function loadHighwayRoads() {
  fetch('/api/highway-roads')
    .then(r => r.json())
    .then(data => {
      if (data && typeof data === 'object') {
        Object.assign(HIGHWAY_ROAD_SECTORS, data);
        console.log(`[Highway] Loaded ${Object.keys(data).length} physical highway sectors via OSRM!`);
      }
    })
    .catch(err => {
      fetch('./highway_roads.json')
        .then(r => r.json())
        .then(data => Object.assign(HIGHWAY_ROAD_SECTORS, data))
        .catch(e => console.warn('Local highway roads load failed:', e));
    });
}

function initSplashScreen() {
  const splash = document.getElementById('splash-screen');
  const prog = document.getElementById('splash-progress');
  if (prog) {
    setTimeout(() => { prog.style.width = '75%'; }, 150);
  }

  hideSplashScreenFn = () => {
    if (prog) prog.style.width = '100%';
    setTimeout(() => {
      if (splash) {
        splash.classList.add('splash-hidden');
        // User requirement: "લોડિંગ એનિમેશન પૂર્ણ થયા બાદ સેલિબ્રેશનમાં નાના નાના દિલ વિવિધ પ્રકારના ઉડવા જોઈએ"
        launchCelebrationHearts();
        setTimeout(() => splash.remove(), 700);
      }
    }, 400);
  };

  // Fallback auto-hide after 1.6s
  setTimeout(() => {
    if (hideSplashScreenFn) hideSplashScreenFn();
  }, 1600);
}

document.addEventListener('DOMContentLoaded', () => {
  initSplashScreen();
  loadHighwayRoads();
  initStationDropdowns();
  initTabs();
  initPopularRoutes();
  initStationBoardDropdown();
  initLoveNotes();
  initPwaInstall();
  initShareApp();
  initHelpline();
  initPnrTracking();
  setupCelebrationTapListeners();
  startKeepAliveHeartbeat();

  // Initial bus search (Veraval to Kodinar)
  handleSearch();

  // Register PWA Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(() => console.log('Mittal💗 PWA Service Worker Registered'))
      .catch(err => console.error('SW Registration Failed:', err));
  }
});

// Share App Feature
function initShareApp() {
  const shareBtn = document.getElementById('btn-share-app');
  if (!shareBtn) return;

  shareBtn.addEventListener('click', async () => {
    const shareText = `Mittal💗 - GSRTC લાઈવ બસ ટ્રેકિંગ એપ 🚌💕\nફોનમાં ઇન્સ્ટોલ કરવા માટે આ લિંક Chrome અથવા Safari બ્રાઉઝરમાં ખોલો:`;
    const shareData = {
      title: 'Mittal💗 - GSRTC Live Tracker',
      text: shareText,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled share
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareText}\n${window.location.href}`);
        alert('એપ લિંક કોપી થઈ ગઈ છે! તમે WhatsApp પર મિત્તલ અથવા અન્ય સાથે શેર કરી શકો છો 💕 (Chrome માં ખોલવા જણાવવું)');
      } catch (e) {
        prompt('આ લિંક કોપી કરીને WhatsApp પર શેર કરો:', window.location.href);
      }
    }
  });
}

// Love Notes Feature
function initLoveNotes() {
  const openBtn = document.getElementById('btn-open-love-note');
  const closeBtn = document.getElementById('btn-close-love-note');
  const ackBtn = document.getElementById('btn-ack-love-note');
  const modal = document.getElementById('love-note-modal');

  const showRandomNote = () => {
    const textEl = document.getElementById('love-note-text');
    if (textEl) {
      const idx = Math.floor(Math.random() * LOVE_NOTES.length);
      textEl.innerText = LOVE_NOTES[idx];
    }
    modal?.classList.remove('hidden');
  };

  openBtn?.addEventListener('click', showRandomNote);
  closeBtn?.addEventListener('click', () => modal?.classList.add('hidden'));
  ackBtn?.addEventListener('click', () => modal?.classList.add('hidden'));
}

// PWA Installation Handlers (Android & iPhone Support)
function initPwaInstall() {
  const banner = document.getElementById('pwa-install-banner');
  const installHeaderBtn = document.getElementById('btn-install-app');
  const installModal = document.getElementById('install-modal');
  const triggerBtn = document.getElementById('btn-trigger-install-prompt');
  const closeBtn = document.getElementById('btn-close-install-modal');
  const closeBottomBtn = document.getElementById('btn-close-install-modal-bottom');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    banner?.classList.remove('hidden');
  });

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`PWA install prompt outcome: ${outcome}`);
      deferredPrompt = null;
      banner?.classList.add('hidden');
      installModal?.classList.add('hidden');
    } else {
      // If prompt not available (e.g. iPhone, or already installed, or browser menu needed)
      installModal?.classList.remove('hidden');
    }
  };

  installHeaderBtn?.addEventListener('click', handleInstallClick);
  triggerBtn?.addEventListener('click', handleInstallClick);
  closeBtn?.addEventListener('click', () => installModal?.classList.add('hidden'));
  closeBottomBtn?.addEventListener('click', () => installModal?.classList.add('hidden'));

  window.addEventListener('appinstalled', () => {
    banner?.classList.add('hidden');
    installModal?.classList.add('hidden');
    deferredPrompt = null;
    alert('Mittal💗 એપ સફળતાપૂર્વક તમારા ફોનમાં ઇન્સ્ટોલ થઈ ગઈ છે! 💖');
  });
}

function updateI18nLabels() {
  const title = document.getElementById('app-title');
  const subtitle = document.getElementById('app-subtitle');
  if (title) title.innerText = t('appTitle');
  if (subtitle) subtitle.innerText = t('appSubtitle');

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.innerText = t(key);
  });
}

// --- Navigation Tabs & View Switching ---
function initTabs() {
  const tabBtns = document.querySelectorAll('.nav-tab-btn');
  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });
}

function switchTab(tabName) {
  document.querySelectorAll('.tab-content').forEach((view) => view.classList.add('hidden'));
  document.querySelectorAll('.nav-tab-btn').forEach((btn) => {
    btn.classList.remove('text-rose-700', 'bg-rose-50', 'font-bold', 'active-tab');
    btn.classList.add('text-slate-600', 'font-semibold');
  });

  const activeView = document.getElementById(`view-${tabName}`);
  const activeBtn = document.querySelector(`.nav-tab-btn[data-tab="${tabName}"]`);

  if (activeView) activeView.classList.remove('hidden');
  if (activeBtn) {
    activeBtn.classList.remove('text-slate-600', 'font-semibold');
    activeBtn.classList.add('text-rose-700', 'bg-rose-50', 'font-bold', 'active-tab');
  }

  if (tabName === 'track') {
    initTrackMapIfNeeded();
    setTimeout(() => {
      if (trackMapInstance) trackMapInstance.invalidateSize();
    }, 200);
  } else if (tabName === 'pnr') {
    initPnrMapIfNeeded();
    setTimeout(() => {
      if (pnrMapInstance) pnrMapInstance.invalidateSize();
    }, 200);
  } else if (tabName === 'stations') {
    initStationsMapIfNeeded();
    setTimeout(() => {
      if (stationsMapInstance) stationsMapInstance.invalidateSize();
    }, 200);
  } else if (tabName === 'board') {
    renderStationBoard();
  } else if (tabName === 'helpline') {
    initHelpline();
  }
}

// Station Dropdowns
function initStationDropdowns() {
  const fromSelect = document.getElementById('select-from');
  const toSelect = document.getElementById('select-to');
  const swapBtn = document.getElementById('btn-swap');
  if (!fromSelect || !toSelect) return;

  const prevFrom = fromSelect.value || 'VRL';
  const prevTo = toSelect.value || 'KDN';

  const sortedStations = [...STATIONS].sort((a, b) =>
    (currentLang === 'gu' ? a.nameGu : a.nameEn).localeCompare(currentLang === 'gu' ? b.nameGu : b.nameEn)
  );

  const optionsHtml = sortedStations.map((st) => {
    const label = currentLang === 'gu' ? st.nameGu : st.nameEn;
    return `<option value="${st.id}">${label}</option>`;
  }).join('');

  fromSelect.innerHTML = optionsHtml;
  toSelect.innerHTML = optionsHtml;

  fromSelect.value = prevFrom;
  toSelect.value = prevTo;

  fromSelect.addEventListener('change', handleSearch);
  toSelect.addEventListener('change', handleSearch);

  if (swapBtn) {
    swapBtn.addEventListener('click', () => {
      const temp = fromSelect.value;
      fromSelect.value = toSelect.value;
      toSelect.value = temp;
      handleSearch();
    });
  }

  const searchBtn = document.getElementById('btn-search-buses');
  if (searchBtn) {
    searchBtn.addEventListener('click', handleSearch);
  }
}

// Popular Routes Pills
function initPopularRoutes() {
  const container = document.getElementById('popular-routes-container');
  if (!container) return;

  const routes = [
    { from: 'VRL', to: 'KDN', labelGu: 'વેરાવળ ➔ કોડીનાર', labelEn: 'Veraval ➔ Kodinar' },
    { from: 'VRL', to: 'UNA', labelGu: 'વેરાવળ ➔ ઉના', labelEn: 'Veraval ➔ Una' },
    { from: 'VRL', to: 'DIU', labelGu: 'વેરાવળ ➔ દીવ', labelEn: 'Veraval ➔ Diu' },
    { from: 'JND', to: 'UNA', labelGu: 'જૂનાગઢ ➔ ઉના (વાયા પ્રાચી)', labelEn: 'Junagadh ➔ Una (via Prachi)' },
    { from: 'UPL', to: 'UNA', labelGu: 'ઉપલેટા ➔ ઉના', labelEn: 'Upleta ➔ Una' },
    { from: 'VRL', to: 'JND', labelGu: 'વેરાવળ ➔ જૂનાગઢ', labelEn: 'Veraval ➔ Junagadh' },
    { from: 'RJT', to: 'VRL', labelGu: 'રાજકોટ ➔ વેરાવળ', labelEn: 'Rajkot ➔ Veraval' },
    { from: 'ADI', to: 'SMN', labelGu: 'અમદાવાદ ➔ સોમનાથ', labelEn: 'Ahmedabad ➔ Somnath' }
  ];

  container.innerHTML = routes.map((r) => {
    const label = currentLang === 'gu' ? r.labelGu : r.labelEn;
    return `
      <button onclick="selectPopularRoute('${r.from}', '${r.to}')"
        class="px-3.5 py-1.5 text-xs font-semibold bg-white border border-rose-200 text-rose-800 rounded-full shadow-sm hover:bg-rose-50 active:scale-95 transition-all">
        ${label}
      </button>
    `;
  }).join('');
}

window.selectPopularRoute = function(fromId, toId) {
  const fromSelect = document.getElementById('select-from');
  const toSelect = document.getElementById('select-to');
  if (fromSelect && toSelect) {
    fromSelect.value = fromId;
    toSelect.value = toId;
    handleSearch();
  }
};

// --- 6. Bus Search & API Relay ---
async function handleSearch() {
  const fromSelect = document.getElementById('select-from');
  const toSelect = document.getElementById('select-to');
  const container = document.getElementById('bus-list-container');
  const countBadge = document.getElementById('bus-count-badge');
  if (!fromSelect || !toSelect || !container) return;

  const fromCode = fromSelect.value;
  const toCode = toSelect.value;

  if (countBadge) countBadge.innerText = "શોધી રહ્યું છે...";
  container.innerHTML = `
    <div class="p-8 text-center bg-white rounded-3xl shadow-sm border border-rose-100 my-4 fade-in">
      <div class="relative w-16 h-16 mx-auto mb-3 flex items-center justify-center">
        <div class="absolute inset-0 rounded-2xl bg-rose-200 animate-ping opacity-50"></div>
        <div class="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-rose-600 to-rose-700 flex items-center justify-center shadow-lg text-2xl">
          🚌
        </div>
      </div>
      <p class="text-rose-950 font-black text-sm">GSRTC લાઈવ બસો શોધી રહ્યા છીએ...</p>
      <p class="text-[11px] text-slate-500 mt-0.5">અસલ સમયપત્રક અને GPS સ્થિતિ ચકાસી રહ્યા છીએ</p>
      <div class="w-36 h-1.5 bg-rose-100 rounded-full mx-auto mt-3 overflow-hidden">
        <div class="h-full bg-rose-600 rounded-full shimmer-loader"></div>
      </div>
    </div>
  `;

  try {
    const resp = await fetch(`/api/buses?from=${encodeURIComponent(fromCode)}&to=${encodeURIComponent(toCode)}`);
    if (!resp.ok) throw new Error('API request failed');
    const buses = await resp.json();
    renderBusList(buses);
  } catch (err) {
    console.error('Error fetching buses:', err);
    container.innerHTML = `
      <div class="p-8 text-center bg-white rounded-3xl shadow-sm border border-rose-200 my-4">
        <div class="text-4xl mb-2">🚌</div>
        <p class="text-slate-700 font-medium">${t('noBusesFound')}</p>
        <button onclick="handleSearch()" class="mt-4 px-4 py-2 bg-rose-600 text-white rounded-xl text-xs font-bold">ફરી પ્રયાસ કરો</button>
      </div>
    `;
    if (countBadge) countBadge.innerText = "0 બસો";
  } finally {
    if (hideSplashScreenFn) hideSplashScreenFn();
  }
}

// Render Bus Schedule Cards
function renderBusList(buses) {
  const container = document.getElementById('bus-list-container');
  const countBadge = document.getElementById('bus-count-badge');
  if (!container) return;

  if (countBadge) {
    countBadge.innerText = `${buses.length} બસો ઉપલબ્ધ`;
  }

  if (buses.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center bg-white rounded-3xl shadow-sm border border-rose-200 my-4">
        <div class="text-4xl mb-2">🚌</div>
        <p class="text-slate-600 font-medium">${t('noBusesFound')}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = buses.map((bus) => {
    let serviceBadgeColor = 'bg-rose-100 text-rose-800 border-rose-300';
    if (bus.serviceClass.includes('GURJAR')) serviceBadgeColor = 'bg-amber-100 text-amber-900 border-amber-300';
    else if (bus.serviceClass.includes('LOCAL')) serviceBadgeColor = 'bg-emerald-100 text-emerald-900 border-emerald-300';
    else if (bus.serviceClass.includes('LUX') || bus.serviceClass.includes('SLP')) serviceBadgeColor = 'bg-indigo-100 text-indigo-900 border-indigo-300';

    return `
      <div class="bg-white rounded-3xl p-4 shadow-sm border border-rose-100/80 hover:shadow-md transition-all relative overflow-hidden group">
        <!-- Top Row: Route Name & Badge -->
        <div class="flex items-start justify-between gap-2 mb-2">
          <div>
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="px-2.5 py-0.5 text-[11px] font-bold rounded-full border ${serviceBadgeColor}">
                ${bus.serviceClass}
              </span>
              <span class="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                ${bus.vehicleNo}
              </span>
              ${bus.hasLiveGps ? `
                <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping"></span>
                  લાઈવ GPS સક્રિય
                </span>
              ` : `
                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200">
                  ⚠️ સમયપત્રક (GPS ઑફલાઇન)
                </span>
              `}
            </div>
            <h3 class="text-sm font-extrabold text-slate-800 mt-1 leading-snug">
              ${bus.routeName}
            </h3>
          </div>
          <span class="text-[11px] font-bold px-2 py-1 bg-rose-50 text-rose-700 rounded-lg whitespace-nowrap">
            ${bus.status}
          </span>
        </div>

        <!-- Middle: Time & Path -->
        <div class="bg-rose-50/50 rounded-2xl p-3 my-2 border border-rose-100/60">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-[10px] uppercase font-bold text-slate-500">${t('departs')}</p>
              <p class="text-lg font-black text-slate-900">${bus.departureTime}</p>
              <p class="text-xs font-semibold text-slate-600 truncate max-w-[110px]">${bus.fromStation}</p>
            </div>
            <div class="flex flex-col items-center px-2">
              <span class="text-[10px] font-bold text-rose-600 mb-0.5">${bus.duration}</span>
              <div class="w-24 h-0.5 bg-rose-300 relative flex items-center justify-center">
                <span class="w-2 h-2 rounded-full bg-rose-600 absolute -top-[3px]"></span>
              </div>
              <span class="text-[9px] text-slate-500 font-medium mt-0.5">${bus.totalStops} સ્ટોપ</span>
            </div>
            <div class="text-right">
              <p class="text-[10px] uppercase font-bold text-slate-500">${t('arrives')}</p>
              <p class="text-lg font-black text-slate-900">${bus.arrivalTime}</p>
              <p class="text-xs font-semibold text-slate-600 truncate max-w-[110px]">${bus.toStation}</p>
            </div>
          </div>

          ${bus.intermediateStops && bus.intermediateStops.length > 2 ? `
            <div class="mt-2 pt-2 border-t border-rose-100 text-[11px] text-slate-600 flex items-center gap-1 truncate">
              <span class="font-bold text-rose-700">વાયા:</span>
              <span>${bus.intermediateStops.slice(1, -1).slice(0, 3).join(', ')}</span>
            </div>
          ` : ''}
        </div>

        <!-- Bottom Action Bar -->
        <div class="flex items-center justify-between pt-1">
          <div class="text-xs text-slate-500 font-medium">
            <span>ડેપો: <strong class="text-slate-700">${bus.depotName}</strong></span>
          </div>
          <button onclick="startLiveTrack('${bus.tripCode}')"
            class="px-4 py-2 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white rounded-xl text-xs font-bold shadow-sm shadow-rose-500/20 active:scale-95 transition-all flex items-center gap-1.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            ${bus.hasLiveGps ? 'લાઈવ ટ્રેક કરો' : 'રૂટ અને સમયપત્રક'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// --- 7. DEDICATED BUS TRACKING MAP & ON-ROAD ENGINE ---
function initTrackMapIfNeeded() {
  const mapElement = document.getElementById('bus-track-map');
  if (!mapElement || trackMapInstance) return;

  trackMapInstance = L.map('bus-track-map', {
    zoomControl: true,
    attributionControl: false
  }).setView([20.90, 70.65], 11);

  // Official Google Maps Tile Layers
  const googleRoadmap = L.tileLayer('https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    subdomains: ['0', '1', '2', '3'],
    maxZoom: 20,
    attribution: '© Google Maps'
  }).addTo(trackMapInstance);

  const googleSatellite = L.tileLayer('https://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
    subdomains: ['0', '1', '2', '3'],
    maxZoom: 20,
    attribution: '© Google Maps'
  });

  const googleTraffic = L.tileLayer('https://mt{s}.google.com/vt/lyrs=m,traffic&x={x}&y={y}&z={z}', {
    subdomains: ['0', '1', '2', '3'],
    maxZoom: 20,
    attribution: '© Google Maps'
  });

  L.control.layers({
    '🗺️ ગૂગલ મેપ': googleRoadmap,
    '🛰️ સેટેલાઇટ': googleSatellite,
    '🚦 ટ્રાફિક': googleTraffic
  }, null, { position: 'topright' }).addTo(trackMapInstance);

  // Zoom listener: preserve user's zoom level strictly
  trackMapInstance.on('zoomend', () => {
    trackMapUserZoom = trackMapInstance.getZoom();
  });

  // Auto-follow toggle button
  const autoFollowBtn = document.getElementById('btn-toggle-autofollow');
  const autoFollowLabel = document.getElementById('label-autofollow');
  if (autoFollowBtn) {
    autoFollowBtn.addEventListener('click', () => {
      isAutoFollowEnabled = !isAutoFollowEnabled;
      if (autoFollowLabel) {
        autoFollowLabel.innerText = isAutoFollowEnabled ? 'ઓટો-ફોલો ચાલુ' : 'ઓટો-ફોલો બંધ';
      }
      autoFollowBtn.classList.toggle('bg-rose-100', !isAutoFollowEnabled);
      if (isAutoFollowEnabled && currentBusLocation) {
        trackMapInstance.panTo([currentBusLocation.lat, currentBusLocation.lng], { animate: true });
      }
    });
  }

  // Center on Bus Button
  const centerBusBtn = document.getElementById('btn-center-bus');
  if (centerBusBtn) {
    centerBusBtn.addEventListener('click', () => {
      if (currentBusLocation && trackMapInstance) {
        const curZoom = (trackMapUserZoom !== null && trackMapUserZoom >= 13) ? trackMapUserZoom : 14;
        trackMapInstance.setView([currentBusLocation.lat, currentBusLocation.lng], curZoom, { animate: true });
        trackMapUserZoom = curZoom;
      } else {
        alert('હાલ કોઈ બસ ટ્રેકિંગ ચાલુ નથી. કૃપા કરીને પહેલા કોઈપણ બસનું "ટ્રેક કરો" બટન દબાવો.');
      }
    });
  }
}

// --- 8. DEDICATED STATION EXPLORER & NEARBY MAP ---
function initStationsMapIfNeeded() {
  const mapElement = document.getElementById('stations-map');
  if (!mapElement || stationsMapInstance) return;

  stationsMapInstance = L.map('stations-map', {
    zoomControl: true,
    attributionControl: false
  }).setView([20.90, 70.65], 9);

  const googleRoadmap = L.tileLayer('https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    subdomains: ['0', '1', '2', '3'],
    maxZoom: 20,
    attribution: '© Google Maps'
  }).addTo(stationsMapInstance);

  const googleSatellite = L.tileLayer('https://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
    subdomains: ['0', '1', '2', '3'],
    maxZoom: 20,
    attribution: '© Google Maps'
  });

  const googleTraffic = L.tileLayer('https://mt{s}.google.com/vt/lyrs=m,traffic&x={x}&y={y}&z={z}', {
    subdomains: ['0', '1', '2', '3'],
    maxZoom: 20,
    attribution: '© Google Maps'
  });

  L.control.layers({
    '🗺️ ગૂગલ મેપ': googleRoadmap,
    '🛰️ સેટેલાઇટ': googleSatellite,
    '🚦 ટ્રાફિક': googleTraffic
  }, null, { position: 'topright' }).addTo(stationsMapInstance);

  // Plot All Station Pins on Stations Map
  stationMarkersOnMap = [];
  STATIONS.forEach((st) => {
    const pin = L.circleMarker([st.lat, st.lng], {
      radius: 7,
      color: '#be123c',
      fillColor: '#ffffff',
      fillOpacity: 1,
      weight: 2.5
    }).addTo(stationsMapInstance);

    pin.bindTooltip(st.nameGu, { direction: 'top', offset: [0, -6] });
    pin.on('click', () => openStationModal(st.id));
    stationMarkersOnMap.push({ station: st, marker: pin });
  });

  // Station Search Bar handler
  const searchInput = document.getElementById('input-station-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) return;
      const found = STATIONS.find(s =>
        s.nameGu.toLowerCase().includes(q) ||
        s.nameEn.toLowerCase().includes(q) ||
        s.id.toLowerCase().includes(q) ||
        s.code.toLowerCase().includes(q)
      );
      if (found && stationsMapInstance) {
        stationsMapInstance.setView([found.lat, found.lng], 13, { animate: true });
        const markerObj = stationMarkersOnMap.find(m => m.station.id === found.id);
        if (markerObj) {
          markerObj.marker.openTooltip();
        }
      }
    });
  }

  // "📍 મારું નજીકનું સ્ટેશન શોધો" Feature
  const findNearestBtn = document.getElementById('btn-find-nearest-station');
  if (findNearestBtn) {
    findNearestBtn.addEventListener('click', () => {
      findNearestBtn.innerHTML = '<span>⏳</span> શોધી રહ્યું છે...';
      if (!navigator.geolocation) {
        findNearestBtn.innerHTML = '<span>📍</span> મારું નજીકનું સ્ટેશન શોધો';
        openStationModal('VRL');
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          findNearestBtn.innerHTML = '<span>📍</span> મારું નજીકનું સ્ટેશન શોધો';
          const { latitude, longitude } = pos.coords;

          let closest = null;
          let minDist = Infinity;
          STATIONS.forEach((st) => {
            const d = Math.hypot(st.lat - latitude, st.lng - longitude);
            if (d < minDist) {
              minDist = d;
              closest = st;
            }
          });

          if (closest) {
            stationsMapInstance.setView([closest.lat, closest.lng], 13, { animate: true });
            const markerObj = stationMarkersOnMap.find(m => m.station.id === closest.id);
            if (markerObj) markerObj.marker.openTooltip();
            openStationModal(closest.id);
          }
        },
        (err) => {
          findNearestBtn.innerHTML = '<span>📍</span> મારું નજીકનું સ્ટેશન શોધો';
          stationsMapInstance.setView([20.9010, 70.3629], 13, { animate: true });
          openStationModal('VRL');
        },
        { enableHighAccuracy: true, timeout: 6000 }
      );
    });
  }

  // Close Station Modal handler
  const closeBtn = document.getElementById('btn-close-station-modal');
  const modal = document.getElementById('station-bus-modal');
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  }
}

// Realistic 3D GSRTC Bus Marker HTML (Zero-offset anchor: strictly centered at [20, 20])
function createRealisticBusIcon(busNo, bearing, speed) {
  const roundedBearing = Math.round(bearing || 0);
  const roundedSpeed = Math.round(speed || 0);

  return L.divIcon({
    className: 'custom-bus-container',
    html: `
      <div style="position: relative; width: 40px; height: 40px; pointer-events: auto;">
        <!-- Floating Live Speed & Bus Number Pill (Hovering directly above the bus without displacing center anchor) -->
        <div style="position: absolute; bottom: calc(100% + 5px); left: 50%; transform: translateX(-50%); pointer-events: none;" class="bg-slate-900/95 text-white px-2 py-0.5 rounded-full text-[10px] font-extrabold whitespace-nowrap shadow-lg border border-rose-500 flex items-center gap-1">
          <span class="w-1.5 h-1.5 rounded-full ${roundedSpeed > 0 ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}"></span>
          <span>${busNo}</span>
          <span class="text-rose-400 font-mono">${roundedSpeed} km/h</span>
        </div>

        <!-- 3D Rotating Bus with Headlight Beam (Center strictly at 20px, 20px) -->
        <div style="position: absolute; top: 0; left: 0; width: 40px; height: 40px; transform: rotate(${roundedBearing}deg); transform-origin: 20px 20px; transition: transform 0.6s ease-out;">
          ${roundedSpeed > 0 ? '<div class="headlight-beam"></div>' : ''}
          <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-700 via-rose-600 to-rose-500 shadow-2xl flex items-center justify-center border-2 border-white transform hover:scale-110 transition-transform">
            <img src="./icons/bus-marker.png" alt="Bus" class="w-6 h-6 object-contain" />
          </div>
        </div>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  });
}

function normalizePlaceKey(p) {
  if (!p) return '';
  const code = (p.placeCode || '').toUpperCase().trim();
  const name = (p.placeName || '').toUpperCase().trim();

  if (code === 'GDU' || name.includes('GADU')) return 'GDU';
  if (code === 'GDDR' || name.includes('MALIYA') || name.includes('GADODAR')) return 'GDDR';
  if (code === 'KSD' || name.includes('KESHOD')) return 'KSD';
  if (code === 'VRL' || name.includes('VERAVAL')) return 'VRL';
  if (code === 'SMN' || code === 'SMNT' || name.includes('SOMNATH')) return 'SMN';
  if (code === 'GRKMD' || name.includes('GORAKH')) return 'GRKMD';
  if (code === 'PRC' || code === 'PRCH' || name.includes('PRAC') || name.includes('PRAN')) return 'PRC';
  if (code === 'TLG' || name.includes('TALALA')) return 'TLG';
  if (code === 'KDN' || name.includes('KODINAR')) return 'KDN';
  if (code === 'DLS' || name.includes('DOLASA')) return 'DLS';
  if (code === 'KSRY' || name.includes('KESARIYA')) return 'KSRY';
  if (code === 'UNA' || name.includes('UNA')) return 'UNA';
  if (code === 'DIU' || name.includes('DIU')) return 'DIU';
  if (code === 'UPL' || code === 'UPT' || name.includes('UPLETA')) return 'UPL';
  if (code === 'DHJ' || code === 'DRJ' || name.includes('DHORAJI')) return 'DHJ';
  if (code === 'SPD' || name.includes('SUPEDI')) return 'SPD';
  if (code === 'JND' || name.includes('JUNAGADH')) return 'JND';
  if (code === 'VNTL' || name.includes('VANTHALI')) return 'VNTL';
  if (code === 'PBR' || name.includes('PORBANDAR')) return 'PBR';
  if (code === 'MDVPR' || name.includes('MADHAVPUR')) return 'MDVPR';
  if (code === 'LOYEJ' || name.includes('LOYEJ')) return 'LOYEJ';
  if (code === 'MNG' || code === 'MGL' || name.includes('MANGROL')) return 'MNG';
  if (code === 'CHRVD' || name.includes('CHORVAD')) return 'CHRVD';
  if (code === 'RJL' || name.includes('RAJULA')) return 'RJL';
  if (code === 'MHV' || name.includes('MAHUVA')) return 'MHV';
  if (code === 'BVN' || name.includes('BHAVNAGAR')) return 'BVN';
  if (code === 'RJT' || name.includes('RAJKOT')) return 'RJT';
  if (code === 'GDL' || name.includes('GONDAL')) return 'GDL';
  if (code === 'ADI' || code === 'GTM' || name.includes('AHMEDABAD')) return 'ADI';

  return code || name;
}

// Fetch or generate highway coordinates for a segment between two stops
function getRoadSegmentCoords(p1, p2) {
  const norm1 = normalizePlaceKey(p1);
  const norm2 = normalizePlaceKey(p2);
  const s1 = (p1.placeCode || p1.placeName || '').toUpperCase().trim();
  const s2 = (p2.placeCode || p2.placeName || '').toUpperCase().trim();

  const keyNorm1 = `${norm1}-${norm2}`;
  const keyNorm2 = `${norm2}-${norm1}`;
  const key1 = `${s1}-${s2}`;
  const key2 = `${s2}-${s1}`;
  const cacheKey = `${p1.lat},${p1.lng}_${p2.lat},${p2.lng}`;

  if (roadCache[cacheKey]) return roadCache[cacheKey];

  if (HIGHWAY_ROAD_SECTORS[keyNorm1]) {
    roadCache[cacheKey] = HIGHWAY_ROAD_SECTORS[keyNorm1];
    return HIGHWAY_ROAD_SECTORS[keyNorm1];
  }
  if (HIGHWAY_ROAD_SECTORS[keyNorm2]) {
    const rev = [...HIGHWAY_ROAD_SECTORS[keyNorm2]].reverse();
    roadCache[cacheKey] = rev;
    return rev;
  }
  if (HIGHWAY_ROAD_SECTORS[key1]) {
    roadCache[cacheKey] = HIGHWAY_ROAD_SECTORS[key1];
    return HIGHWAY_ROAD_SECTORS[key1];
  }
  if (HIGHWAY_ROAD_SECTORS[key2]) {
    const rev = [...HIGHWAY_ROAD_SECTORS[key2]].reverse();
    roadCache[cacheKey] = rev;
    return rev;
  }

  // Smooth, high-precision highway curved spline (instant, 0ms latency)
  const fallback = interpolateSegment([p1.lat, p1.lng], [p2.lat, p2.lng], 10);
  roadCache[cacheKey] = fallback;
  return fallback;
}

function interpolateSegment(p1, p2, steps) {
  const result = [];
  for (let s = 0; s <= steps; s++) {
    const r = s / steps;
    // Add subtle realistic natural curvature to straight lines
    const curvature = Math.sin(r * Math.PI) * 0.003;
    result.push([p1[0] + (p2[0] - p1[0]) * r + curvature, p1[1] + (p2[1] - p1[1]) * r]);
  }
  return result;
}

// Generate On-Road Coordinates connecting all intermediate stops (Instant & Synchronous)
function generateOnRoadCoordinates(points) {
  activeRouteSegments = [];
  const fullRoad = [];
  if (!points || points.length < 2) return [];

  for (let i = 0; i < points.length - 1; i++) {
    const seg = getRoadSegmentCoords(points[i], points[i + 1]);
    activeRouteSegments.push(seg);
    if (i === 0) {
      fullRoad.push(...seg);
    } else {
      fullRoad.push(...seg.slice(1));
    }
  }

  return fullRoad;
}

// Mathematical On-Road Projection: Snaps the bus strictly onto physical road geometry
function getPositionOnRoad(curSegIdx, segmentRatio, points, segmentsArray = activeRouteSegments) {
  if (!segmentsArray || segmentsArray.length === 0) {
    const p1 = points[curSegIdx] || points[0];
    const p2 = points[Math.min(curSegIdx + 1, points.length - 1)] || p1;
    const r = Math.max(0, Math.min(1, segmentRatio != null ? segmentRatio : 0.5));
    const lat = p1.lat + (p2.lat - p1.lat) * r;
    const lng = p1.lng + (p2.lng - p1.lng) * r;
    const heading = calculateBearing(p1.lat, p1.lng, p2.lat, p2.lng);
    return { lat, lng, heading };
  }

  const segIdx = Math.max(0, Math.min(curSegIdx, segmentsArray.length - 1));
  const segmentCoords = segmentsArray[segIdx];
  if (!segmentCoords || segmentCoords.length < 2) {
    const p1 = points[segIdx] || points[0];
    const p2 = points[Math.min(segIdx + 1, points.length - 1)] || p1;
    const r = Math.max(0, Math.min(1, segmentRatio != null ? segmentRatio : 0.5));
    const lat = p1.lat + (p2.lat - p1.lat) * r;
    const lng = p1.lng + (p2.lng - p1.lng) * r;
    const heading = calculateBearing(p1.lat, p1.lng, p2.lat, p2.lng);
    return { lat, lng, heading };
  }

  // Calculate cumulative distances along this segment's highway vertices
  const cumDists = [0];
  let totalDist = 0;
  for (let j = 0; j < segmentCoords.length - 1; j++) {
    const d = getCoordsDist(segmentCoords[j], segmentCoords[j + 1]);
    totalDist += d;
    cumDists.push(totalDist);
  }

  if (totalDist === 0) {
    return { lat: segmentCoords[0][0], lng: segmentCoords[0][1], heading: 0 };
  }

  const ratio = Math.max(0, Math.min(1, segmentRatio != null ? segmentRatio : 0.5));
  const targetDist = ratio * totalDist;

  // Find the exact subsegment containing targetDist
  let subIdx = 0;
  for (let j = 0; j < cumDists.length - 1; j++) {
    if (targetDist >= cumDists[j] && targetDist <= cumDists[j + 1]) {
      subIdx = j;
      break;
    }
  }

  const dSpan = cumDists[subIdx + 1] - cumDists[subIdx];
  const subRatio = dSpan > 0 ? (targetDist - cumDists[subIdx]) / dSpan : 0;

  const v1 = segmentCoords[subIdx];
  const v2 = segmentCoords[subIdx + 1];

  const lat = v1[0] + (v2[0] - v1[0]) * subRatio;
  const lng = v1[1] + (v2[1] - v1[1]) * subRatio;
  const heading = calculateBearing(v1[0], v1[1], v2[0], v2[1]);

  return { lat, lng, heading };
}

// Dynamic Corridor Quick-Track Helper
async function trackCorridorBus(corridorType) {
  let targetTripCode = '1315UPTUNAEXP51';
  const now = new Date();
  const curM = now.getHours() * 60 + now.getMinutes();

  if (corridorType === 'JNDUNA') {
    if (curM >= 6 * 60 && curM < 11 * 60 + 45) {
      targetTripCode = '0700JNDUNAEXP51';
    } else if (curM >= 11 * 60 + 45 && curM < 16 * 60 + 30) {
      targetTripCode = '1200JNDUNAEXP51';
    } else if (curM >= 16 * 60 + 30 && curM < 21 * 60) {
      targetTripCode = '1500JNDUNAEXP51';
    } else {
      targetTripCode = '0700JNDUNAEXP51';
    }
  } else if (corridorType === 'UPTUNA') {
    if (curM >= 4 * 60 + 30 && curM < 11 * 60) {
      targetTripCode = '0500UNAUPTLOCAL';
    } else {
      targetTripCode = '1315UPTUNAEXP51';
    }
  } else if (corridorType === 'PBRDIU') {
    if (curM >= 5 * 60 && curM < 12 * 60) {
      targetTripCode = '0545PBRDIUEXP51';
    } else {
      targetTripCode = '1415PBRDIUEXP51';
    }
  }
  await startLiveTrack(targetTripCode);
}
window.trackCorridorBus = trackCorridorBus;

// Start Live Real-Time Tracking for Trip Code
async function startLiveTrack(tripCode) {
  if (activeTrackingTripCode !== tripCode) {
    activeTrackingTripCode = tripCode;
    isInitialTripTrack = true;
    trackMapUserZoom = null;
    if (routeLine && trackMapInstance) { trackMapInstance.removeLayer(routeLine); routeLine = null; }
    if (busMarker && trackMapInstance) { trackMapInstance.removeLayer(busMarker); busMarker = null; }
    stopMarkers.forEach(m => trackMapInstance && trackMapInstance.removeLayer(m));
    stopMarkers = [];
  }

  switchTab('track');

  if (liveTrackingInterval) clearInterval(liveTrackingInterval);

  // Initial load
  await updateTrackingOnMap(tripCode, false);

  // Automatic real-time GPS location update every 8 seconds (without page reload)
  liveTrackingInterval = setInterval(() => {
    if (activeTrackingTripCode === tripCode) {
      updateTrackingOnMap(tripCode, true);
    }
  }, 8000);
}

async function updateTrackingOnMap(tripCode, isSilent = false) {
  const card = document.getElementById('live-bus-card');
  if (!isSilent && card) {
    card.innerHTML = `
      <div class="bg-white/95 backdrop-blur rounded-3xl p-4 shadow-lg border border-rose-200 text-center fade-in">
        <div class="relative w-12 h-12 mx-auto mb-2 flex items-center justify-center">
          <div class="absolute inset-0 rounded-full bg-rose-200 animate-ping opacity-50"></div>
          <div class="relative w-10 h-10 rounded-full bg-gradient-to-tr from-rose-600 to-rose-700 flex items-center justify-center shadow-md text-lg text-white">
            🛰️
          </div>
        </div>
        <p class="text-xs font-black text-rose-950">GSRTC સેટેલાઇટ જીપીએસ સાથે કનેક્ટ કરી રહ્યું છે...</p>
        <p class="text-[10px] text-slate-500 mt-0.5">બસનું ચોક્કસ રોડ લોકેશન મેળવી રહ્યા છીએ</p>
        <div class="w-32 h-1.5 bg-rose-100 rounded-full mx-auto mt-2.5 overflow-hidden">
          <div class="h-full bg-rose-600 rounded-full shimmer-loader"></div>
        </div>
      </div>
    `;
  }

  try {
    const resp = await fetch(`/api/track?tripCode=${encodeURIComponent(tripCode)}`);
    if (!resp.ok) throw new Error('Tracking fetch failed');
    const data = await resp.json();
    if (data.error) throw new Error(data.error);

    renderTrackingView(data, isSilent);
  } catch (err) {
    console.error('Track error:', err);
    if (!isSilent && card) {
      card.innerHTML = `
        <div class="bg-white rounded-3xl p-4 shadow-lg border border-rose-200 text-center">
          <p class="text-sm font-bold text-slate-700">આ બસનું લાઈવ લોકેશન હાલ ઉપલબ્ધ નથી.</p>
        </div>
      `;
    }
  }
}

async function renderTrackingView(trackData, isSilent = false) {
  initTrackMapIfNeeded();
  if (!trackMapInstance) return;

  const points = trackData.routePoints || trackData.stops || [];
  if (points.length < 2) return;
  const loc = trackData.currentLocation;
  const hasLiveGps = !!(trackData.hasLiveGps && loc && loc.lat);

  if (isInitialTripTrack || !routeLine) {
    // --- 1. INITIAL LOAD FOR THIS TRIP ---
    if (routeLine) { trackMapInstance.removeLayer(routeLine); routeLine = null; }
    if (busMarker) { trackMapInstance.removeLayer(busMarker); busMarker = null; }
    stopMarkers.forEach(m => trackMapInstance.removeLayer(m));
    stopMarkers = [];

    // Build Highway Road Polyline on Map
    if (trackData.roadCoordinates && trackData.roadCoordinates.length > 1) {
      activeRoadCoordinates = trackData.roadCoordinates;
    } else {
      activeRoadCoordinates = generateOnRoadCoordinates(points);
    }

    routeLine = L.polyline(activeRoadCoordinates, {
      color: '#be123c',
      weight: 6,
      opacity: 0.9,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(trackMapInstance);

    // Add Station Markers along the Route
    points.forEach((pt, idx) => {
      const isTerminus = (idx === 0 || idx === points.length - 1);
      const m = L.circleMarker([pt.lat, pt.lng], {
        radius: isTerminus ? 8 : 5,
        color: isTerminus ? '#be123c' : '#fda4af',
        fillColor: isTerminus ? '#fff' : '#be123c',
        fillOpacity: 1,
        weight: 2.5
      }).addTo(trackMapInstance);

      m.bindTooltip(`${pt.placeName} (${pt.time})`, { direction: 'top' });
      stopMarkers.push(m);
    });

    // Fit route bounds on initial load
    trackMapInstance.fitBounds(routeLine.getBounds(), { padding: [40, 40] });
    setTimeout(() => {
      trackMapUserZoom = trackMapInstance.getZoom();
    }, 400);

    isInitialTripTrack = false;
  }

  // --- 2. BUS MARKER: STRICTLY NO FAKE / ESTIMATED MARKER ---
  if (!hasLiveGps) {
    // Live GPS is not transmitting: remove any leftover marker
    if (busMarker) {
      trackMapInstance.removeLayer(busMarker);
      busMarker = null;
    }
    currentBusLocation = null;
  } else {
    // Verified Authentic Live GPS is available
    const effectiveZoom = (trackMapUserZoom !== null) ? trackMapUserZoom : trackMapInstance.getZoom();
    currentBusLocation = { lat: loc.lat, lng: loc.lng, heading: loc.heading || 0 };

    if (busMarker) {
      busMarker.setLatLng([loc.lat, loc.lng]);
      busMarker.setIcon(createRealisticBusIcon(trackData.vehicleNo, loc.heading, loc.speed));
    } else {
      busMarker = L.marker([loc.lat, loc.lng], {
        icon: createRealisticBusIcon(trackData.vehicleNo, loc.heading, loc.speed),
        zIndexOffset: 1000
      }).addTo(trackMapInstance);
    }

    if (isAutoFollowEnabled) {
      trackMapInstance.panTo([loc.lat, loc.lng], { animate: true, duration: 1.0 });
      if (trackMapInstance.getZoom() !== effectiveZoom) {
        trackMapInstance.setZoom(effectiveZoom);
      }
    }
  }

  // --- 3. LIVE BUS CARD RENDERING ---
  const card = document.getElementById('live-bus-card');
  if (card) {
    if (!hasLiveGps) {
      // User directive: "જો બસ ના બતાવતા હોઈ તો કહી દેવું લોકેશન અવાઈલેબલ નથી પણ એપ ના તમામ રૂટ ની બસો ના લોકેશન સાચા અને સચોટ જોઈએ છે જેમ GSRTC live એપ માં આવે એમ જ"
      card.innerHTML = `
        <div class="bg-amber-50/95 backdrop-blur-md rounded-3xl p-4 shadow-xl border-2 border-amber-300">
          <!-- Top Row: Badges & Route -->
          <div class="flex items-start justify-between gap-2 mb-2">
            <div>
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-rose-100 text-rose-800 border border-rose-300">
                  ${trackData.className || 'EXPRESS'}
                </span>
                ${trackData.vehicleNo ? `
                  <span class="text-xs font-mono font-bold text-slate-800 bg-white px-2 py-0.5 rounded-md border border-slate-300">
                    ${trackData.vehicleNo}
                  </span>
                ` : ''}
                <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  ⚠️ લાઈવ લોકેશન ઉપલબ્ધ નથી
                </span>
              </div>
              <h3 class="text-sm font-black text-slate-900 mt-1">
                ${points[0].placeName} ➔ ${points[points.length - 1].placeName}
              </h3>
            </div>
            <span class="text-[11px] font-bold text-amber-900 bg-amber-100/90 px-2.5 py-1 rounded-lg border border-amber-300 whitespace-nowrap">
              GPS ઑફલાઇન
            </span>
          </div>

          <!-- Truthful Alert Banner Requested by User -->
          <div class="p-3 bg-white/90 rounded-2xl border border-amber-200 my-2 text-left shadow-sm">
            <div class="flex items-start gap-2.5">
              <span class="text-lg">⚠️</span>
              <div class="text-xs text-slate-700 leading-relaxed">
                <strong class="text-amber-950 font-bold block mb-0.5">આ બસનું લાઈવ GPS લોકેશન હાલ ઉપલબ્ધ નથી</strong>
                બસમાં VTS જીપીએસ સિગ્નલ હાલ ઑફલાઇન છે અથવા GSRTC સર્વર પરથી લાઈવ ટ્રેકિંગ પ્રાપ્ત થઈ રહ્યું નથી. મુસાફરીમાં ગેરસમજ કે અસુવિધા ન થાય તે માટે <strong>કોઈપણ અંદાજિત કે બનાવટી લોકેશન દર્શાવવામાં આવતું નથી.</strong>
              </div>
            </div>
          </div>

          <!-- Scheduled Stops & Timetable from GSRTC Database -->
          <div class="bg-rose-50/60 rounded-2xl p-3 border border-rose-100 text-xs text-slate-700 space-y-2">
            <div class="flex items-center justify-between font-bold text-rose-950 border-b border-rose-200 pb-1.5">
              <span>🕒 નિર્ધારિત સમયપત્રક (${points.length} સ્ટોપ)</span>
              <span class="text-[10px] font-medium text-slate-500">સત્તાવાર GSRTC સમય</span>
            </div>
            <div class="flex justify-between items-center text-xs">
              <span class="text-slate-600">પ્રસ્થાન (${points[0].placeName}):</span>
              <strong class="text-slate-900 font-black">${points[0].time}</strong>
            </div>
            <div class="flex justify-between items-center text-xs">
              <span class="text-slate-600">ગંતવ્ય (${points[points.length - 1].placeName}):</span>
              <strong class="text-slate-900 font-black">${points[points.length - 1].time}</strong>
            </div>
            ${points.length > 2 ? `
              <div class="pt-1 text-[11px] text-slate-600">
                <span class="font-bold text-rose-800">મુખ્ય સ્ટોપ:</span>
                ${points.slice(1, -1).map(p => `${p.placeName} (${p.time})`).join(' • ')}
              </div>
            ` : ''}
          </div>

          <!-- Contact & Footer -->
          <div class="pt-2.5 mt-2.5 border-t border-rose-100 flex items-center justify-between text-xs">
            ${trackData.conductorNo ? `
              <a href="tel:${trackData.conductorNo}" class="inline-flex items-center gap-1.5 text-rose-700 font-bold hover:underline">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z"/></svg>
                કંડક્ટર: ${trackData.conductorNo}
              </a>
            ` : `
              <span class="text-slate-500 font-medium">ડેપો: <strong>${trackData.depotName || 'GSRTC'}</strong></span>
            `}
            <span class="text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
              ક્રિનલ ❤️ મિત્તલ 💖
            </span>
          </div>
        </div>
      `;
    } else {
      // Verified Authentic Live GPS active
      const progressPercent = Math.round((trackData.overallProgress || trackData.progressRatio || 0) * 100);
      card.innerHTML = `
        <div class="bg-white/95 backdrop-blur-md rounded-3xl p-4 shadow-xl border border-rose-200">
          <div class="flex items-start justify-between gap-2 mb-2">
            <div>
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-rose-100 text-rose-800 border border-rose-300">
                  ${trackData.className}
                </span>
                <span class="text-xs font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-300">
                  ${trackData.vehicleNo}
                </span>
                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping"></span>
                  ઓન-રોડ લાઈવ GPS
                </span>
              </div>
              <h3 class="text-sm font-black text-slate-900 mt-1">
                ${points[0].placeName} ➔ ${points[points.length - 1].placeName}
              </h3>
            </div>
            <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
              ${loc.speed > 0 ? `${Math.round(loc.speed)} કિમી/કલાક` : 'પ્લેટફોર્મ પર'}
            </span>
          </div>

          <div class="text-[11px] font-bold text-rose-800 bg-rose-50/80 px-2.5 py-1 rounded-xl mb-2 border border-rose-100 flex items-center justify-between">
            <span>🚦 ${trackData.status || loc.status}</span>
            <span class="text-[10px] font-extrabold text-slate-500">${progressPercent}% સફર પૂર્ણ</span>
          </div>

          <div class="my-2">
            <div class="flex justify-between items-center text-[11px] font-bold text-slate-600 mb-1">
              <span>છેલ્લું: <strong class="text-slate-800">${loc.lastStop || points[0].placeName}</strong></span>
              <span>આગળનું: <strong class="text-rose-700">${loc.nextStop || points[1].placeName} (${loc.etaNext || ''})</strong></span>
            </div>
            <div class="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div class="h-full bg-gradient-to-r from-rose-500 to-rose-600 rounded-full transition-all duration-700" style="width: ${progressPercent}%"></div>
            </div>
          </div>

          <div class="pt-2 border-t border-rose-100 flex items-center justify-between text-xs">
            ${trackData.conductorNo ? `
              <a href="tel:${trackData.conductorNo}" class="inline-flex items-center gap-1 text-slate-700 font-semibold hover:text-rose-700">
                <svg class="w-3.5 h-3.5 text-rose-600" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z"/></svg>
                કંડક્ટર: ${trackData.conductorNo}
              </a>
            ` : `
              <span class="text-slate-500 font-medium">ડેપો: <strong>${trackData.depotName}</strong></span>
            `}
            <span class="text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
              ક્રિનલ ❤️ મિત્તલ 💖
            </span>
          </div>
        </div>
      `;
    }
  }
}

// --- 9. Station Modal & Digital Station Board ---
async function openStationModal(stId) {
  const modal = document.getElementById('station-bus-modal');
  const titleEl = document.getElementById('station-modal-title');
  const listEl = document.getElementById('station-modal-buses');
  if (!modal || !titleEl || !listEl) return;

  const st = STATIONS.find((s) => s.id === stId || s.code === stId);
  const stName = currentLang === 'gu' ? st?.nameGu : st?.nameEn;
  titleEl.innerText = `📍 ${stName || stId}`;

  listEl.innerHTML = `
    <div class="p-6 text-center text-slate-500 bg-white rounded-2xl border border-rose-100 my-2">
      <div class="relative w-12 h-12 mx-auto mb-2 flex items-center justify-center">
        <div class="absolute inset-0 rounded-full bg-rose-200 animate-ping opacity-50"></div>
        <div class="relative w-10 h-10 rounded-full bg-gradient-to-tr from-rose-600 to-rose-700 flex items-center justify-center shadow-md text-lg text-white">
          🚏
        </div>
      </div>
      <p class="text-xs font-black text-rose-950">આવનારી બસો શોધી રહ્યા છીએ...</p>
      <div class="w-28 h-1.5 bg-rose-100 rounded-full mx-auto mt-2.5 overflow-hidden">
        <div class="h-full bg-rose-600 rounded-full shimmer-loader"></div>
      </div>
    </div>
  `;
  modal.classList.remove('hidden');

  try {
    const resp = await fetch(`/api/station-buses?stationCode=${encodeURIComponent(stId)}`);
    const buses = await resp.json();

    if (!buses || buses.length === 0) {
      listEl.innerHTML = `<div class="p-4 text-center text-slate-500 bg-rose-50 rounded-2xl">આ સ્ટેશન માટે હાલ કોઈ બસ નિર્ધારિત નથી.</div>`;
      return;
    }

    listEl.innerHTML = buses.map((bus) => `
      <div class="bg-rose-50/50 p-3 rounded-2xl border border-rose-100 flex items-center justify-between gap-3">
        <div>
          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="text-[10px] font-bold px-2 py-0.5 bg-rose-100 text-rose-800 rounded-md">
              ${bus.serviceClass}
            </span>
            <span class="text-[10px] font-mono font-bold text-slate-600 bg-white px-1.5 py-0.5 rounded border border-slate-200">
              ${bus.vehicleNo}
            </span>
          </div>
          <h4 class="text-xs font-extrabold text-slate-800 mt-1">${bus.routeName}</h4>
          <p class="text-[11px] text-slate-500 mt-0.5">
            સમય: <strong class="text-slate-900">${bus.time}</strong> • ${bus.platform} • <span class="text-emerald-700 font-bold">${bus.status}</span>
          </p>
        </div>
        <button onclick="trackFromModal('${bus.tripCode}')" class="px-3 py-1.5 bg-gradient-to-r from-rose-600 to-rose-700 text-white text-xs font-bold rounded-xl shadow-sm whitespace-nowrap active:scale-95">
          ટ્રેક કરો
        </button>
      </div>
    `).join('');
  } catch (err) {
    listEl.innerHTML = `<div class="p-4 text-center text-rose-700">બસો લોડ કરવામાં સમસ્યા આવી. ફરી પ્રયાસ કરો.</div>`;
  }
}

window.trackFromModal = function(tripCode) {
  const modal = document.getElementById('station-bus-modal');
  if (modal) modal.classList.add('hidden');
  startLiveTrack(tripCode);
};

// Station Digital Board
function initStationBoardDropdown() {
  const select = document.getElementById('select-board-station');
  if (!select) return;

  const sorted = [...STATIONS].sort((a, b) =>
    (currentLang === 'gu' ? a.nameGu : a.nameEn).localeCompare(currentLang === 'gu' ? b.nameGu : b.nameEn)
  );

  select.innerHTML = sorted.map((st) => {
    const label = currentLang === 'gu' ? st.nameGu : st.nameEn;
    return `<option value="${st.id}">${label}</option>`;
  }).join('');

  select.value = 'VRL';
  select.addEventListener('change', renderStationBoard);
}

async function renderStationBoard() {
  const select = document.getElementById('select-board-station');
  const container = document.getElementById('board-list-container');
  if (!select || !container) return;

  const stId = select.value || 'VRL';
  container.innerHTML = `
    <div class="p-8 text-center bg-white rounded-3xl shadow-sm border border-rose-100 my-3">
      <div class="relative w-14 h-14 mx-auto mb-3 flex items-center justify-center">
        <div class="absolute inset-0 rounded-2xl bg-rose-200 animate-ping opacity-50"></div>
        <div class="relative w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-600 to-rose-700 flex items-center justify-center shadow-md text-xl text-white">
          📋
        </div>
      </div>
      <p class="text-sm font-black text-rose-950">ડિજિટલ બોર્ડ અપડેટ થઈ રહ્યું છે...</p>
      <p class="text-[11px] text-slate-500 mt-0.5">લાઈવ આગમન અને પ્રસ્થાન સમય મેળવી રહ્યા છીએ</p>
      <div class="w-32 h-1.5 bg-rose-100 rounded-full mx-auto mt-3 overflow-hidden">
        <div class="h-full bg-rose-600 rounded-full shimmer-loader"></div>
      </div>
    </div>
  `;

  try {
    const resp = await fetch(`/api/station-buses?stationCode=${encodeURIComponent(stId)}`);
    const buses = await resp.json();

    if (!buses || buses.length === 0) {
      container.innerHTML = `<div class="p-4 text-center text-slate-500 bg-white rounded-2xl border border-rose-200">આ સ્ટેશન માટે હાલ કોઈ બસ નિર્ધારિત નથી.</div>`;
      return;
    }

    container.innerHTML = buses.map((bus) => `
      <div class="bg-white p-4 rounded-2xl border border-rose-100 shadow-sm flex items-center justify-between gap-3 hover:border-rose-300 transition-colors">
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <span class="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
              ${bus.vehicleNo}
            </span>
            <span class="text-[11px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
              ${bus.serviceClass}
            </span>
            <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              ${bus.status}
            </span>
          </div>
          <h4 class="text-sm font-extrabold text-slate-800">${bus.routeName}</h4>
          <p class="text-xs text-slate-500 mt-0.5">
            સ્થળ: <strong>${bus.destination}</strong> • ${bus.platform}
          </p>
        </div>
        <div class="text-right flex flex-col items-end gap-1.5">
          <span class="text-lg font-black text-rose-800 font-mono">${bus.time}</span>
          <button onclick="startLiveTrack('${bus.tripCode}')" class="px-3 py-1.5 bg-gradient-to-r from-rose-600 to-rose-700 text-white text-xs font-bold rounded-xl shadow-sm active:scale-95">
            ટ્રેક કરો
          </button>
        </div>
      </div>
    `).join('');
  } catch (err) {
    container.innerHTML = `<div class="p-4 text-center text-rose-700">બોર્ડ ડેટા મેળવવામાં ભૂલ થઈ.</div>`;
  }
}

// Helpline Data
const HELPLINES = [
  { nameGu: 'વેરાવળ એસ.ટી. કંટ્રોલ રૂમ', nameEn: 'Veraval ST Control Room', phone: '02876-220130' },
  { nameGu: 'કોડીનાર એસ.ટી. ડેપો', nameEn: 'Kodinar ST Depot', phone: '02795-221235' },
  { nameGu: 'ઉના એસ.ટી. બસ સ્ટેશન', nameEn: 'Una ST Bus Station', phone: '02875-221444' },
  { nameGu: 'જૂનાગઢ ડિવિઝન કંટ્રોલ રૂમ', nameEn: 'Junagadh Division Control', phone: '0285-2630303' },
  { nameGu: 'અમદાવાદ સેન્ટ્રલ હેલ્પલાઈન', nameEn: 'Ahmedabad Central Helpline', phone: '1800-233-6655' }
];

function initHelpline() {
  const container = document.getElementById('helpline-list-container');
  if (!container) return;
  container.innerHTML = HELPLINES.map(h => `
    <div class="bg-white p-4 rounded-2xl border border-rose-100 shadow-sm flex items-center justify-between">
      <div>
        <h4 class="text-sm font-bold text-slate-800">${currentLang === 'gu' ? h.nameGu : h.nameEn}</h4>
        <p class="text-xs text-rose-700 font-mono font-bold mt-0.5">${h.phone}</p>
      </div>
      <a href="tel:${h.phone}" class="p-2.5 bg-rose-50 text-rose-700 rounded-xl hover:bg-rose-100 active:scale-95 transition-all">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      </a>
    </div>
  `).join('');
}

// =========================================================================
// --- 10. DEDICATED NUMBERPLATE & PNR ENGINE (NEW MAP SCREEN) ---
// =========================================================================
let pnrMapInstance = null;
let pnrMapUserZoom = null;
let pnrRouteLine = null;
let pnrBusMarker = null;
let pnrStopMarkers = [];
let pnrTrackingInterval = null;
let pnrCurrentBusLocation = null;
let pnrActiveRouteSegments = [];
let isPnrAutoFollowEnabled = true;
let isInitialPnrTripTrack = true;

function initPnrMapIfNeeded() {
  const mapElement = document.getElementById('pnr-track-map');
  if (!mapElement || pnrMapInstance) return;

  pnrMapInstance = L.map('pnr-track-map', {
    zoomControl: true,
    attributionControl: false
  }).setView([20.90, 70.65], 11);

  const googleRoadmap = L.tileLayer('https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    subdomains: ['0', '1', '2', '3'],
    maxZoom: 20,
    attribution: '© Google Maps'
  }).addTo(pnrMapInstance);

  const googleSatellite = L.tileLayer('https://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
    subdomains: ['0', '1', '2', '3'],
    maxZoom: 20,
    attribution: '© Google Maps'
  });

  const googleTraffic = L.tileLayer('https://mt{s}.google.com/vt/lyrs=m,traffic&x={x}&y={y}&z={z}', {
    subdomains: ['0', '1', '2', '3'],
    maxZoom: 20,
    attribution: '© Google Maps'
  });

  L.control.layers({
    '🗺️ ગૂગલ મેપ': googleRoadmap,
    '🛰️ સેટેલાઇટ': googleSatellite,
    '🚦 ટ્રાફિક': googleTraffic
  }, null, { position: 'topright' }).addTo(pnrMapInstance);

  pnrMapInstance.on('zoomend', () => {
    pnrMapUserZoom = pnrMapInstance.getZoom();
  });

  // Auto-follow toggle button
  const autoFollowBtn = document.getElementById('btn-toggle-pnr-autofollow');
  const autoFollowLabel = document.getElementById('label-pnr-autofollow');
  if (autoFollowBtn) {
    autoFollowBtn.addEventListener('click', () => {
      isPnrAutoFollowEnabled = !isPnrAutoFollowEnabled;
      if (autoFollowLabel) {
        autoFollowLabel.innerText = isPnrAutoFollowEnabled ? 'ઓટો-ફોલો ચાલુ' : 'ઓટો-ફોલો બંધ';
      }
      autoFollowBtn.classList.toggle('bg-rose-100', !isPnrAutoFollowEnabled);
      if (isPnrAutoFollowEnabled && pnrCurrentBusLocation) {
        pnrMapInstance.panTo([pnrCurrentBusLocation.lat, pnrCurrentBusLocation.lng], { animate: true });
      }
    });
  }

  // Center on Bus Button
  const centerBusBtn = document.getElementById('btn-center-pnr-bus');
  if (centerBusBtn) {
    centerBusBtn.addEventListener('click', () => {
      if (pnrCurrentBusLocation && pnrMapInstance) {
        const curZoom = (pnrMapUserZoom !== null && pnrMapUserZoom >= 13) ? pnrMapUserZoom : 14;
        pnrMapInstance.setView([pnrCurrentBusLocation.lat, pnrCurrentBusLocation.lng], curZoom, { animate: true });
        pnrMapUserZoom = curZoom;
      } else {
        alert('હાલ કોઈ બસ ટ્રેક થઈ નથી. કૃપા કરીને ઉપર નંબરપ્લેટ અથવા PNR દાખલ કરીને "ટ્રેક કરો" દબાવો.');
      }
    });
  }
}

function initPnrTracking() {
  const input = document.getElementById('input-pnr-veh');
  const btn = document.getElementById('btn-search-pnr');
  if (btn && input) {
    btn.addEventListener('click', () => {
      const q = input.value.trim();
      if (q) searchAndTrackPnr(q);
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = input.value.trim();
        if (q) searchAndTrackPnr(q);
      }
    });
  }

  loadPnrQuickChips();
}

async function loadPnrQuickChips() {
  const container = document.getElementById('pnr-quick-chips');
  if (!container) return;

  try {
    const resp = await fetch('/api/active-vehicles');
    const vehicles = await resp.json();
    if (vehicles && vehicles.length > 0) {
      container.innerHTML = vehicles.map(v => `
        <button onclick="quickTrackVehicle('${v.query}')" class="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-800 rounded-xl font-bold whitespace-nowrap active:scale-95 transition flex items-center gap-1.5 shadow-sm shrink-0">
          <span class="font-mono text-xs font-black">${v.label}</span>
          <span class="text-[10px] text-slate-600 font-medium">(${v.route})</span>
        </button>
      `).join('');
    }
  } catch (e) {
    console.error('Failed to load quick chips', e);
  }
}

window.quickTrackVehicle = function(query) {
  const input = document.getElementById('input-pnr-veh');
  if (input) input.value = query;
  searchAndTrackPnr(query);
};

async function searchAndTrackPnr(query) {
  const card = document.getElementById('pnr-bus-card');
  if (card) {
    card.innerHTML = `
      <div class="bg-white/95 backdrop-blur rounded-3xl p-4 shadow-lg border border-rose-200 text-center fade-in my-2">
        <div class="relative w-12 h-12 mx-auto mb-2 flex items-center justify-center">
          <div class="absolute inset-0 rounded-full bg-rose-200 animate-ping opacity-50"></div>
          <div class="relative w-10 h-10 rounded-full bg-gradient-to-tr from-rose-600 to-rose-700 flex items-center justify-center shadow-md text-lg text-white">
            🛰️
          </div>
        </div>
        <p class="text-xs font-black text-rose-950">નંબરપ્લેટ / PNR શોધી રહ્યા છીએ...</p>
        <p class="text-[10px] text-slate-500 mt-0.5">સેટેલાઇટ જીપીએસથી બસનું ચોક્કસ લોકેશન મેળવી રહ્યા છીએ</p>
        <div class="w-32 h-1.5 bg-rose-100 rounded-full mx-auto mt-2.5 overflow-hidden">
          <div class="h-full bg-rose-600 rounded-full shimmer-loader"></div>
        </div>
      </div>
    `;
  }

  isInitialPnrTripTrack = true;
  pnrMapUserZoom = null;
  if (pnrTrackingInterval) clearInterval(pnrTrackingInterval);

  await updatePnrTracking(query, false);

  pnrTrackingInterval = setInterval(() => {
    updatePnrTracking(query, true);
  }, 7000);
}

async function updatePnrTracking(query, isSilent = false) {
  const card = document.getElementById('pnr-bus-card');
  try {
    const resp = await fetch(`/api/track-by-vehicle-or-pnr?q=${encodeURIComponent(query)}`);
    const res = await resp.json();
    if (res.error) throw new Error(res.error);

    const trackData = res.data;
    renderPnrTrackingView(trackData, isSilent);
  } catch (err) {
    console.error('PNR Tracking error:', err);
    if (!isSilent && card) {
      card.innerHTML = `
        <div class="bg-white rounded-3xl p-4 shadow-lg border border-rose-200 text-center my-2">
          <p class="text-xs font-bold text-rose-700">${err.message || 'આ નંબરપ્લેટ અથવા PNR માટે લાઈવ ડેટા મળ્યો નથી. કૃપા કરીને સાચો નંબર દાખલ કરો.'}</p>
        </div>
      `;
    }
  }
}

function renderPnrTrackingView(trackData, isSilent = false) {
  initPnrMapIfNeeded();
  if (!pnrMapInstance) return;

  const points = trackData.routePoints || trackData.stops || [];
  if (points.length < 2) return;
  const loc = trackData.currentLocation;
  const hasLiveGps = !!(trackData.hasLiveGps && loc && loc.lat);

  if (isInitialPnrTripTrack || !pnrRouteLine) {
    if (pnrRouteLine) { pnrMapInstance.removeLayer(pnrRouteLine); pnrRouteLine = null; }
    if (pnrBusMarker) { pnrMapInstance.removeLayer(pnrBusMarker); pnrBusMarker = null; }
    pnrStopMarkers.forEach(m => pnrMapInstance.removeLayer(m));
    pnrStopMarkers = [];

    pnrActiveRouteSegments = [];
    let fullRoad = [];
    if (trackData.roadCoordinates && trackData.roadCoordinates.length > 1) {
      fullRoad = trackData.roadCoordinates;
    } else {
      for (let i = 0; i < points.length - 1; i++) {
        const seg = getRoadSegmentCoords(points[i], points[i + 1]);
        pnrActiveRouteSegments.push(seg);
        if (i === 0) fullRoad.push(...seg);
        else fullRoad.push(...seg.slice(1));
      }
    }

    pnrRouteLine = L.polyline(fullRoad, {
      color: '#be123c',
      weight: 6,
      opacity: 0.9,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(pnrMapInstance);

    points.forEach((pt, idx) => {
      const isTerminus = (idx === 0 || idx === points.length - 1);
      const m = L.circleMarker([pt.lat, pt.lng], {
        radius: isTerminus ? 8 : 5,
        color: isTerminus ? '#be123c' : '#fda4af',
        fillColor: isTerminus ? '#fff' : '#be123c',
        fillOpacity: 1,
        weight: 2.5
      }).addTo(pnrMapInstance);

      m.bindTooltip(`${pt.placeName} (${pt.time})`, { direction: 'top' });
      pnrStopMarkers.push(m);
    });

    pnrMapInstance.fitBounds(pnrRouteLine.getBounds(), { padding: [40, 40] });
    setTimeout(() => {
      pnrMapUserZoom = pnrMapInstance.getZoom();
    }, 400);

    isInitialPnrTripTrack = false;
  }

  // --- Bus Marker: Only if authentic GPS exists ---
  if (!hasLiveGps) {
    if (pnrBusMarker) {
      pnrMapInstance.removeLayer(pnrBusMarker);
      pnrBusMarker = null;
    }
    pnrCurrentBusLocation = null;
  } else {
    const effectiveZoom = (pnrMapUserZoom !== null) ? pnrMapUserZoom : pnrMapInstance.getZoom();
    pnrCurrentBusLocation = { lat: loc.lat, lng: loc.lng, heading: loc.heading || 0 };

    if (pnrBusMarker) {
      pnrBusMarker.setLatLng([loc.lat, loc.lng]);
      pnrBusMarker.setIcon(createRealisticBusIcon(trackData.vehicleNo, loc.heading, loc.speed));
    } else {
      pnrBusMarker = L.marker([loc.lat, loc.lng], {
        icon: createRealisticBusIcon(trackData.vehicleNo, loc.heading, loc.speed),
        zIndexOffset: 1000
      }).addTo(pnrMapInstance);
    }

    if (isPnrAutoFollowEnabled) {
      pnrMapInstance.panTo([loc.lat, loc.lng], { animate: true, duration: 1.0 });
      if (pnrMapInstance.getZoom() !== effectiveZoom) {
        pnrMapInstance.setZoom(effectiveZoom);
      }
    }
  }

  // Update details card in #pnr-bus-card
  const card = document.getElementById('pnr-bus-card');
  if (card) {
    if (!hasLiveGps) {
      card.innerHTML = `
        <div class="bg-amber-50/95 backdrop-blur-md rounded-3xl p-4 shadow-xl border-2 border-amber-300 fade-in my-2">
          <div class="flex items-start justify-between gap-2 mb-2">
            <div>
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-rose-100 text-rose-800 border border-rose-300">
                  ${trackData.className || 'EXPRESS'}
                </span>
                ${trackData.vehicleNo ? `
                  <span class="text-xs font-mono font-bold text-slate-800 bg-white px-2 py-0.5 rounded-md border border-slate-300">
                    ${trackData.vehicleNo}
                  </span>
                ` : ''}
                <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                  ⚠️ લાઈવ લોકેશન ઉપલબ્ધ નથી
                </span>
              </div>
              <h3 class="text-sm font-black text-slate-900 mt-1">
                ${points[0].placeName} ➔ ${points[points.length - 1].placeName}
              </h3>
            </div>
            <span class="text-[11px] font-bold text-amber-900 bg-amber-100/90 px-2.5 py-1 rounded-lg border border-amber-300 whitespace-nowrap">
              GPS ઑફલાઇન
            </span>
          </div>

          <div class="p-3 bg-white/90 rounded-2xl border border-amber-200 my-2 text-left shadow-sm">
            <div class="flex items-start gap-2.5">
              <span class="text-lg">⚠️</span>
              <div class="text-xs text-slate-700 leading-relaxed">
                <strong class="text-amber-950 font-bold block mb-0.5">આ વાહનનું લાઈવ GPS લોકેશન હાલ ઉપલબ્ધ નથી</strong>
                બસમાં VTS જીપીએસ યુનિટ ઑફલાઇન છે અથવા GSRTC સર્વર પરથી લાઈવ સિગ્નલ પ્રાપ્ત થયું નથી. મુસાફરીમાં ગેરસમજ ન થાય તે માટે <strong>કોઈપણ અંદાજિત કે બનાવટી લોકેશન દર્શાવવામાં આવતું નથી.</strong>
              </div>
            </div>
          </div>

          <div class="bg-rose-50/60 rounded-2xl p-3 border border-rose-100 text-xs text-slate-700 space-y-2">
            <div class="flex items-center justify-between font-bold text-rose-950 border-b border-rose-200 pb-1.5">
              <span>🕒 નિર્ધારિત સમયપત્રક (${points.length} સ્ટોપ)</span>
              <span class="text-[10px] font-medium text-slate-500">સત્તાવાર GSRTC સમય</span>
            </div>
            <div class="flex justify-between items-center text-xs">
              <span class="text-slate-600">પ્રસ્થાન (${points[0].placeName}):</span>
              <strong class="text-slate-900 font-black">${points[0].time}</strong>
            </div>
            <div class="flex justify-between items-center text-xs">
              <span class="text-slate-600">ગંતવ્ય (${points[points.length - 1].placeName}):</span>
              <strong class="text-slate-900 font-black">${points[points.length - 1].time}</strong>
            </div>
          </div>

          <div class="pt-2.5 mt-2.5 border-t border-rose-100 flex items-center justify-between text-xs">
            ${trackData.conductorNo ? `
              <a href="tel:${trackData.conductorNo}" class="inline-flex items-center gap-1.5 text-rose-700 font-bold hover:underline">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z"/></svg>
                કંડક્ટર: ${trackData.conductorNo}
              </a>
            ` : `
              <span class="text-slate-500 font-medium">ડેપો: <strong>${trackData.depotName || 'GSRTC'}</strong></span>
            `}
            <span class="text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
              ક્રિનલ ❤️ મિત્તલ 💖
            </span>
          </div>
        </div>
      `;
    } else {
      const progressPercent = Math.round((trackData.progressRatio || 0) * 100);
      card.innerHTML = `
        <div class="bg-white/95 backdrop-blur-md rounded-3xl p-4 shadow-xl border border-rose-200 fade-in my-2">
          <div class="flex items-start justify-between gap-2 mb-2">
            <div>
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-rose-100 text-rose-800 border border-rose-300">
                  ${trackData.className}
                </span>
                <span class="text-xs font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-300">
                  ${trackData.vehicleNo}
                </span>
                <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping"></span>
                  લાઈવ જીપીએસ
                </span>
              </div>
              <h3 class="text-sm font-black text-slate-900 mt-1">
                ${points[0].placeName} ➔ ${points[points.length - 1].placeName}
              </h3>
            </div>
            <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 shrink-0">
              ${loc.speed > 0 ? `${Math.round(loc.speed)} કિમી/કલાક` : 'પ્લેટફોર્મ પર'}
            </span>
          </div>

          <div class="text-[11px] font-bold text-rose-800 bg-rose-50/80 px-2.5 py-1 rounded-xl mb-2 border border-rose-100 flex items-center justify-between">
            <span>🚦 ${trackData.status || loc.status}</span>
            <span class="text-[10px] font-extrabold text-slate-500">${progressPercent}% સફર પૂર્ણ</span>
          </div>

          <div class="my-2">
            <div class="flex justify-between items-center text-[11px] font-bold text-slate-600 mb-1">
              <span>છેલ્લું: <strong class="text-slate-800">${loc.lastStop || points[0].placeName}</strong></span>
              <span>આગળનું: <strong class="text-rose-700">${loc.nextStop || points[1].placeName} (${loc.etaNext || ''})</strong></span>
            </div>
            <div class="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div class="h-full bg-gradient-to-r from-rose-500 to-rose-600 rounded-full transition-all duration-700" style="width: ${progressPercent}%"></div>
            </div>
          </div>

          <div class="pt-2 border-t border-rose-100/70 flex items-center justify-between text-[11px] text-slate-600">
            <div>
              <span>ડેપો: <strong class="text-slate-800">${trackData.depotName}</strong></span>
              <span class="mx-1">•</span>
              <span>ટ્રિપ કોડ: <strong class="font-mono text-slate-700">${trackData.tripCode}</strong></span>
            </div>
            ${trackData.conductorNo ? `
              <a href="tel:${trackData.conductorNo}" class="text-rose-700 font-bold hover:underline flex items-center gap-1">
                <span>📞</span> ${trackData.conductorNo}
              </a>
            ` : ''}
          </div>
        </div>
      `;
    }
  }
}
