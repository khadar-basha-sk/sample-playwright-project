// Shared assertions reduce repetition in tests while preserving readable expectations.
const { expect } = require('@playwright/test');

async function expectVisible(locator, options = {}) {
  await expect(locator).toBeVisible(options);
}

async function expectText(locator, text, options = {}) {
  await expect(locator).toContainText(text, options);
}

module.exports = { expectVisible, expectText };
