import { defineConfig, devices } from '@playwright/test';

const PORT = 4329;

export default defineConfig({
  testDir: 'tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'retain-on-failure',
    // Start every test with cookies declined so the consent banner doesn't cover the page.
    // tests/e2e/consent.spec.ts clears this to test the banner itself.
    storageState: {
      cookies: [],
      origins: [
        {
          origin: `http://localhost:${PORT}`,
          localStorage: [{ name: 'analytics-consent', value: 'denied' }],
        },
      ],
    },
  },
  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } },
    },
    {
      name: 'mobile',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
      },
    },
  ],
  webServer: {
    // --ignore-lock: the test server must not collide with a preview lock file.
    command: `npm run preview -- --port ${PORT} --ignore-lock`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: false,
    // Astro 7.2+ backgrounds `astro preview` when it detects an AI agent, which makes the
    // command exit immediately. Any value for this variable keeps it in the foreground.
    env: { ASTRO_PREVIEW_BACKGROUND: '0' },
  },
});
