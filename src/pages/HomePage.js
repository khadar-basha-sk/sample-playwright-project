// Home page object models global navigation and logged-in user indicators.
const { BasePage } = require('./BasePage');
const routes = require('../constants/routes');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.logo = page.locator('.logo');
    this.signupLoginLink = page.getByRole('link', { name: /signup \/ login/i });
    this.logoutLink = page.getByRole('link', { name: /logout/i });
    this.productsLink = page.getByRole('link', { name: /products/i });
    this.cartLink = page.getByRole('link', { name: /cart/i });
    this.loggedInAs = page.locator('text=Logged in as');
  }

  async open() {
    await this.goto(routes.home);
  }

  async goToLogin() {
    await this.signupLoginLink.click();
  }

  async goToProducts() {
    await this.productsLink.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async logout() {
    await this.logoutLink.click();
  }
}

module.exports = { HomePage };
