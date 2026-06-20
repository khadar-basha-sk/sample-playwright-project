// Cart page object handles cart verification, removal, and checkout navigation.
const { BasePage } = require('./BasePage');
const routes = require('../constants/routes');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartRows = page.locator('#cart_info_table tbody tr');
    this.deleteButtons = page.locator('.cart_quantity_delete');
    this.checkoutButton = page.getByText('Proceed To Checkout');
    this.emptyCartMessage = page.locator('#empty_cart');
    this.registerLoginLink = page.getByRole('link', { name: /register \/ login/i });
  }

  async open() {
    await this.goto(routes.cart);
  }

  async removeFirstItem() {
    await this.deleteButtons.first().click();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };
