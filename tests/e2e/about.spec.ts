import { readFileSync } from 'node:fs';
import { expect, test } from '@playwright/test';

// fixtures/about.html is the original React AboutPage (commit 0fff087) rendered to HTML,
// with only the two approved product-name fixes applied. The live About page must match
// its visible text word for word.
const approvedHtml = readFileSync(new URL('./fixtures/about.html', import.meta.url), 'utf8');

const normalize = (text: string) => text.replace(/\s+/g, ' ').trim();

test('About copy matches the approved text word for word', async ({ page }) => {
  await page.setContent(approvedHtml);
  const expected = normalize(await page.locator('body').innerText());

  await page.goto('/');
  // The About copy sits in .about-copy; the "Latest posts" list below it is separate.
  const actual = normalize(await page.locator('.about-copy').innerText());

  expect(actual).toBe(expected);
});
