# Playwright Automation Framework

A scalable end-to-end automation framework built using Playwright and TypeScript following industry best practices for enterprise web applications.

## Technology Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- GitHub Actions
- HTML Reports

## Features

- Cross Browser Testing (Chromium, Firefox, WebKit)
- Page Object Model Design Pattern
- Reusable Components
- Environment Configuration
- Test Data Management
- Screenshot Capture on Failure
- HTML Reporting
- Parallel Test Execution
- CI/CD Ready
- GitHub Actions Integration

## Project Structure

```
automation-framework
│
├── .github/workflows
├── api
├── components
├── config
├── fixtures
├── pages
├── reports
├── screenshots
├── test-data
├── tests
├── utils
├── playwright.config.ts
└── package.json
```

## Installation

```bash
git clone https://github.com/akverma080/playwright-automation-framework.git

cd playwright-automation-framework

npm install
```

## Execute Tests

Run all tests

```bash
npx playwright test
```

Run specific test

```bash
npx playwright test tests/login/login.spec.ts
```

Run in headed mode

```bash
npx playwright test --headed
```

Generate HTML Report

```bash
npx playwright show-report
```

## Design Pattern

- Page Object Model (POM)
- Reusable Components
- Centralized Configuration
- Modular Folder Structure

## CI/CD

The framework supports GitHub Actions for automated execution on every push and pull request.

## Future Enhancements

- API Automation Integration
- Allure Reporting
- Docker Support
- Azure DevOps Pipeline
- Database Validation
- Visual Regression Testing

## Author

**Amit Kumar**

Lead SDET | Angular | Playwright | TypeScript | Automation Framework Design

GitHub: https://github.com/akverma080
