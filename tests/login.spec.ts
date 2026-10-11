import { test } from '../fixtures/testFixture';
import testData from '../data/testdata.json';
import { validCredentials } from '../data/testConfig';

test.describe('Authentication Tests', () => {

  test('Valid Login Test', async ({ loginPage, dashboardPage }) => {
    await loginPage.login(validCredentials.username, validCredentials.password);
    await dashboardPage.assertDashboardLoaded();
  });

  test('Invalid Login Test', async ({ loginPage }) => {
    await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);
    await loginPage.assertInvalidCredentialsError();
  });

});