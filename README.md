# Magento Automation Project

This project automates key user flows on [Magento Test Site](https://magento.softwaretestingboard.com/) using Cypress and the Page Object Model (POM) approach. Test data is managed via external JSON files. Reporting is handled by the Mochawesome reporter.

## Features

- Registration flow with login validation
- Place order with multiple products (with price calculation checks)
- Add products to Wishlist and checkout from Wishlist
- Search and validate results
- Data-driven tests using external files
- Environment variables for sensitive data
- Detailed test reports

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [Git](https://git-scm.com/)
- Chrome or Chromium-based browser

## Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/magento-automation.git
   cd magento-automation
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in any required values (if needed).
   - No personal account data or API keys are stored in the project.

4. **Test Data:**
   - Edit `data/testUser.json` and `data/products.json` with your test data as needed.

## Running Tests

### Run all tests in headless mode:
```sh
npx cypress run
```

### Run tests in interactive mode:
```sh
npx cypress open
```

### Generate HTML report (after running tests):
```sh
npx mochawesome-merge cypress/reports/*.json > mochawesome.json
npx marge mochawesome.json
```

## Project Structure

```
src/
  pages/         # Page Object classes
  tests/         # Test cases
  utils/         # Utilities (data provider, env)
data/            # Test data files (JSON, CSV, Excel)
reports/         # Test reports
.env.example     # Example environment variables
README.md
```

## Required Environment Variables

If any sensitive data is needed (e.g., test user credentials), set them in your `.env` file and access via `Cypress.env()` in your tests.

## How to Retrieve Environment Variables

- Set variables in `.env` (not committed to git).
- Access them in tests using `Cypress.env('VARIABLE_NAME')`.

## Reporting

- Test results are output in the `reports/` directory using Mochawesome.
- Open the generated HTML report in your browser for detailed results.

## Notes

- Do **not** store personal account data or API keys in the repository.
- Update selectors in Page Objects if the Magento site structure changes.
- For any issues, please open an issue on the repository.

---
