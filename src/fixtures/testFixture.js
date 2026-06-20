// Custom fixtures compose page objects and data into every test that needs them.
const base = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { readJsonData } = require('../utils/testDataReader');

exports.test = base.test.extend({
  users: async ({}, use) => {
    await use(readJsonData('users.json'));
  },
  products: async ({}, use) => {
    await use(readJsonData('products.json'));
  },
  payment: async ({}, use) => {
    await use(readJsonData('payment.json'));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  }
});

exports.expect = base.expect;
