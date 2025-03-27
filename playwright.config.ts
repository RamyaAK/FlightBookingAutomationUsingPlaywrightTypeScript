import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30000, // 30 seconds timeout per test
    expect: { timeout: 5000 }, // Timeout for assertions
    reporter: [
        ['html', { outputFolder: 'playwright-report' }], // HTML Report
        ['allure-playwright'], // Allure Report
    ],
    use: {
        headless: true, // Set to true for CI/CD pipelines
        screenshot: 'on', // Capture screenshots for all tests
        trace: 'retain-on-failure', // Keep trace logs only for failed tests
        video: 'retain-on-failure' // Keep video recordings only for failed tests
    }
});
