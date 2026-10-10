import { test } from '../fixtures/testFixture';
import testData from '../data/testdata.json';

test.describe('PIM Module Tests', () => {

  test('Add New Employee Successfully', async ({ loginPage, dashboardPage, pimPage }) => {
    // Step 1: Login
    await loginPage.login(testData.validUser.username, testData.validUser.password);
    await dashboardPage.assertDashboardLoaded();

    // Step 2: Navigate to PIM and Add Employee
    await dashboardPage.navigateToPIM();
    await pimPage.addEmployee(testData.employee.firstName, testData.employee.lastName);

    // Step 3: Verify creation
    await pimPage.assertEmployeeCreated();
  });

});