import { Hono } from 'hono';

const app = new Hono();

class OgpHandler {
  ogpTitle: string;
  ogpDescription: string;
  ogpSiteName: string;

  constructor() {
    this.ogpTitle = '';
    this.ogpDescription = '';
    this.ogpSiteName = '';
  }

  element(element: Element) {
    switch (element.getAttribute('property')) {
      case 'og:title':
        this.ogpTitle = element.getAttribute('content') ?? '';
        break;
      case 'og:description':
        this.ogpDescription = element.getAttribute('content') ?? '';
        break;
      case 'og:site_name':
        this.ogpSiteName = element.getAttribute('content') ?? '';
        break;
      default:
        break;
    }
  }
}

class faviconHandler {
  faviconUrl: string;

  constructor() {
    this.faviconUrl = '';
  }

  element(element: Element) {
    if (
      element.getAttribute('rel') === 'icon' ||
      element.getAttribute('rel') === 'shortcut icon'
    ) {
      this.faviconUrl = element.getAttribute('href') ?? '';
    }
  }
}

app.get('/api/linkCard', async (c) => {
  const href = c.req.query('href');
  if (href === undefined) {
    return c.body('Bad Request', 400);
  }

  const decodedHref = decodeURIComponent(href);
  const siteRes = await fetch(decodedHref);
  if (!siteRes.ok) {
    return c.body('Not Found', 404);
  }

  const ogp = new OgpHandler();
  const favicon = new faviconHandler();
  new HTMLRewriter().on('meta', ogp).on('link', favicon).transform(siteRes);

  const days = 24 * 60 * 60;
  c.header('Cache-Control', `public, s-maxage=${1 * days}`);
  return c.json({ ...ogp, faviconUrl: favicon.faviconUrl });
});

export default app;
