// Products page object covers product search, details, and add-to-cart actions.
const { BasePage } = require('./BasePage');
const routes = require('../constants/routes');

class ProductsPage extends BasePage {
  constructor(page) {
    super(page);
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.searchedProductsTitle = page.getByText('Searched Products');
    this.productCards = page.locator('.features_items .product-image-wrapper');
    this.viewProductLinks = page.getByRole('link', { name: /view product/i });
    this.addToCartButtons = page.locator('.productinfo .add-to-cart');
    this.cartModal = page.locator('#cartModal');
    this.continueShoppingButton = page.getByRole('button', { name: /continue shopping/i });
    this.viewCartLink = page.getByRole('link', { name: /view cart/i });
    this.productName = page.locator('.product-information h2');
    this.quantityInput = page.locator('#quantity');
    this.detailAddToCartButton = page.getByRole('button', { name: /add to cart/i });
  }

  async open() {
    await this.goto(routes.products);
  }

  async search(term) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
  }

  async openFirstProductDetails() {
    await this.viewProductLinks.first().click();
  }

  async addFirstProductToCart() {
    await this.addToCartButtons.first().click();
    await this.cartModal.waitFor({ state: 'visible' });
  }

  async addDetailedProductToCart(quantity = 1) {
    await this.quantityInput.fill(String(quantity));
    await this.detailAddToCartButton.click();
    await this.cartModal.waitFor({ state: 'visible' });
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  async viewCart() {
    await this.viewCartLink.click();
  }
}

module.exports = { ProductsPage };
