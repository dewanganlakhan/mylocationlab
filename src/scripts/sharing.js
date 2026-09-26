/**
 * MyLocationLab — Sharing Utility
 * Web Share API, clipboard, URL generation, QR code.
 */

const COPY_ICON = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
const CHECK_ICON = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
// Value texts that are placeholders / status notes — nothing meaningful to copy.
const NOT_COPYABLE = /^$|^[-—]+$|^(Click |Waiting|Resolving|Detected after|Awaiting|Not |Updates every|Ready)/;

const Sharing = {
  /**
   * Copy text to the system clipboard. No UI feedback — callers decide how
   * to acknowledge (icon swap, button text, toast).
   * @param {string} text
   * @returns {Promise<boolean>}
   */
  async copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback for non-secure contexts / older browsers
      try {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        return true;
      } catch {
        return false;
      }
    }
  },

  /**
   * Copy text to clipboard with visual feedback.
   * @param {string} text
   * @param {HTMLElement} [btn] - Button to show feedback on
   */
  async copyToClipboard(text, btn = null) {
    const ok = await this.copyText(text);
    if (btn) {
      btn.classList.add('copied');
      const orig = btn.textContent;
      btn.textContent = ok ? '✓ Copied!' : '✗ Failed';
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.textContent = orig;
      }, 2000);
    }
    return ok;
  },

  /**
   * Build a small copy-icon chip that copies the text content of the
   * element with the given id. Feedback swaps the icon to a checkmark.
   * @param {string} targetId - id of the element whose text gets copied
   * @param {string} [label] - human label for tooltip / aria
   * @returns {HTMLButtonElement}
   */
  makeCopyChip(targetId, label) {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'copy-chip';
    chip.dataset.copy = targetId;
    const what = label || targetId;
    chip.title = `Copy ${what}`;
    chip.setAttribute('aria-label', `Copy ${what}`);
    chip.innerHTML = COPY_ICON;
    return chip;
  },

  /**
   * Append copy chips next to every id'd data value on the page:
   *  - .tool-result-row  → chip inline after the value
   *  - .location-data-item → chip pinned to the item's top-right corner
   *  - .telemetry-cell    → chip into the cell header row
   * Safe to call more than once (existing chips are not duplicated).
   */
  attachCopyChips(root = document) {
    const valueLabel = (row) => row.querySelector('[class*="-label"]')?.textContent?.trim().toLowerCase();

    root.querySelectorAll('.tool-result-row').forEach((row) => {
      const value = row.querySelector('.tool-result-value[id]');
      if (!value || row.querySelector(':scope > .copy-chip')) return;
      row.appendChild(this.makeCopyChip(value.id, valueLabel(row) || 'value'));
    });

    root.querySelectorAll('.location-data-item').forEach((item) => {
      const value = item.querySelector('.location-data-value[id]');
      if (!value || item.querySelector(':scope > .copy-chip')) return;
      item.appendChild(this.makeCopyChip(value.id, valueLabel(item) || 'value'));
    });

    root.querySelectorAll('.telemetry-cell').forEach((cell) => {
      const top = cell.querySelector('.telemetry-cell-top');
      const value = cell.querySelector('.telemetry-cell-value[id]');
      if (!top || !value || top.querySelector('.copy-chip')) return;
      top.appendChild(this.makeCopyChip(value.id, valueLabel(cell) || 'value'));
    });

    // One delegated listener for all chips (idempotent)
    if (!window.__copyChipsWired) {
      window.__copyChipsWired = true;
      document.addEventListener('click', async (e) => {
        const chip = e.target.closest('.copy-chip');
        if (!chip) return;
        const target = document.getElementById(chip.dataset.copy);
        if (!target) return;
        const text = target.textContent.trim();
        if (NOT_COPYABLE.test(text)) return;
        const ok = await this.copyText(text);
        if (!ok) return;
        chip.classList.add('copied');
        chip.innerHTML = CHECK_ICON;
        setTimeout(() => {
          chip.classList.remove('copied');
          chip.innerHTML = COPY_ICON;
        }, 1500);
      });
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
