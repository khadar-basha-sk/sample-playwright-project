// API tests use Playwright APIRequestContext against documented Automation Exercise APIs.
const { test, expect } = require('@playwright/test');
const { ApiClient } = require('../../src/helpers/apiClient');
const { userEmail, userPassword } = require('../../src/utils/env');

test.describe('Automation Exercise API @api', () => {
  test('get all products list @smoke', async ({ request }) => {
    const api = new ApiClient(request);
    const response = await api.getAllProducts();
    const body = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(body.responseCode).toBe(200);
    expect(body.products.length).toBeGreaterThan(0);
  });

  test('search product by API @regression', async ({ request }) => {
    const api = new ApiClient(request);
    const response = await api.searchProduct('top');
    const body = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(body.responseCode).toBe(200);
    expect(body.products.length).toBeGreaterThan(0);
  });

  test('verify login by API @regression', async ({ request }) => {
    const api = new ApiClient(request);
    const response = await api.verifyLogin(userEmail, userPassword);
    const body = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(body.responseCode).toBe(200);
    expect(body.message).toContain('User exists');
  });
});
