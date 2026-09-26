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

    if (opts.locateControl !== false) {
      this.addLocateControl(this._map, {
        position: opts.locatePosition || 'bottomright',
        title: opts.locateTitle || 'Zoom to my current location',
        zoom: opts.locateZoom || 16,
      });
    }

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
  /**
   * Get the map instance.
   * @returns {L.Map|null}
   */
  getMap() {
    return this._map;
  },

  /**
   * Adds a Google Maps-style "Zoom & Go to My Location" control button to a Leaflet map.
   * @param {L.Map} map
   * @param {Object} [options={}]
   * @param {string} [options.position='bottomright']
   * @param {string} [options.title='Zoom to my current location']
   * @param {number} [options.zoom=16]
   * @param {function} [options.onLocate]
   * @returns {L.Control|null}
   */
  addLocateControl(map, options = {}) {
    if (!map || typeof L === 'undefined') return null;

    const {
      position = 'bottomright',
      title = 'Zoom to my current location',
      zoom = 16,
      onLocate = null,
    } = options;

    const LocateControl = L.Control.extend({
      options: { position },
      onAdd: function() {
        const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-locate-container');
        const button = L.DomUtil.create('button', 'leaflet-control-locate-btn', container);
        button.type = 'button';
        button.title = title;
        button.setAttribute('aria-label', title);
        button.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="7"></circle>
          <line x1="12" y1="1" x2="12" y2="4"></line>
          <line x1="12" y1="20" x2="12" y2="23"></line>
          <line x1="1" y1="12" x2="4" y1="12"></line>
          <line x1="20" y1="12" x2="23" y2="12"></line>
          <circle cx="12" cy="12" r="2.5" fill="currentColor"></circle>
        </svg>`;

        L.DomEvent.disableClickPropagation(container);
        L.DomEvent.disableScrollPropagation(container);

        L.DomEvent.on(button, 'click', function(e) {
          L.DomEvent.preventDefault(e);
          if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser.');
            return;
          }

          button.classList.add('locating');
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              button.classList.remove('locating');
              button.classList.add('active');
              const lat = pos.coords.latitude;
              const lng = pos.coords.longitude;
              const acc = pos.coords.accuracy || 0;

              // Smoothly fly and zoom to the user's location
              map.flyTo([lat, lng], zoom, {
                animate: true,
                duration: 1.5,
              });

              // Add/update glowing pulse marker
              if (map._userLocMarker) map.removeLayer(map._userLocMarker);
              if (map._userLocCircle) map.removeLayer(map._userLocCircle);

              const icon = L.divIcon({
                html: '<div class="user-pulse-dot"></div>',
                className: 'user-pulse-marker',
                iconSize: [20, 20],
                iconAnchor: [10, 10],
              });

              map._userLocMarker = L.marker([lat, lng], {
                icon,
                zIndexOffset: 1000,
              }).addTo(map);

              if (acc > 0) {
                map._userLocCircle = L.circle([lat, lng], {
                  radius: acc,
                  color: '#00d4ff',
                  fillColor: '#00d4ff',
                  fillOpacity: 0.1,
                  weight: 1.5,
                }).addTo(map);
              }

              if (typeof onLocate === 'function') {
                onLocate(lat, lng, acc, pos);
              }
            },
            (err) => {
              button.classList.remove('locating');
              alert('Could not get your location: ' + err.message);
            },
            { enableHighAccuracy: true, timeout: 10000 }
          );
        });

        return container;
      }
    });

    const control = new LocateControl();
    control.addTo(map);
    return control;
  },
};

export const addLocateControl = MapUtils.addLocateControl;

if (typeof window !== 'undefined') {
  window.MapUtils = MapUtils;
  window.addMapLocateControl = MapUtils.addLocateControl;
}

export default MapUtils;
