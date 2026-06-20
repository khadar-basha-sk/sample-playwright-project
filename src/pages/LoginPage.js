// Login page object handles authentication form interactions.
const { BasePage } = require('./BasePage');
const routes = require('../constants/routes');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = page.locator('[data-qa="login-email"]');
    this.passwordInput = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
    this.loginHeader = page.getByText('Login to your account');
    this.errorMessage = page.getByText('Your email or password is incorrect!');
  }

  async open() {
    await this.goto(routes.login);
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };
