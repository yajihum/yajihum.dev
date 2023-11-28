import { Hono } from 'hono';

const app = new Hono();

class TitleHandler {
  title: string;

  constructor() {
    this.title = '';
  }

  text(text: Text) {
    if (!this.title && text.text) {
      this.title = text.text;
    }
  }
}

class OgpHandler {
  title: string;
  description: string;

  constructor() {
    this.title = '';
    this.description = '';
  }

  element(element: Element) {
    if (element.getAttribute('name') === 'description') {
      this.description = element.getAttribute('content') ?? '';
      return;
    }

    const property = element.getAttribute('property');

    if (property === 'og:title') {
      this.title = element.getAttribute('content') ?? '';
    } else if (property === 'og:description') {
      this.description = element.getAttribute('content') ?? '';
    }
  }
}

class FaviconHandler {
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
  const url = c.req.query('url');
  if (url === undefined) {
    return c.body('Bad Request', 400);
  }

  const parsedUrl = new URL(url);
  const decodedHref = decodeURIComponent(url);
  const siteRes = await fetch(decodedHref);
  if (!siteRes.ok) {
    return c.body('Not Found', 404);
  }

  const titleHandler = new TitleHandler();
  const ogpHandler = new OgpHandler();
  const faviconHandler = new FaviconHandler();
  const res = new HTMLRewriter()
    .on('title', titleHandler)
    .on('meta', ogpHandler)
    .on('link', faviconHandler)
    .transform(siteRes);
  await res.text();

  const days = 24 * 60 * 60;
  c.header('Cache-Control', `public, s-maxage=${1 * days}`);

  const title = titleHandler.title ?? ogpHandler.title;
  const description = ogpHandler.description;
  const siteName = parsedUrl.hostname;
  return c.json({
    title,
    description,
    siteName,
    faviconUrl: faviconHandler.faviconUrl,
  });
});

export default app;
