import { defineConfig, devices } from '@playwright/test';
require('dotenv').config();

export default defineConfig({
  testDir: './src/tests',
  timeout: 100000,
  expect: {
    timeout: 30000,
    toHaveScreenshot: {
      maxDiffPixels: 15,
    },
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries:  0,
  workers: 1,

  reporter: [
        ['line'],
        [
          'allure-playwright',
          {
            detail: true,
            outputFolder: './output/allure-results',
            suiteTitle: false,
          },
        ],
      ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASE_URL,
    screenshot: { mode: 'only-on-failure', fullPage: true },
    headless: true,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
