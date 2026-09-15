import { expect, test } from '@playwright/test';

// Test builds are not Vercel production builds, so they must never load Google Analytics
// (otherwise every test run would report fake visits).
test('test builds do not load Google Analytics', async ({ page }) => {
  const analyticsRequests: string[] = [];
  page.on('request', (request) => {
    if (request.url().includes('googletagmanager.com')) analyticsRequests.push(request.url());
  });

  await page.goto('/', { waitUntil: 'networkidle' });

  await expect(page.locator('script[src*="googletagmanager.com"]')).toHaveCount(0);
  expect(analyticsRequests).toEqual([]);
});
