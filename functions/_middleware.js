export async function onRequest(context) {
  const url = new URL(context.request.url);

  // If accessed via the default Cloudflare *.pages.dev subdomain, 301 redirect to primary custom domain
  if (url.hostname.endsWith('.pages.dev')) {
    url.hostname = 'mylocationlab.com';
    return Response.redirect(url.toString(), 301);
  }

  // Otherwise continue serving static assets
  return context.next();
}
