/**
 * MyLocationLab — Sharing Utility
 * Web Share API, clipboard, URL generation, QR code.
 */

const Sharing = {
  /**
   * Copy text to clipboard with visual feedback.
   * @param {string} text
   * @param {HTMLElement} [btn] - Button to show feedback on
   */
  async copyToClipboard(text, btn = null) {
    try {
      await navigator.clipboard.writeText(text);
      if (btn) {
        btn.classList.add('copied');
        const orig = btn.textContent;
        btn.textContent = '✓ Copied!';
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.textContent = orig;
        }, 2000);
      }
      return true;
    } catch {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      if (btn) {
        btn.classList.add('copied');
        const orig = btn.textContent;
        btn.textContent = '✓ Copied!';
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.textContent = orig;
        }, 2000);
      }
      return true;
    }
  },

  /**
   * Share via Web Share API.
   * @param {Object} data - { title, text, url }
   */
  async shareNative(data) {
    if (navigator.share) {
      try {
        await navigator.share(data);
        return true;
      } catch (err) {
        if (err.name !== 'AbortError') console.warn('Share failed:', err);
        return false;
      }
    }
    return this.copyToClipboard(data.url || data.text);
  },

  /**
   * Generate a Google Maps URL for coordinates.
   * @param {number} lat
   * @param {number} lng
   * @returns {string}
   */
  getGoogleMapsUrl(lat, lng) {
    return `https://www.google.com/maps?q=${lat},${lng}`;
  },

  /**
   * Generate an Apple Maps URL.
   * @param {number} lat
   * @param {number} lng
   * @returns {string}
   */
  getAppleMapsUrl(lat, lng) {
    return `https://maps.apple.com/?ll=${lat},${lng}&q=${lat},${lng}`;
  },

  /**
   * Generate a location sharing URL for this site.
   * @param {number} lat
   * @param {number} lng
   * @returns {string}
   */
  getLocationUrl(lat, lng) {
    return `https://mylocationlab.com/maps/coordinates/?lat=${lat}&lng=${lng}`;
  },

  /**
   * Generate a QR code for text/URL.
   * @param {string} text
   * @param {HTMLElement} container
   * @param {number} size
   */
  async generateQR(text, container, size = 256) {
    if (typeof QRCode === 'undefined') {
      // Load QRCode library dynamically
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/qrcode@1.5.4/build/qrcode.min.js';
      document.head.appendChild(script);
      await new Promise(resolve => script.onload = resolve);
    }

    const canvas = document.createElement('canvas');
    await QRCode.toCanvas(canvas, text, {
      width: size,
      margin: 2,
      color: { dark: '#0a0e1a', light: '#ffffff' },
    });
    container.innerHTML = '';
    container.appendChild(canvas);
    return canvas;
  },

  /**
   * Show a toast notification.
   * @param {string} message
   * @param {string} type - 'success' | 'error'
   */
  showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  },
};

if (typeof window !== 'undefined') {
  window.Sharing = Sharing;
}

export default Sharing;
