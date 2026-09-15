import { expect, test } from '@playwright/test';
import { POST_ROUTES } from './routes';

const SITE = 'https://mihaisplace.com';

test.describe('blog', () => {
  test.skip(({ isMobile }) => isMobile, 'Layout and accessibility cover both viewports elsewhere');

  test('the blog lists new posts first, above the earlier writing archive', async ({ page }) => {
    await page.goto('/blog');
    const main = page.getByRole('main');

    for (const route of POST_ROUTES) {
      await expect(main.locator(`a[href="${route}"]`)).toHaveCount(1);
    }
    const archive = main.getByRole('heading', { name: 'Earlier writing' });
    await expect(archive).toBeVisible();
    await expect(main.locator('a[href^="https://mihaisplace.blog/"]')).toHaveCount(12);

    const firstPostTop = (await main.locator('a[href^="/blog/"]').first().boundingBox())?.y ?? 0;
    const archiveTop = (await archive.boundingBox())?.y ?? 0;
    expect(firstPostTop).toBeLessThan(archiveTop);
  });

  for (const route of POST_ROUTES) {
    test(`${route} is a complete article page`, async ({ page }) => {
      await page.goto(route, { waitUntil: 'networkidle' });

      const title = await page.locator('h1').innerText();
      await expect(page).toHaveTitle(`${title} - Mihai Avram`);
      await expect(page.locator('article header time')).toBeVisible();
      await expect(page.locator('article header')).toContainText(/\d+ min read/);

      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        'href',
        `${SITE}${route}`,
      );
      await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content', 'article');
      await expect(page.locator('meta[property="article:published_time"]')).toHaveCount(1);
      const posting = JSON.parse(
        (await page.locator('script[type="application/ld+json"]').textContent()) ?? '{}',
      );
      expect(posting['@type']).toBe('BlogPosting');
      expect(posting.headline).toBe(title);
      expect(posting.author.name).toBe('Mihai Avram');

      for (const image of await page.locator('article img').all()) {
        await image.scrollIntoViewIfNeeded();
        await expect
          .poll(() =>
            image.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0),
          )
          .toBe(true);
      }

      const author = page.locator('article .author');
      await expect(author).toContainText('Mihai Avram');
      await expect(author.getByRole('link', { name: 'About me' })).toHaveAttribute('href', '/');

      const nav = page.getByRole('navigation', { name: 'Main' });
      await expect(nav.locator('[aria-current="page"]')).toHaveText('Blog');
    });
  }

  test('the RSS feed lists every post at its full URL', async ({ page, request }) => {
    const response = await request.get('/rss.xml');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('xml');
    const xml = await response.text();
    for (const route of POST_ROUTES) {
      expect(xml).toContain(`<link>${SITE}${route}</link>`);
    }

    await page.goto('/');
    await expect(page.locator('link[rel="alternate"][type="application/rss+xml"]')).toHaveAttribute(
      'href',
      '/rss.xml',
    );
  });

  test('the home page links to the latest posts', async ({ page }) => {
    await page.goto('/');
    const latest = page.getByRole('region', { name: 'Latest posts' });

    const hrefs = await latest
      .locator('a')
      .evaluateAll((links) => links.map((link) => link.getAttribute('href')));
    expect(hrefs.length).toBeGreaterThan(0);
    for (const href of hrefs) {
      expect(POST_ROUTES).toContain(href);
    }
  });
});
