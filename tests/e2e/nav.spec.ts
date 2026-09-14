import { expect, test, type Page } from '@playwright/test';

const nav = (page: Page) => page.getByRole('navigation', { name: 'Main' });
const currentItem = (page: Page) => nav(page).locator('[aria-current="page"]');
const pathname = (page: Page) => new URL(page.url()).pathname.replace(/(.)\/$/, '$1');

test('the active nav item follows clicks and the Back button', async ({ page }) => {
  await page.goto('/');
  await expect(currentItem(page)).toHaveText('About');

  await nav(page).getByRole('link', { name: 'Projects' }).click();
  await expect.poll(() => pathname(page)).toBe('/projects');
  await expect(currentItem(page)).toHaveText('Projects');

  await nav(page).getByRole('link', { name: 'Blog' }).click();
  await expect.poll(() => pathname(page)).toBe('/blog');
  await expect(currentItem(page)).toHaveText('Blog');

  await page.goBack();
  await expect.poll(() => pathname(page)).toBe('/projects');
  await expect(currentItem(page)).toHaveText('Projects');

  await page.goBack();
  await expect.poll(() => pathname(page)).toBe('/');
  await expect(currentItem(page)).toHaveText('About');
});

test('in-page links update the active nav item', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('main').getByRole('link', { name: 'Projects' }).click();

  await expect.poll(() => pathname(page)).toBe('/projects');
  await expect(currentItem(page)).toHaveText('Projects');
});

test('exactly one nav item is active on every public page', async ({ page }) => {
  for (const href of ['/', '/cv', '/projects', '/blog', '/publications', '/press']) {
    await page.goto(href);
    await expect(currentItem(page)).toHaveCount(1);
    await expect(currentItem(page)).toHaveAttribute('href', href);
  }
});
