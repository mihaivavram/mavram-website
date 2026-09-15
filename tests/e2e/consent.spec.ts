import AxeBuilder from '@axe-core/playwright';
import { expect, test, type Page } from '@playwright/test';

// Other specs start with cookies declined; these start as a first-time visitor.
test.use({ storageState: { cookies: [], origins: [] } });

const banner = (page: Page) => page.getByRole('region', { name: 'Cookie consent' });

function trackAnalyticsRequests(page: Page): string[] {
  const requests: string[] = [];
  page.on('request', (request) => {
    if (request.url().includes('googletagmanager.com')) requests.push(request.url());
  });
  return requests;
}

test('a first visit asks for consent before loading anything', async ({ page }) => {
  const analytics = trackAnalyticsRequests(page);

  await page.goto('/', { waitUntil: 'networkidle' });

  await expect(banner(page)).toBeVisible();
  expect(analytics).toEqual([]);
});

for (const choice of ['Accept', 'Decline']) {
  test(`${choice} hides the banner and is remembered on other pages`, async ({ page }) => {
    await page.goto('/');
    await banner(page).getByRole('button', { name: choice }).click();
    await expect(banner(page)).toBeHidden();

    await page.goto('/projects');
    await expect(banner(page)).toBeHidden();
  });
}

test('test builds never load Google Analytics, even after accepting', async ({ page }) => {
  const analytics = trackAnalyticsRequests(page);

  await page.goto('/');
  await banner(page).getByRole('button', { name: 'Accept' }).click();
  await page.goto('/cv', { waitUntil: 'networkidle' });

  await expect(page.locator('script[src*="googletagmanager.com"]')).toHaveCount(0);
  expect(analytics).toEqual([]);
});

test('Cookie settings in the footer reopens the banner', async ({ page }) => {
  await page.goto('/');
  await banner(page).getByRole('button', { name: 'Decline' }).click();

  await page.getByRole('button', { name: 'Cookie settings' }).click();

  await expect(banner(page)).toBeVisible();
});

test('the banner is accessible in light and dark mode and fits on a phone', async ({
  page,
  isMobile,
}) => {
  for (const colorScheme of ['light', 'dark'] as const) {
    await page.emulateMedia({ colorScheme });
    await page.goto('/');
    await expect(banner(page)).toBeVisible();

    const results = await new AxeBuilder({ page })
      .include('#cookie-consent')
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    const blocking = results.violations.filter(
      ({ impact }) => impact === 'serious' || impact === 'critical',
    );
    expect(blocking.map(({ id }) => `${colorScheme}: ${id}`)).toEqual([]);
  }

  if (isMobile) {
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);
  }
});
