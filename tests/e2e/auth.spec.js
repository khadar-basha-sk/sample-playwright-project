// Authentication tests cover login and logout journeys with valid and invalid users.
const { test, expect } = require('../../src/fixtures/testFixture');
const messages = require('../../src/constants/messages');

test.describe('Authentication @regression', () => {
  test('login with valid credentials and logout @smoke', async ({ homePage, loginPage, users }) => {
    await homePage.open();
    await homePage.goToLogin();
    await expect(loginPage.loginHeader).toBeVisible();

    await loginPage.login(users.validUser.email, users.validUser.password);
    await expect(homePage.loggedInAs).toContainText(messages.loginSuccessText);

    await homePage.logout();
    await expect(loginPage.loginHeader).toBeVisible();
  });

  test('login with invalid credentials shows validation message @negative', async ({
    loginPage,
    users
  }) => {
    await loginPage.open();
    await loginPage.login(users.invalidUser.email, users.invalidUser.password);
    await expect(loginPage.errorMessage).toBeVisible();
  });
});
