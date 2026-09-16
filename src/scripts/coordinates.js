/**
 * MyLocationLab — Coordinate Math Utilities
 * Conversions, distance, bearing, geohash, plus codes.
 */

const CoordUtils = {
  // ─── Decimal ↔ DMS ──────────────────────────────────────
  decimalToDMS(decimal, isLat = true) {
    const abs = Math.abs(decimal);
    const deg = Math.floor(abs);
    const minRaw = (abs - deg) * 60;
    const min = Math.floor(minRaw);
    const sec = ((minRaw - min) * 60).toFixed(2);
    const dir = isLat ? (decimal >= 0 ? 'N' : 'S') : (decimal >= 0 ? 'E' : 'W');
    return { degrees: deg, minutes: min, seconds: parseFloat(sec), direction: dir };
  },

  dmsToDecimal(deg, min, sec, direction) {
    let decimal = deg + min / 60 + sec / 3600;
    if (direction === 'S' || direction === 'W') decimal *= -1;
    return parseFloat(decimal.toFixed(8));
  },

  formatDMS(decimal, isLat = true) {
    const dms = this.decimalToDMS(decimal, isLat);
    return `${dms.degrees}° ${dms.minutes}' ${dms.seconds}" ${dms.direction}`;
  },

  // ─── Distance (Haversine) ───────────────────────────────
  calculateDistance(lat1, lon1, lat2, lon2, unit = 'km') {
    const R = unit === 'mi' ? 3958.8 : 6371; // Earth radius
    const dLat = this._toRad(lat2 - lat1);
    const dLon = this._toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this._toRad(lat1)) * Math.cos(this._toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  },

  // ─── Bearing ────────────────────────────────────────────
  calculateBearing(lat1, lon1, lat2, lon2) {
    const dLon = this._toRad(lon2 - lon1);
    const y = Math.sin(dLon) * Math.cos(this._toRad(lat2));
    const x =
      Math.cos(this._toRad(lat1)) * Math.sin(this._toRad(lat2)) -
      Math.sin(this._toRad(lat1)) * Math.cos(this._toRad(lat2)) * Math.cos(dLon);
    let brng = this._toDeg(Math.atan2(y, x));
    return (brng + 360) % 360;
  },

  bearingToCompass(bearing) {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
                         'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(bearing / 22.5) % 16;
    return directions[index];
  },

  // ─── UTM Conversion (simplified) ────────────────────────
  decimalToUTM(lat, lon) {
    const zone = Math.floor((lon + 180) / 6) + 1;
    const letter = lat >= 0 ? 'N' : 'S';

    // Simplified UTM math
    const k0 = 0.9996;
    const a = 6378137;
    const e = 0.081819191;
    const e2 = e * e;

    const latR = this._toRad(lat);
    const lonR = this._toRad(lon);
    const lonOrigin = this._toRad((zone - 1) * 6 - 180 + 3);

    const N = a / Math.sqrt(1 - e2 * Math.sin(latR) * Math.sin(latR));
    const T = Math.tan(latR) * Math.tan(latR);
    const C = (e2 / (1 - e2)) * Math.cos(latR) * Math.cos(latR);
    const A = Math.cos(latR) * (lonR - lonOrigin);

    const M = a * (
      (1 - e2 / 4 - 3 * e2 * e2 / 64) * latR -
      (3 * e2 / 8 + 3 * e2 * e2 / 32) * Math.sin(2 * latR) +
      (15 * e2 * e2 / 256) * Math.sin(4 * latR)
    );

    const easting = k0 * N * (A + (1 - T + C) * A * A * A / 6) + 500000;
    const northing = k0 * (M + N * Math.tan(latR) * (A * A / 2 + (5 - T + 9 * C + 4 * C * C) * A * A * A * A / 24));

    return {
      zone,
      letter,
      easting: Math.round(easting),
      northing: lat < 0 ? Math.round(northing + 10000000) : Math.round(northing),
      formatted: `${zone}${letter} ${Math.round(easting)} ${lat < 0 ? Math.round(northing + 10000000) : Math.round(northing)}`,
    };
  },

  // ─── Geohash ────────────────────────────────────────────
  encodeGeohash(lat, lon, precision = 9) {
    const BASE32 = '0123456789bcdefghjkmnpqrstuvwxyz';
    let idx = 0, bit = 0, evenBit = true;
    let latMin = -90, latMax = 90;
    let lonMin = -180, lonMax = 180;
    let geohash = '';

    while (geohash.length < precision) {
      if (evenBit) {
        const lonMid = (lonMin + lonMax) / 2;
        if (lon >= lonMid) { idx = idx * 2 + 1; lonMin = lonMid; }
        else { idx = idx * 2; lonMax = lonMid; }
      } else {
        const latMid = (latMin + latMax) / 2;
        if (lat >= latMid) { idx = idx * 2 + 1; latMin = latMid; }
        else { idx = idx * 2; latMax = latMid; }
      }
      evenBit = !evenBit;
      if (++bit === 5) {
        geohash += BASE32[idx];
        bit = 0;
        idx = 0;
      }
    }
    return geohash;
  },

  // ─── Plus Code (Open Location Code) ────────────────────
  encodePlusCode(lat, lon, codeLength = 10) {
    const ALPHABET = '23456789CFGHJMPQRVWX';
    const SEPARATOR = '+';
    const SEP_POS = 8;

    lat = Math.min(90, Math.max(-90, lat)) + 90;
    lon = Math.min(180, Math.max(-180, lon)) + 180;

    let code = '';
    let latDigit, lonDigit;
    let latPrec = 20, lonPrec = 20;

    for (let i = 0; i < Math.min(codeLength, 10); i += 2) {
      latDigit = Math.floor(lat / latPrec);
      lonDigit = Math.floor(lon / lonPrec);
      lat -= latDigit * latPrec;
      lon -= lonDigit * lonPrec;
      latPrec /= 20;
      lonPrec /= 20;
      code += ALPHABET[latDigit] + ALPHABET[lonDigit];
    }

    return code.slice(0, SEP_POS) + SEPARATOR + code.slice(SEP_POS);
  },

  // ─── Helpers ────────────────────────────────────────────
  _toRad(deg) { return deg * Math.PI / 180; },
  _toDeg(rad) { return rad * 180 / Math.PI; },

  /**
   * Parse coordinate string to { lat, lng }.
   * Supports formats: "28.6139, 77.2090", "28.6139 77.2090", "28°36'50"N 77°12'32"E"
   */
  parseCoordinates(str) {
    str = str.trim();

    // DMS format
    const dmsRegex = /(\d+)[°]\s*(\d+)[′']\s*([\d.]+)[″"]\s*([NSEW])\s*[,\s]\s*(\d+)[°]\s*(\d+)[′']\s*([\d.]+)[″"]\s*([NSEW])/i;
    const dmsMatch = str.match(dmsRegex);
    if (dmsMatch) {
      const lat = this.dmsToDecimal(+dmsMatch[1], +dmsMatch[2], +dmsMatch[3], dmsMatch[4].toUpperCase());
      const lng = this.dmsToDecimal(+dmsMatch[5], +dmsMatch[6], +dmsMatch[7], dmsMatch[8].toUpperCase());
      return { lat, lng };
    }

    // Decimal format
    const parts = str.split(/[,\s]+/).filter(Boolean).map(Number);
    if (parts.length >= 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      return { lat: parts[0], lng: parts[1] };
    }

    return null;
  },

  /**
   * Validate latitude and longitude.
   */
  isValidCoordinate(lat, lng) {
    return lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180;
  },
};

if (typeof window !== 'undefined') {
  window.CoordUtils = CoordUtils;
}

export default CoordUtils;
