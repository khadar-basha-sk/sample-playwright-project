// API helper wraps Playwright APIRequestContext calls used in API tests.
class ApiClient {
  constructor(request) {
    this.request = request;
  }

  async getAllProducts() {
    return this.request.get('/api/productsList');
  }

  async searchProduct(searchProduct) {
    return this.request.post('/api/searchProduct', {
      form: { search_product: searchProduct }
    });
  }

  async verifyLogin(email, password) {
    return this.request.post('/api/verifyLogin', {
      form: { email, password }
    });
  }
}

module.exports = { ApiClient };
