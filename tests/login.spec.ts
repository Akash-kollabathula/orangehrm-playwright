import { test } from '../fixtures/testFixture';
import testData from '../data/testdata.json';

test.describe('Authentication Tests', () => {

  test('Valid Login Test', async ({ loginPage, dashboardPage }) => {
    await loginPage.login(testData.validUser.username, testData.validUser.password);
    await dashboardPage.assertDashboardLoaded();
  });

  test('Invalid Login Test', async ({ loginPage }) => {
    await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);
    await loginPage.assertInvalidCredentialsError();
  });

});