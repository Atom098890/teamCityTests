import { defineConfig } from '@playwright/test';

require('dotenv').config();

export default defineConfig({
    testDir: './src/tests/api',
    timeout: 120000,
    expect: {
        timeout: 10000,
        toHaveScreenshot: {
            maxDiffPixels: 15,
        },
    },
    fullyParallel: true,
    retries: Number(process.env.TESTS_RETRIES) || 0,
    workers: Number(process.env.WORKERS) || 4,
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

    use: {
        actionTimeout: 0,
        baseURL: process.env.BASE_URL,

        headless: true,
        trace: 'retain-on-failure',
        screenshot: { mode: 'only-on-failure', fullPage: true },
    },

    projects: [
        {
            name: 'api',
        },
    ],
});
