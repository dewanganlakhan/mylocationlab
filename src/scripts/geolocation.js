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
   * Get a user-friendly localized error message from a GeolocationPositionError.
   * @param {GeolocationPositionError|Error} error
   * @param {string} [lang] Optional language code (defaults to document lang or 'en')
   * @returns {string}
   */
  getErrorMessage(error, lang) {
    const activeLang = (lang || (typeof document !== 'undefined' && document.documentElement.lang) || 'en').slice(0, 2).toLowerCase();
    
    const messages = {
      en: {
        denied: 'Location access was denied. Please enable location permissions in your browser settings.',
        unavailable: 'Location information is currently unavailable. Please try again.',
        timeout: 'The request to get your location timed out. Please try again.',
        unknown: 'An unknown error occurred while getting your location.',
      },
      es: {
        denied: 'Acceso a la ubicación denegado. Active los permisos de ubicación en los ajustes del navegador.',
        unavailable: 'La información de ubicación no está disponible en este momento. Inténtelo de nuevo.',
        timeout: 'Se agotó el tiempo de espera para obtener su ubicación. Inténtelo de nuevo.',
        unknown: 'Ocurrió un error desconocido al obtener su ubicación.',
      },
      fr: {
        denied: 'Accès à la position refusé. Veuillez activer les autorisations de localisation dans votre navigateur.',
        unavailable: 'Les informations de localisation sont actuellement indisponibles. Veuillez réessayer.',
        timeout: 'La demande de localisation a expiré. Veuillez réessayer.',
        unknown: 'Une erreur inconnue s\'est produite lors de la détection de la position.',
      },
      de: {
        denied: 'Standortzugriff verweigert. Bitte aktivieren Sie die Standortberechtigung in Ihren Browsereinstellungen.',
        unavailable: 'Standortinformationen sind derzeit nicht verfügbar. Bitte versuchen Sie es erneut.',
        timeout: 'Zeitüberschreitung beim Abrufen des Standorts. Bitte versuchen Sie es erneut.',
        unknown: 'Ein unbekannter Fehler ist beim Ermitteln des Standorts aufgetreten.',
      },
      pt: {
        denied: 'Acesso à localização negado. Ative as permissões de localização nas configurações do seu navegador.',
        unavailable: 'Informações de localização indisponíveis no momento. Tente novamente.',
        timeout: 'O pedido de localização expirou. Tente novamente.',
        unknown: 'Ocorreu um erro desconhecido ao obter sua localização.',
      },
      hi: {
        denied: 'लोकेशन अनुमति अस्वीकृत कर दी गई। कृपया अपने ब्राउज़र की सेटिंग में लोकेशन अनुमति चालू करें।',
        unavailable: 'लोकेशन जानकारी वर्तमान में अनुपलब्ध है। कृपया पुन: प्रयास करें।',
        timeout: 'लोकेशन अनुरोध का समय समाप्त हो गया। कृपया पुन: प्रयास करें।',
        unknown: 'आपकी लोकेशन प्राप्त करते समय एक अज्ञात त्रुटि हुई।',
      },
      id: {
        denied: 'Akses lokasi ditolak. Harap aktifkan izin lokasi di pengaturan browser Anda.',
        unavailable: 'Informasi lokasi saat ini tidak tersedia. Silakan coba lagi.',
        timeout: 'Waktu permintaan lokasi habis. Silakan coba lagi.',
        unknown: 'Terjadi kesalahan yang tidak diketahui saat mendeteksi lokasi Anda.',
      },
    };

    const dict = messages[activeLang] || messages.en;

    if (error instanceof GeolocationPositionError) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          return dict.denied;
        case error.POSITION_UNAVAILABLE:
          return dict.unavailable;
        case error.TIMEOUT:
          return dict.timeout;
        default:
          return dict.unknown;
      }
    }
    return error.message || dict.unknown;
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
