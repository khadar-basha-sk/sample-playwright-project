// ESLint rules keep framework code readable and aligned with Playwright best practices.
module.exports = {
  env: {
    commonjs: true,
    es2022: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:playwright/recommended'],
  plugins: ['playwright'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': 'off',
    'playwright/no-conditional-in-test': 'off'
  },
  ignorePatterns: ['node_modules/', 'reports/', 'test-results/', 'playwright-report/']
};
