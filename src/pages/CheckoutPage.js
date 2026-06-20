// Checkout page object covers address review, comments, payment, and order placement.
const { BasePage } = require('./BasePage');
const paymentData = require('../data/payment.json');

class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.addressDetails = page.locator('#address_delivery');
    this.orderReview = page.locator('#cart_info');
    this.commentBox = page.locator('textarea[name="message"]');
    this.placeOrderLink = page.getByRole('link', { name: /place order/i });
    this.nameOnCard = page.locator('[data-qa="name-on-card"]');
    this.cardNumber = page.locator('[data-qa="card-number"]');
    this.cvc = page.locator('[data-qa="cvc"]');
    this.expiryMonth = page.locator('[data-qa="expiry-month"]');
    this.expiryYear = page.locator('[data-qa="expiry-year"]');
    this.payButton = page.locator('[data-qa="pay-button"]');
    this.orderPlacedTitle = page.locator('[data-qa="order-placed"]');
  }

  async addComment(message) {
    await this.commentBox.fill(message);
  }

  async placeOrder() {
    await this.placeOrderLink.click();
  }

  async submitPayment(payment = paymentData) {
    await this.nameOnCard.fill(payment.cardName);
    await this.cardNumber.fill(payment.cardNumber);
    await this.cvc.fill(payment.cvc);
    await this.expiryMonth.fill(payment.expiryMonth);
    await this.expiryYear.fill(payment.expiryYear);
    await this.payButton.click();
  }
}

module.exports = { CheckoutPage };
