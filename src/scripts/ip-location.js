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
      this._fetchIpApi,
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

  async _fetchIpApi() {
    // Note: ip-api free tier is HTTP only; only call if protocol is http
    if (typeof location !== 'undefined' && location.protocol === 'https:') {
      throw new Error('ip-api free tier skipped on HTTPS to avoid Mixed Content');
    }
    const res = await fetch('http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,query');
    if (!res.ok) throw new Error('ip-api failed');
    const data = await res.json();
    if (data.status !== 'success') throw new Error(data.message);
    return {
      ip: data.query,
      lat: data.lat,
      lng: data.lon,
      city: data.city,
      region: data.regionName,
      regionCode: data.region,
      country: data.country,
      countryCode: data.countryCode,
      zip: data.zip,
      timezone: data.timezone,
      isp: data.isp,
      org: data.org,
      source: 'ip-api.com',
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
