# OrangeHRM Playwright tests

End-to-end tests for the OrangeHRM open-source demo, organized around reusable
page objects and fixtures.

## Project layout

```text
data/       Test credentials and test data
fixtures/   Shared Playwright page-object fixtures
pages/      Page objects and shared page behavior
tests/      Authentication setup and module specs
playwright/ Generated authentication state (ignored by Git)
.github/    GitHub Actions workflow
```

## Run tests

```bash
npm ci
npx playwright install chromium
npm test
```

The suite runs a single authentication setup first. Authenticated module tests
reuse its Playwright storage state, while the login tests run with an empty
browser state so valid and invalid login scenarios remain independent. The
generated state is saved under `playwright/.auth/` and is excluded from Git.
The demo currently keeps authentication in browser cookies/local storage rather
than `sessionStorage`; Playwright's storage state captures and restores those
actual authentication values without custom browser scripts.

The demo site's documented `Admin` / `admin123` credentials are the defaults.
To use different credentials locally, add both `ORANGEHRM_USERNAME` and
`ORANGEHRM_PASSWORD` to the root `.env` file or set both in the environment.
The `.env` file is loaded automatically and is ignored by Git. If you set only
one credential, the test configuration stops with an error rather than mixing
your value with a default. Do not commit real credentials or generated browser
state.

Useful commands:

```bash
npm run test:headed
npm run test:ui
npm run test:report
```

## Covered flows

- Authentication: successful and invalid login
- PIM: create an employee with a unique last name
- Admin: search for the existing Admin user
- Leave: verify the leave list is available
- Recruitment: verify the candidates list is available
- Time: verify pending timesheets are available

Module list checks are read-only. The existing PIM create flow creates a
uniquely named employee in the shared demo environment and leaves it there.

## CI

GitHub Actions runs `npm test` on pushes and pull requests to `main` and
`master`, installs Chromium, and uploads the HTML report and failure artifacts.
