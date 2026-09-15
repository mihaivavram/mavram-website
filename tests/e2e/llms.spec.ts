import { expect, test } from '@playwright/test';
import { HIDDEN_ROUTES, POST_ROUTES, PUBLIC_ROUTES } from './routes';

const SITE = 'https://mihaisplace.com';
const urlFor = (route: string) => (route === '/' ? `${SITE}/` : `${SITE}${route}`);

test.describe('llms.txt', () => {
  test.skip(({ isMobile }) => isMobile, 'A text file does not depend on the viewport');

  test('summarises the site and links to every public page and post', async ({ request }) => {
    const response = await request.get('/llms.txt');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('text/plain');
    const text = await response.text();

    // The llmstxt.org format: a title, a one-line summary, then lists of links.
    expect(text).toMatch(/^# Mihai Avram\n\n> \S.+\n/);
    const links = Array.from(
      text.matchAll(/^- \[[^\]]+\]\(([^)]+)\)/gm),
      (match) => match[1] ?? '',
    );

    for (const route of [...PUBLIC_ROUTES, ...POST_ROUTES]) {
      expect(links).toContain(urlFor(route));
    }
    for (const route of HIDDEN_ROUTES) {
      expect(text).not.toContain(`${SITE}${route}`);
    }
    for (const url of links.filter((link) => link.startsWith(`${SITE}/`))) {
      expect((await request.get(new URL(url).pathname)).status(), url).toBe(200);
    }
  });
});
