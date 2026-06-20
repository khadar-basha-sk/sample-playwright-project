// Product tests cover search, product details, add-to-cart, and remove-from-cart flows.
const { test, expect } = require('../../src/fixtures/testFixture');

test.describe('Products @regression', () => {
  test('search products by keyword @smoke', async ({ productsPage, products }) => {
    await productsPage.open();
    await productsPage.search(products.searchTerms.dress);

    await expect(productsPage.searchedProductsTitle).toBeVisible();
    await expect(productsPage.productCards.first()).toBeVisible();
  });

  test('open product details and add product to cart @cart', async ({
    productsPage,
    cartPage
  }) => {
    await productsPage.open();
    await productsPage.openFirstProductDetails();

    await expect(productsPage.productName).toBeVisible();
    await productsPage.addDetailedProductToCart(1);
    await productsPage.viewCart();

    await expect(cartPage.cartRows.first()).toBeVisible();
  });

  test('remove product from cart @cart', async ({ productsPage, cartPage }) => {
    await productsPage.open();
    await productsPage.addFirstProductToCart();
    await productsPage.viewCart();
    await cartPage.removeFirstItem();

    await expect(cartPage.emptyCartMessage).toBeVisible();
  });
});
