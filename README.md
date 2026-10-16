# GSRTC Live - Real-Time Bus Tracker 🚌💖
### Dedicated to Mittal with Endless Love from Krinal (ક્રીનલ ❤️ મિત્તલ)

A modern, fast, mobile-first Progressive Web App (PWA) that connects directly to the official **GSRTC (Gujarat State Road Transport Corporation)** backend web services for 100% authentic live tracking, route schedules, and digital station boards.

---

## ✨ Features

- **🛣️ 100% Exact On-Road Tracking:** Bus moves smoothly along the physical road geometry of Gujarat highways (NH-51, SH-26, etc.).
- **🔒 Zoom Level Preservation:** The map locks to whatever zoom level you choose and never resets on live updates.
- **🗺️ Two Dedicated Google Maps:**
  - **Live Bus Tracking Map:** Dedicated solely to the tracked bus, highway polyline, stops, and 3D animated bus marker with headlight beams.
  - **Nearby Station Explorer Map:** GPS nearest station finder, station search bar, and digital board drawer.
- **🕒 Chronological Live Schedules:** Clean time order, showing active en-route buses ("ઓન રોડ") and skipping expired trips.
- **📱 PWA & Offline Support:** Installable as an app on Android, iOS, and Desktop with Service Worker caching.
- **🌹 Romantic Dedication:** Special Krinal ❤️ Mittal love message modal, romantic banner, and blessings.

---

## 🚀 Running Locally

```bash
# Clone the repository
git clone <your-repo-url>
cd gsrtc-live-clone

# Run server
python3 server.py 8080
```

Open your browser at `http://localhost:8080`.

---

## 🌐 Deploy to Render.com

1. Push this repository to **GitHub**.
2. Go to [Render.com](https://render.com) and click **New +** -> **Web Service**.
3. Connect your GitHub repository.
4. Render will auto-detect `render.yaml` or you can set:
   - **Environment:** `Python 3`
   - **Build Command:** `pip install -r requirements.txt || true`
   - **Start Command:** `python3 server.py`
5. Click **Create Web Service**! Your live app will be live at `https://gsrtc-live-xxxx.onrender.com`.
