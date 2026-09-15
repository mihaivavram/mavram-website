import { expect, test } from '@playwright/test';
import { ALL_ROUTES } from './routes';

test.describe('internal links and assets', () => {
  test.skip(({ isMobile }) => isMobile, 'The markup is the same on every viewport, so check once');

  test('every internal link and asset on every page resolves', async ({ page, request }) => {
    const urls = new Set<string>();

    for (const route of [...ALL_ROUTES, '/does-not-exist']) {
      await page.goto(route);
      const references = await page.evaluate(() => {
        const attr = (selector: string, name: string) =>
          Array.from(document.querySelectorAll(selector), (el) => el.getAttribute(name) ?? '');
        const srcsets = attr('img[srcset], source[srcset]', 'srcset').flatMap((srcset) =>
          srcset.split(',').map((candidate) => candidate.trim().split(/\s+/)[0] ?? ''),
        );
        return [
          ...attr('a[href]', 'href'),
          ...attr('link[href]', 'href'),
          ...attr('img[src], iframe[src], script[src]', 'src'),
          ...srcsets,
        ];
      });

      for (const reference of references) {
        if (reference.startsWith('/') && !reference.startsWith('//')) {
          urls.add(reference.split('#')[0] || '/');
        }
      }
    }

    const broken: string[] = [];
    for (const url of urls) {
      const response = await request.get(url);
      if (response.status() !== 200) broken.push(`${response.status()} ${url}`);
    }

    expect(urls.size).toBeGreaterThan(10);
    expect(broken).toEqual([]);
  });
});
