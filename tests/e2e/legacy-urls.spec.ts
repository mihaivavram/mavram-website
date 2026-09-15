import { expect, test } from '@playwright/test';

// The old React site used hash routes, and those links still exist in bookmarks,
// search results and posts.
const LEGACY_LINKS = [
  ['/#/projects', '/projects', 'Projects'],
  ['/#/cv', '/cv', 'Resume'],
  ['/#/publications', '/publications', 'Publications'],
  ['/#/', '/', 'Founder & AI Engineer'],
];

for (const [legacy, path, heading] of LEGACY_LINKS) {
  test(`the old link ${legacy} lands on ${path}`, async ({ page }) => {
    await page.goto(legacy);

    await expect.poll(() => new URL(page.url()).pathname).toBe(path);
    expect(new URL(page.url()).hash).toBe('');
    await expect(page.locator('h1')).toHaveText(heading);
  });
}

test('crafted old-style links cannot send visitors to another site', async ({ page }) => {
  const external: string[] = [];
  page.on('request', (request) => {
    if (new URL(request.url()).hostname.endsWith('example.com')) external.push(request.url());
  });
  await page.route(/example\.com/, (route) => route.abort());

  for (const link of ['/#//example.com', '/#//example.com/path', '/#/\\example.com']) {
    // Start from a blank page each time so the redirect script runs on a full page load.
    await page.goto('about:blank');
    await page.goto(link);

    await expect(page.locator('h1'), link).toHaveText('Founder & AI Engineer');
    expect(new URL(page.url()).pathname, link).toBe('/');
  }

  expect(external).toEqual([]);
});

test('in-page anchors such as the skip link are not treated as old links', async ({ page }) => {
  await page.goto('/projects#main');

  await expect(page.locator('h1')).toHaveText('Projects');
  expect(new URL(page.url()).pathname).toBe('/projects');
});
