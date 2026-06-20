# sample-playwright-project

![Production Ready](https://img.shields.io/badge/status-production--ready-brightgreen)
![Playwright](https://img.shields.io/badge/tested%20with-Playwright-2EAD33)
![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow)
![CI](https://img.shields.io/badge/CI-GitHub%20Actions%20%7C%20Jenkins-blue)

Production-ready Playwright automation framework for real-world testing of [Automation Exercise](https://automationexercise.com). The framework uses JavaScript, Page Object Model, reusable fixtures, environment-driven configuration, API testing, visual testing, automatic artifacts, and CI/CD pipelines.

## Features

- Playwright test automation with JavaScript.
- Page Object Model with reusable page classes.
- Enterprise folder structure for pages, fixtures, helpers, constants, utilities, test data, reports, and CI.
- Chromium, Firefox, WebKit, Google Chrome, and Microsoft Edge support.
- `.env` based environment management.
- UI test coverage for login, logout, product search, product details, cart, checkout, and order placement.
- API tests using `APIRequestContext`.
- Visual screenshot comparison examples.
- Automatic screenshots, videos, and traces on failure.
- HTML, Allure, JSON, JUnit, and custom console reports.
- Retries, parallel execution, tags, and grouped test suites.
- GitHub Actions and Jenkins pipeline examples.
- ESLint, Prettier, and Winston logging.

## Framework Architecture Diagram

```text
sample-playwright-project
|-- .github/workflows       CI pipeline definitions
|-- src
|   |-- constants           Routes and assertion messages
|   |-- data                JSON test data
|   |-- fixtures            Playwright fixture composition
|   |-- helpers             API clients and shared assertions
|   |-- pages               Page Object Model classes
|   |-- reporters           Custom reporter implementation
|   `-- utils               Env, logging, waits, and data readers
|-- tests
|   |-- api                 APIRequestContext tests
|   |-- e2e                 End-to-end UI workflows
|   |-- setup               Environment setup checks
|   `-- visual              Screenshot comparison tests
|-- reports                 HTML, Allure, JSON, JUnit, and logs
|-- test-results            Screenshots, videos, and traces
|-- playwright.config.js    Main Playwright configuration
|-- package.json            Scripts and dependencies
`-- Jenkinsfile            Jenkins CI pipeline
```

## Application Under Test

- URL: `https://automationexercise.com`
- Application type: E-commerce demo application.
- Primary workflows: authentication, product discovery, cart management, checkout, and order placement.

## Test Credentials

```text
BASE_URL=https://automationexercise.com
USER_EMAIL=automation001@demo.com
USER_PASSWORD=Automation@1234
```

## Installation Guide

```bash
npm install
npx playwright install
```

For CI Linux agents, install browser dependencies:

```bash
npx playwright install --with-deps
```

## Environment Setup

Copy `.env.example` to `.env` and update values if needed:

```bash
BASE_URL=https://automationexercise.com
USER_EMAIL=automation001@demo.com
USER_PASSWORD=Automation@1234
LOG_LEVEL=info
```

Use a custom file with:

```bash
ENV_FILE=.env.qa npm test
```

## Test Execution Commands

| Command | Purpose |
| --- | --- |
| `npm test` | Run the full Playwright suite |
| `npm run test:headed` | Run tests in headed mode |
| `npm run test:debug` | Launch Playwright debug mode |
| `npm run test:chromium` | Run Chromium project |
| `npm run test:firefox` | Run Firefox project |
| `npm run test:webkit` | Run WebKit project |
| `npm run test:chrome` | Run Google Chrome channel |
| `npm run test:edge` | Run Microsoft Edge channel |
| `npm run test:smoke` | Run tests tagged `@smoke` |
| `npm run test:regression` | Run tests tagged `@regression` |
| `npm run test:api` | Run API tests |
| `npm run test:visual` | Run visual tests |
| `npm run lint` | Run ESLint checks |

## Reporting

- HTML report: `reports/html`
- Allure results: `reports/allure-results`
- JSON report: `reports/json/results.json`
- JUnit report: `reports/junit/results.xml`
- Logs: `reports/logs/framework.log`
- Failure artifacts: `test-results`

Generate and open Allure:

```bash
npm run report:allure
```

Open Playwright HTML report:

```bash
npm run report:html
```

## CI/CD Integration

GitHub Actions workflow is available at `.github/workflows/playwright.yml`.

Jenkins pipeline is available in `Jenkinsfile` and expects:

- NodeJS tool named `NodeJS-20`.
- Jenkins credentials `automation-exercise-email` and `automation-exercise-password`.

## Browser Support Matrix

| Browser | Playwright project | Command |
| --- | --- | --- |
| Chromium | `chromium` | `npm run test:chromium` |
| Firefox | `firefox` | `npm run test:firefox` |
| WebKit | `webkit` | `npm run test:webkit` |
| Google Chrome | `chrome` | `npm run test:chrome` |
| Microsoft Edge | `edge` | `npm run test:edge` |

## End-to-End Workflow Diagram

```text
Open application
  -> Login
  -> Search products
  -> View product details
  -> Add product to cart
  -> Proceed to checkout
  -> Add order comment
  -> Submit payment
  -> Verify order placement
  -> Logout
```

## Testing Types Covered

- Smoke tests
- Regression tests
- Negative tests
- End-to-end UI tests
- API contract examples
- Visual regression examples
- Cross-browser execution
- CI execution

## Best Practices Followed

- Page Object Model for UI workflows.
- Centralized routes, messages, fixtures, and test data.
- Environment variables for deploy-specific values.
- Clean test tags for selective execution.
- Automatic traces, screenshots, and videos for failed tests.
- Dedicated report folders for each output format.
- CI-ready scripts and pipeline files.
- Linting and formatting for code quality.
- Structured logging through Winston.

## Version Information

| Tool | Version |
| --- | --- |
| Node.js | 20 recommended |
| Playwright | `^1.45.0` |
| JavaScript runtime | CommonJS on Node.js |
| Framework version | `1.0.0` |

## Folder Notes

Every top-level folder has a dedicated purpose:

- `.github/workflows`: GitHub Actions automation.
- `src/constants`: Shared route and message constants.
- `src/data`: Static JSON data for repeatable tests.
- `src/fixtures`: Custom Playwright fixtures for page objects and data.
- `src/helpers`: Reusable API and assertion helpers.
- `src/pages`: Page Object Model classes.
- `src/reporters`: Custom Playwright reporter.
- `src/utils`: Environment, logging, wait, and data loading utilities.
- `tests/api`: API test scenarios.
- `tests/e2e`: UI workflow scenarios.
- `tests/setup`: Pre-test setup and environment checks.
- `tests/visual`: Screenshot comparison examples.

## Production Ready Badge Section

This framework is GitHub-ready for senior QA automation workflows and includes the core assets expected in a production automation repository: reusable architecture, browser matrix, reporting, CI/CD, test tagging, retries, failure artifacts, logging, and code quality checks.
