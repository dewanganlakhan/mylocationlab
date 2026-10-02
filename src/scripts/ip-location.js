/**
 * MyLocationLab — IP Geolocation Utility
 * Gets location from IP address using free APIs.
 */

const IpLocation = {
  _cache: null,

  /**
   * Get location from IP address.
   * @returns {Promise<Object>}
   */
  async getLocation() {
    if (this._cache) return this._cache;

    const providers = [
      this._fetchIpWhois,
      this._fetchIpApiCo,
    ];

    for (const provider of providers) {
      try {
        const result = await provider();
        if (result && result.lat && result.lng) {
          this._cache = result;
          return result;
        }
      } catch (e) {
        continue;
      }
    }

    throw new Error('Unable to determine IP location from any provider.');
  },

  async _fetchIpWhois() {
    const res = await fetch('https://ipwho.is/');
    if (!res.ok) throw new Error('ipwho.is failed');
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'ipwho.is unsuccessful');
    return {
      ip: data.ip,
      lat: data.latitude,
      lng: data.longitude,
      city: data.city,
      region: data.region,
      regionCode: data.region_code,
      country: data.country,
      countryCode: data.country_code,
      zip: data.postal,
      timezone: data.timezone?.id || '',
      isp: data.connection?.isp || '',
      org: data.connection?.org || '',
      source: 'ipwho.is',
    };
  },

  async _fetchIpApiCo() {
    const res = await fetch('https://ipapi.co/json/');
    if (!res.ok) throw new Error('ipapi.co failed');
    const data = await res.json();
    return {
      ip: data.ip,
      lat: data.latitude,
      lng: data.longitude,
      city: data.city,
      region: data.region,
      regionCode: data.region_code,
      country: data.country_name,
      countryCode: data.country_code,
      zip: data.postal,
      timezone: data.timezone,
      isp: data.org,
      org: data.org,
      source: 'ipapi.co',
    };
  },

  /**
   * Clear cached result.
   */
  clearCache() {
    this._cache = null;
  },
};

if (typeof window !== 'undefined') {
  window.IpLocation = IpLocation;
}

export default IpLocation;
