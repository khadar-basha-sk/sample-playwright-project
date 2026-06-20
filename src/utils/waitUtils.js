// Small wait helpers keep page objects expressive without scattering magic timeouts.
async function waitForPageReady(page) {
  await page.waitForLoadState('domcontentloaded');
}

module.exports = { waitForPageReady };
