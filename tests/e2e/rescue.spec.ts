import { expect, test } from '@playwright/test';

const PAGE = '/ai-app-rescue';

test.describe('AI app rescue page', () => {
  test('the headline and the main call to action are visible without scrolling', async ({
    page,
  }) => {
    await page.goto(PAGE);

    await expect(page.locator('h1')).toBeInViewport({ ratio: 1 });
    await expect(page.getByRole('link', { name: "Tell me what's broken" })).toBeInViewport({
      ratio: 1,
    });
  });

  test('the main call to action jumps to the form, which works without JavaScript', async ({
    page,
  }) => {
    await page.goto(PAGE);
    await page.getByRole('link', { name: "Tell me what's broken" }).click();
    await expect.poll(() => new URL(page.url()).hash).toBe('#start');

    const form = page.locator('form.inquiry');
    await expect(form).toHaveAttribute('action', 'https://api.web3forms.com/submit');
    await expect(form).toHaveAttribute('method', 'post');
    await expect(form.locator('input[name="redirect"]')).toHaveAttribute(
      'value',
      'https://mihaisplace.com/ai-app-rescue/thanks',
    );
    await expect(form.locator('input[name="access_key"]')).toHaveCount(1);
    await expect(page.getByLabel('Your email')).toHaveAttribute('required', '');
    await expect(page.getByLabel("What's broken, or what are you unsure about?")).toHaveAttribute(
      'required',
      '',
    );
    await expect(page.getByLabel('App link, if you can share it')).not.toHaveAttribute(
      'required',
      '',
    );
  });

  test('every booking link says where it was clicked', async ({ page }) => {
    await page.goto(PAGE);
    const links = page.locator('a[data-cta-action="book_call"]');

    await expect(links).toHaveCount(2);
    for (const placement of ['hero', 'contact']) {
      const link = page.locator(
        `a[data-cta-action="book_call"][data-cta-placement="${placement}"]`,
      );
      const href = (await link.getAttribute('href')) ?? '';
      expect(new URL(href).searchParams.get('utm_content')).toBe(placement);
    }
  });

  test('clicks on calls to action reach analytics with only the action and placement', async ({
    page,
  }) => {
    // Test builds never load Google Analytics, so stand in for gtag and record what it receives.
    await page.addInitScript(() => {
      const calls: unknown[][] = [];
      Object.assign(window, { gtagCalls: calls, gtag: (...args: unknown[]) => calls.push(args) });
    });
    await page.goto(PAGE);
    await page.getByRole('link', { name: "Tell me what's broken" }).click();

    const calls = await page.evaluate(
      () => (window as unknown as { gtagCalls: unknown[] }).gtagCalls,
    );
    expect(calls).toEqual([
      [
        'event',
        'cta_click',
        { cta_action: 'form_jump', cta_placement: 'hero', transport_type: 'beacon' },
      ],
    ]);
  });

  test('the thanks page repeats the next steps and links back', async ({ page }) => {
    await page.goto(`${PAGE}/thanks`);

    await expect(page.locator('h1')).toHaveText('Got it. Thanks for the details.');
    await expect(page.locator('ol.steps li')).toHaveCount(4);
    await expect(page.getByRole('link', { name: 'Back to AI app rescue' })).toHaveAttribute(
      'href',
      PAGE,
    );
  });

  test('the home page links to the offer from its existing words', async ({ page }) => {
    await page.goto('/');

    await expect(
      page.getByRole('link', { name: 'Helping founders build and ship AI into their products' }),
    ).toHaveAttribute('href', PAGE);
  });
});
