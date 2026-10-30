/**
 * MyLocationLab — Geocoding Utility
 * Reverse geocoding (coords→address) and forward geocoding (address→coords) via Nominatim.
 */

const NOMINATIM_BASE = 'https://nominatim.openstreetmap.org';
const cache = new Map();

const Geocoding = {
  /**
   * Check if third-party address lookup is enabled by user.
   * @returns {boolean}
   */
  isLookupEnabled() {
    if (typeof localStorage === 'undefined') return true;
    return localStorage.getItem('privacy_disable_address_lookup') !== 'true';
  },

  /**
   * Set third-party address lookup preference.
   * @param {boolean} enabled
   */
  setLookupEnabled(enabled) {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem('privacy_disable_address_lookup', enabled ? 'false' : 'true');
  },

  /**
   * Reverse geocode: coordinates to address.
   * @param {number} lat
   * @param {number} lng
   * @returns {Promise<Object>}
   */
  async reverseGeocode(lat, lng) {
    if (!this.isLookupEnabled()) {
      return {
        displayName: 'Address lookup disabled (Local Privacy Mode)',
        address: {},
        road: '',
        houseNumber: '',
        neighbourhood: '',
        city: 'Local Mode',
        county: '',
        state: '',
        stateCode: '',
        postcode: '',
        country: '',
        countryCode: '',
        lat,
        lng,
        type: '',
        category: '',
        disabled: true,
      };
    }

    const key = `reverse:${lat.toFixed(6)},${lng.toFixed(6)}`;
    if (cache.has(key)) return cache.get(key);

    let data;
    try {
      const edgeRes = await fetch(`/api/geocode?lat=${lat}&lng=${lng}`);
      if (edgeRes.ok) {
        data = await edgeRes.json();
      }
    } catch {
      // Fallback to direct Nominatim fetch
    }

    if (!data) {
      const url = `${NOMINATIM_BASE}/reverse?format=jsonv2&lat=${lat}&lon=${lng}&addressdetails=1&zoom=18`;
      const res = await fetch(url, {
        headers: { 'Accept-Language': 'en', 'User-Agent': 'MyLocationLab/1.0 (https://mylocationlab.com)' },
      });
      if (!res.ok) throw new Error('Geocoding request failed');
      data = await res.json();
    }

    const result = {
      displayName: data.display_name || '',
      address: data.address || {},
      road: data.address?.road || data.address?.pedestrian || '',
      houseNumber: data.address?.house_number || '',
      neighbourhood: data.address?.neighbourhood || data.address?.suburb || '',
      city: data.address?.city || data.address?.town || data.address?.village || data.address?.municipality || '',
      county: data.address?.county || '',
      state: data.address?.state || '',
      stateCode: data.address?.['ISO3166-2-lvl4']?.split('-')[1] || '',
      postcode: data.address?.postcode || '',
      country: data.address?.country || '',
      countryCode: (data.address?.country_code || '').toUpperCase(),
      lat: parseFloat(data.lat),
      lng: parseFloat(data.lon),
      type: data.type || '',
      category: data.category || '',
    };

    cache.set(key, result);
    return result;
  },

  /**
   * Forward geocode: address to coordinates.
   * @param {string} query
   * @returns {Promise<Array>}
   */
  async forwardGeocode(query) {
    const key = `forward:${query.toLowerCase().trim()}`;
    if (cache.has(key)) return cache.get(key);

    let data;
    try {
      const edgeRes = await fetch(`/api/geocode?q=${encodeURIComponent(query)}`);
      if (edgeRes.ok) {
        data = await edgeRes.json();
      }
    } catch {
      // Fallback
    }

    if (!data) {
      const url = `${NOMINATIM_BASE}/search?format=jsonv2&q=${encodeURIComponent(query)}&addressdetails=1&limit=5`;
      const res = await fetch(url, {
        headers: { 'Accept-Language': 'en', 'User-Agent': 'MyLocationLab/1.0 (https://mylocationlab.com)' },
      });
      if (!res.ok) throw new Error('Geocoding request failed');
      data = await res.json();
    }

    const results = data.map(item => ({
      displayName: item.display_name,
      lat: parseFloat(item.lat),
      lng: parseFloat(item.lon),
      type: item.type,
      importance: item.importance,
      address: item.address || {},
      city: item.address?.city || item.address?.town || item.address?.village || '',
      state: item.address?.state || '',
      country: item.address?.country || '',
      countryCode: (item.address?.country_code || '').toUpperCase(),
    }));

    cache.set(key, results);
    return results;
  },

  /**
   * Get a short address from coordinates.
   * @param {number} lat
   * @param {number} lng
   * @returns {Promise<string>}
   */
  async getShortAddress(lat, lng) {
    const data = await this.reverseGeocode(lat, lng);
    const parts = [data.city, data.state, data.country].filter(Boolean);
    return parts.join(', ') || data.displayName;
  },

  /**
   * Get full structured address.
   * @param {number} lat
   * @param {number} lng
   * @returns {Promise<Object>}
   */
  async getFullAddress(lat, lng) {
    return this.reverseGeocode(lat, lng);
  },
};

if (typeof window !== 'undefined') {
  window.Geocoding = Geocoding;
}

export default Geocoding;
