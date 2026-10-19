/**
 * Cloudflare Pages Function: /api/geocode
 * Edge-cached reverse and forward geocoding proxy with grid rounding.
 * Prevents Nominatim rate limits and shields browser client IPs.
 */

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const lat = url.searchParams.get('lat');
  const lng = url.searchParams.get('lng');
  const query = url.searchParams.get('q');

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, max-age=86400, s-maxage=604800', // 1 day browser, 7 days Cloudflare edge
  };

  try {
    // 1. Reverse Geocoding (lat, lng)
    if (lat && lng) {
      const roundedLat = parseFloat(lat).toFixed(4);
      const roundedLng = parseFloat(lng).toFixed(4);

      const targetUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${roundedLat}&lon=${roundedLng}&addressdetails=1&zoom=18`;
      const response = await fetch(targetUrl, {
        headers: {
          'Accept-Language': 'en',
          'User-Agent': 'MyLocationLab/1.0 (https://mylocationlab.com; support@mylocationlab.com)',
        },
      });

      if (!response.ok) {
        return new Response(JSON.stringify({ error: 'Upstream geocoding service error' }), {
          status: response.status,
          headers,
        });
      }

      const data = await response.json();
      return new Response(JSON.stringify(data), {
        status: 200,
        headers,
      });
    }

    // 2. Forward Geocoding (search query)
    if (query) {
      const targetUrl = `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(query)}&addressdetails=1&limit=5`;
      const response = await fetch(targetUrl, {
        headers: {
          'Accept-Language': 'en',
          'User-Agent': 'MyLocationLab/1.0 (https://mylocationlab.com; support@mylocationlab.com)',
        },
      });

      if (!response.ok) {
        return new Response(JSON.stringify({ error: 'Upstream geocoding service error' }), {
          status: response.status,
          headers,
        });
      }

      const data = await response.json();
      return new Response(JSON.stringify(data), {
        status: 200,
        headers,
      });
    }

    return new Response(JSON.stringify({ error: 'Missing lat/lng or q query parameter' }), {
      status: 400,
      headers,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Geocoding request failed', message: err.message }), {
      status: 500,
      headers,
    });
  }
}
