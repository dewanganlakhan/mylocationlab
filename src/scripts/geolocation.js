/**
 * MyLocationLab — Geolocation Utility
 * Wraps the browser Geolocation API with error handling, fallbacks, and event system.
 */

const GeoLocation = {
  /**
   * Get the user's current position.
   * @param {Object} options - PositionOptions
   * @returns {Promise<GeolocationPosition>}
   */
  getCurrentPosition(options = {}) {
    const defaults = {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0,
    };
    const opts = { ...defaults, ...options };

    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by your browser.'));
        return;
      }
      navigator.geolocation.getCurrentPosition(resolve, reject, opts);
    });
  },

  /**
   * Watch the user's position for live tracking.
   * @param {Function} onSuccess
   * @param {Function} onError
   * @param {Object} options
   * @returns {number} Watch ID
   */
  watchPosition(onSuccess, onError, options = {}) {
    const defaults = {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0,
    };
    const opts = { ...defaults, ...options };

    if (!navigator.geolocation) {
      onError(new Error('Geolocation is not supported by your browser.'));
      return null;
    }
    return navigator.geolocation.watchPosition(onSuccess, onError, opts);
  },

  /**
   * Stop watching position.
   * @param {number} watchId
   */
  clearWatch(watchId) {
    if (watchId !== null && navigator.geolocation) {
      navigator.geolocation.clearWatch(watchId);
    }
  },

  /**
   * Check if geolocation permission is granted.
   * @returns {Promise<string>} 'granted' | 'denied' | 'prompt'
   */
  async checkPermission() {
    if (!navigator.permissions) return 'prompt';
    try {
      const result = await navigator.permissions.query({ name: 'geolocation' });
      return result.state;
    } catch {
      return 'prompt';
    }
  },

  /**
   * Get a user-friendly error message from a GeolocationPositionError.
   * @param {GeolocationPositionError|Error} error
   * @returns {string}
   */
  getErrorMessage(error) {
    if (error instanceof GeolocationPositionError) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          return 'Location access was denied. Please enable location permissions in your browser settings.';
        case error.POSITION_UNAVAILABLE:
          return 'Location information is currently unavailable. Please try again.';
        case error.TIMEOUT:
          return 'The request to get your location timed out. Please try again.';
        default:
          return 'An unknown error occurred while getting your location.';
      }
    }
    return error.message || 'Unable to determine your location.';
  },

  /**
   * Format position data into a clean object.
   * @param {GeolocationPosition} position
   * @returns {Object}
   */
  formatPosition(position) {
    const { coords, timestamp } = position;
    return {
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
      altitude: coords.altitude,
      altitudeAccuracy: coords.altitudeAccuracy,
      heading: coords.heading,
      speed: coords.speed,
      timestamp: timestamp,
      formattedLat: coords.latitude.toFixed(6),
      formattedLng: coords.longitude.toFixed(6),
      formattedAccuracy: coords.accuracy < 1000
        ? `${Math.round(coords.accuracy)} m`
        : `${(coords.accuracy / 1000).toFixed(1)} km`,
    };
  },
};

// Make available globally
if (typeof window !== 'undefined') {
  window.GeoLocation = GeoLocation;
}

export default GeoLocation;
