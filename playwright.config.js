// Central Playwright configuration for all UI, API, and visual tests.
const { defineConfig, devices } = require('@playwright/test');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: process.env.ENV_FILE || '.env' });

const baseURL = process.env.BASE_URL || 'https://automationexercise.com';
const isCI = Boolean(process.env.CI);

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60_000,
  expect: {
    timeout: 10_000,
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.02
    }
  },
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 1,
  workers: isCI ? 2 : undefined,
  outputDir: 'test-results',
  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/html', open: 'never' }],
    ['json', { outputFile: 'reports/json/results.json' }],
    ['junit', { outputFile: 'reports/junit/results.xml' }],
    ['allure-playwright', { outputFolder: 'reports/allure-results' }],
    ['./src/reporters/customReporter.js']
  ],
  use: {
    baseURL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
    ignoreHTTPSErrors: true
  },
  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.js/
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      testIgnore: [/.*\.setup\.js/, /.*\.api\.spec\.js/],
      dependencies: ['setup']
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      testIgnore: [/.*\.setup\.js/, /.*\.api\.spec\.js/],
      dependencies: ['setup']
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      testIgnore: [/.*\.setup\.js/, /.*\.api\.spec\.js/],
      dependencies: ['setup']
    },
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
      testIgnore: [/.*\.setup\.js/, /.*\.api\.spec\.js/],
      dependencies: ['setup']
    },
    {
      name: 'edge',
      use: { ...devices['Desktop Chrome'], channel: 'msedge' },
      testIgnore: [/.*\.setup\.js/, /.*\.api\.spec\.js/],
      dependencies: ['setup']
    },
    {
      name: 'api',
      testMatch: /.*\.api\.spec\.js/,
      use: {
        baseURL
      }
    }
  ],
  snapshotPathTemplate: path.join('{testDir}', '__screenshots__', '{testFilePath}', '{arg}{ext}')
});
