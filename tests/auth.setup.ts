import { mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { test, expect } from '../fixtures/testFixture';
import { authFile, validCredentials } from '../data/testConfig';

test('authenticate for the protected module tests', async ({
  page,
  loginPage,
  dashboardPage,
}) => {
  await loginPage.login(validCredentials.username, validCredentials.password);
  await expect(page).toHaveURL(/\/dashboard\/index/);
  await dashboardPage.assertDashboardLoaded();

  await mkdir(dirname(authFile), { recursive: true });
  await page.context().storageState({ path: authFile });
});
