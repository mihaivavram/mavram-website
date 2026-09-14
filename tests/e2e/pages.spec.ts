import { expect, test } from '@playwright/test';
import { ALL_ROUTES, HIDDEN_ROUTES } from './routes';

for (const route of ALL_ROUTES) {
  test(`${route} loads with exactly one h1 and no console errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    page.on('pageerror', (error) => errors.push(error.message));

    const response = await page.goto(route, { waitUntil: 'networkidle' });

    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
    expect(errors).toEqual([]);
  });
}

test('unknown routes return the 404 page', async ({ page }) => {
  const response = await page.goto('/does-not-exist');

  expect(response?.status()).toBe(404);
  await expect(page.locator('h1')).toHaveText('Page not found');
});

test('hidden pages are reachable but not linked from the nav', async ({ page }) => {
  await page.goto('/');
  const nav = page.getByRole('navigation', { name: 'Main' });

  for (const route of HIDDEN_ROUTES) {
    await expect(nav.locator(`a[href="${route}"]`)).toHaveCount(0);
  }
});
