// Visual tests compare critical pages against approved screenshots.
const { test, expect } = require('@playwright/test');

test.describe('Visual coverage @visual', () => {
  test('home page visual baseline @regression', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot('home-page.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });

  test('products page visual baseline @regression', async ({ page }) => {
    await page.goto('/products');
    await expect(page).toHaveScreenshot('products-page.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });
});
