import { expect, test } from '@playwright/test';
import { HIDDEN_ROUTES, POST_ROUTES, PUBLIC_ROUTES } from './routes';

const SITE = 'https://mihaisplace.com';
const canonicalFor = (route: string) => (route === '/' ? `${SITE}/` : `${SITE}${route}`);

test.describe('search and social metadata', () => {
  test.skip(({ isMobile }) => isMobile, 'Metadata does not depend on the viewport');

  test('every public page has its own title, description, canonical URL and preview tags', async ({
    page,
  }) => {
    const titles = new Set<string>();
    const descriptions = new Set<string>();

    for (const route of PUBLIC_ROUTES) {
      await page.goto(route);
      const title = await page.title();
      const description = await page.locator('meta[name="description"]').getAttribute('content');

      expect(title, route).not.toBe('');
      expect(description, route).toBeTruthy();
      titles.add(title);
      descriptions.add(description ?? '');

      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        'href',
        canonicalFor(route),
      );
      await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
        'content',
        canonicalFor(route),
      );
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', title);
      await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
        'content',
        description ?? '',
      );
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
        'content',
        `${SITE}/og.png`,
      );
      await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
        'content',
        'summary_large_image',
      );
      await expect(page.locator('meta[name="robots"]')).toHaveCount(0);
    }

    expect(titles.size).toBe(PUBLIC_ROUTES.length);
    expect(descriptions.size).toBe(PUBLIC_ROUTES.length);
  });

  test('the home page has the approved title and connected Person structured data', async ({
    page,
    request,
  }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Mihai Avram - Founder & AI Engineer');

    const json = await page.locator('script[type="application/ld+json"]').textContent();
    const { '@graph': graph = [] } = JSON.parse(json ?? '{}');
    const node = (type: string) =>
      graph.find((item: { '@type': string }) => item['@type'] === type);
    const person = node('Person');
    expect(person.name).toBe('Mihai Avram');
    expect(person.url).toBe(`${SITE}/`);
    expect(person['@id']).toBe(`${SITE}/#person`);
    expect(node('ProfilePage').mainEntity['@id']).toBe(person['@id']);
    expect(node('WebSite').publisher['@id']).toBe(person['@id']);

    const photo = await request.get(new URL(person.image).pathname);
    expect(photo.status()).toBe(200);
  });

  test('hidden pages and the 404 page are kept out of search results', async ({ page }) => {
    for (const route of [...HIDDEN_ROUTES, '/does-not-exist']) {
      await page.goto(route);
      await expect(page.locator('meta[name="robots"]'), route).toHaveAttribute(
        'content',
        'noindex',
      );
      await expect(page.locator('link[rel="canonical"]'), route).toHaveCount(0);
    }
  });

  test('the preview image, robots.txt and sitemap are published', async ({ request }) => {
    const image = await request.get('/og.png');
    expect(image.status()).toBe(200);
    expect(image.headers()['content-type']).toContain('image/png');
    const png = await image.body();
    // PNG header: width and height live at bytes 16-23.
    expect([png.readUInt32BE(16), png.readUInt32BE(20)]).toEqual([1200, 630]);

    const robots = await request.get('/robots.txt');
    expect(robots.status()).toBe(200);
    expect(await robots.text()).toContain(`Sitemap: ${SITE}/sitemap-index.xml`);

    const index = await request.get('/sitemap-index.xml');
    expect(index.status()).toBe(200);
    expect(await index.text()).toContain(`${SITE}/sitemap-0.xml`);

    const sitemap = await (await request.get('/sitemap-0.xml')).text();
    const locations = Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g), (match) => match[1]);
    expect(locations.sort()).toEqual([...PUBLIC_ROUTES, ...POST_ROUTES].map(canonicalFor).sort());

    // Posts carry their last-modified date and the blog page the newest one; other pages have none.
    const lastModified = new Map(
      Array.from(
        sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g),
        ([, entry = '']) =>
          [
            entry.match(/<loc>([^<]+)<\/loc>/)?.[1],
            entry.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1],
          ] as const,
      ),
    );
    const postDates: number[] = [];
    for (const route of POST_ROUTES) {
      const html = await (await request.get(route)).text();
      const jsonLd = html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/);
      const modified = new Date(JSON.parse(jsonLd?.[1] ?? '{}').dateModified).getTime();
      postDates.push(modified);
      expect(new Date(lastModified.get(canonicalFor(route)) ?? '').getTime(), route).toBe(modified);
    }
    expect(new Date(lastModified.get(`${SITE}/blog`) ?? '').getTime()).toBe(Math.max(...postDates));
    for (const page of PUBLIC_ROUTES.filter((route) => route !== '/blog')) {
      expect(lastModified.get(canonicalFor(page)), page).toBeUndefined();
    }
  });
});
