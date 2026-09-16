/**
 * MyLocationLab — Map Utility
 * Leaflet map initialization with layer switching, markers, and accuracy circles.
 */

const MapUtils = {
  /** @type {L.Map|null} */
  _map: null,
  /** @type {L.Marker|null} */
  _marker: null,
  /** @type {L.Circle|null} */
  _accuracyCircle: null,

  layers: {
    street: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    terrain: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
  },

  layerAttribution: {
    street: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    satellite: '&copy; Esri, Maxar, Earthstar Geographics',
    terrain: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a>',
  },

  /**
   * Initialize a Leaflet map.
   * @param {string} containerId
   * @param {Object} options
   * @returns {L.Map}
   */
  init(containerId, options = {}) {
    const defaults = {
      center: [20, 0],
      zoom: 2,
      layer: 'street',
      zoomControl: true,
      scrollWheelZoom: true,
    };
    const opts = { ...defaults, ...options };

    // Load Leaflet CSS if not loaded
    if (!document.querySelector('link[href*="leaflet"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }

    this._map = L.map(containerId, {
      center: opts.center,
      zoom: opts.zoom,
      zoomControl: opts.zoomControl,
      scrollWheelZoom: opts.scrollWheelZoom,
    });

    this._currentLayer = L.tileLayer(this.layers[opts.layer], {
      attribution: this.layerAttribution[opts.layer],
      maxZoom: 19,
    }).addTo(this._map);

    return this._map;
  },

  /**
   * Switch map layer.
   * @param {string} layerName - 'street' | 'satellite' | 'terrain'
   */
  switchLayer(layerName) {
    if (!this._map || !this.layers[layerName]) return;
    if (this._currentLayer) this._map.removeLayer(this._currentLayer);
    this._currentLayer = L.tileLayer(this.layers[layerName], {
      attribution: this.layerAttribution[layerName],
      maxZoom: 19,
    }).addTo(this._map);
  },

  /**
   * Set user location marker with accuracy circle.
   * @param {number} lat
   * @param {number} lng
   * @param {number} accuracy - in meters
   * @param {Object} options
   */
  setUserLocation(lat, lng, accuracy = 0, options = {}) {
    if (!this._map) return;

    const { zoom = 15, flyTo = true, popupText = '' } = options;

    // Remove existing
    if (this._marker) this._map.removeLayer(this._marker);
    if (this._accuracyCircle) this._map.removeLayer(this._accuracyCircle);

    // Custom marker icon
    const icon = L.divIcon({
      html: `<div style="
        width: 20px; height: 20px;
        background: #00d4ff;
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 0 12px rgba(0, 212, 255, 0.5);
      "></div>`,
      className: 'custom-location-marker',
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });

    this._marker = L.marker([lat, lng], { icon }).addTo(this._map);

    if (popupText) {
      this._marker.bindPopup(popupText);
    }

    // Accuracy circle
    if (accuracy > 0) {
      this._accuracyCircle = L.circle([lat, lng], {
        radius: accuracy,
        color: '#00d4ff',
        fillColor: '#00d4ff',
        fillOpacity: 0.08,
        weight: 1,
        opacity: 0.3,
      }).addTo(this._map);
    }

    if (flyTo) {
      this._map.flyTo([lat, lng], zoom, { duration: 1.5 });
    }
  },

  /**
   * Add a generic marker.
   * @param {number} lat
   * @param {number} lng
   * @param {string} popupText
   * @returns {L.Marker}
   */
  addMarker(lat, lng, popupText = '') {
    if (!this._map) return null;
    const marker = L.marker([lat, lng]).addTo(this._map);
    if (popupText) marker.bindPopup(popupText);
    return marker;
  },

  /**
   * Resize map to fit container.
   */
  invalidateSize() {
    if (this._map) {
      requestIdleCallback(() => this._map.invalidateSize());
    }
  },

  /**
   * Destroy the map instance.
   */
  destroy() {
    if (this._map) {
      this._map.remove();
      this._map = null;
      this._marker = null;
      this._accuracyCircle = null;
    }
  },

  /**
   * Get the map instance.
   * @returns {L.Map|null}
   */
  getMap() {
    return this._map;
  },
};

if (typeof window !== 'undefined') {
  window.MapUtils = MapUtils;
}

export default MapUtils;
