export async function onRequest(context) {
  const url = new URL(context.request.url);

  // If accessed via the default Cloudflare *.pages.dev subdomain, 301 redirect to primary custom domain
  if (url.hostname.endsWith('.pages.dev')) {
    url.hostname = 'mylocationlab.com';
    return Response.redirect(url.toString(), 301);
  }

  // 301 Permanent Redirects: Simplified Location Silo URLs (/my-location/* -> /*)
  const pathname = url.pathname;
  if (pathname.includes('/my-location')) {
    const match = pathname.match(/^(\/(?:es|fr|de|pt|hi|id)\/)?my-location(?:\/(.*))?$/);
    if (match) {
      const localePrefix = match[1] || '/';
      const subpath = match[2];

      let newPath;
      if (!subpath || subpath === '') {
        newPath = `${localePrefix}location/`;
      } else {
        newPath = `${localePrefix}${subpath.replace(/\/$/, '')}/`;
      }

      url.pathname = newPath.replace(/\/+/g, '/');
      return Response.redirect(url.toString(), 301);
    }
  }

  // Otherwise continue serving static assets
  return context.next();
}
