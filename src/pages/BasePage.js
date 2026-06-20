// Base page contains navigation and common page-level behaviors shared by POM classes.
const { waitForPageReady } = require('../utils/waitUtils');

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(path = '/') {
    await this.page.goto(path);
    await waitForPageReady(this.page);
  }

  async closeCookieOrAdOverlays() {
    const consentButton = this.page.getByRole('button', { name: /consent|accept|agree/i });
    if (await consentButton.first().isVisible().catch(() => false)) {
      await consentButton.first().click();
    }
  }
}

module.exports = { BasePage };
