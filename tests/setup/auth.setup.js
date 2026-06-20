// Setup project validates environment availability before browser projects start.
const { test, expect } = require('@playwright/test');
const { baseUrl } = require('../../src/utils/env');

test('environment is reachable @setup', async ({ page }) => {
  await page.goto(baseUrl);
  await expect(page).toHaveTitle(/Automation Exercise/);
});
