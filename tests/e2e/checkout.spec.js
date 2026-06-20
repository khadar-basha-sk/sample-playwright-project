// Checkout test demonstrates the order placement workflow using reusable page objects.
const { test, expect } = require('../../src/fixtures/testFixture');
const { userEmail, userPassword } = require('../../src/utils/env');
const messages = require('../../src/constants/messages');

test.describe('Checkout @regression', () => {
  test('logged-in user can place an order @checkout', async ({
    homePage,
    loginPage,
    productsPage,
    cartPage,
    checkoutPage,
    payment
  }) => {
    await loginPage.open();
    await loginPage.login(userEmail, userPassword);
    await expect(homePage.loggedInAs).toContainText(messages.loginSuccessText);

    await productsPage.open();
    await productsPage.addFirstProductToCart();
    await productsPage.viewCart();
    await cartPage.proceedToCheckout();

    await expect(checkoutPage.addressDetails).toBeVisible();
    await expect(checkoutPage.orderReview).toBeVisible();
    await checkoutPage.addComment('Automated order placement test.');
    await checkoutPage.placeOrder();
    await checkoutPage.submitPayment(payment);

    await expect(checkoutPage.orderPlacedTitle).toContainText(messages.orderPlacedText);
  });
});
