import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { ALL_ROUTES } from './routes';

const ROUTES = [...ALL_ROUTES, '/does-not-exist'];

for (const colorScheme of ['light', 'dark'] as const) {
  test.describe(`${colorScheme} mode`, () => {
    test.use({ colorScheme });

    for (const route of ROUTES) {
      test(`${route} has no serious or critical accessibility violations`, async ({ page }) => {
        await page.goto(route);

        const results = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'])
          // The CV's embedded PDF viewer is browser UI, not our markup.
          .options({ iframes: false })
          .analyze();

        const blocking = results.violations
          .filter(({ impact }) => impact === 'serious' || impact === 'critical')
          .map(({ id, nodes }) => ({ id, targets: nodes.map(({ target }) => target.join(' ')) }));

        expect(blocking).toEqual([]);
      });
    }
  });
}
