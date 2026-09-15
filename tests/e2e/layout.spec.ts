import { expect, test } from '@playwright/test';
import { ALL_ROUTES } from './routes';

test.describe('phone layout', () => {
  test.skip(({ isMobile }) => !isMobile, 'Runs in the 390px mobile project only');

  for (const route of ALL_ROUTES) {
    test(`${route} does not scroll horizontally`, async ({ page }) => {
      await page.goto(route);

      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );

      expect(overflow).toBeLessThanOrEqual(0);
    });
  }

  test('all nav items fit without scrolling the nav', async ({ page }) => {
    await page.goto('/');

    const navOverflow = await page
      .locator('.nav-list')
      .evaluate((list) => list.scrollWidth - list.clientWidth);

    expect(navOverflow).toBeLessThanOrEqual(0);
  });
});

test('the skip link moves keyboard focus to the main content', async ({ page }) => {
  await page.goto('/projects');

  await page.keyboard.press('Tab');
  const skipLink = page.getByRole('link', { name: 'Skip to content' });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeInViewport();

  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
});

test('the CV offers a download everywhere and the PDF viewer only on wide screens', async ({
  page,
  isMobile,
}) => {
  await page.goto('/cv');

  await expect(page.getByRole('link', { name: 'Download PDF' })).toBeVisible();
  const viewer = page.locator('iframe.resume-viewer');
  if (isMobile) {
    await expect(viewer).toBeHidden();
  } else {
    await expect(viewer).toBeVisible();
  }
});

test('the page follows the system colour scheme', async ({ page }) => {
  const background = () => page.evaluate(() => getComputedStyle(document.body).backgroundColor);

  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  expect(await background()).toBe('rgb(250, 250, 249)');

  await page.emulateMedia({ colorScheme: 'dark' });
  expect(await background()).toBe('rgb(17, 18, 20)');
});
