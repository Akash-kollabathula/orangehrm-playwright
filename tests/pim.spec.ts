import { test } from '../fixtures/testFixture';
import testData from '../data/testdata.json';

test.describe('PIM Module Tests', () => {

  test('Add New Employee Successfully', async ({ dashboardPage, pimPage }) => {
    await dashboardPage.openDashboard();
    await dashboardPage.assertDashboardLoaded();

    await dashboardPage.navigateToModule('PIM');
    const employee = {
      firstName: testData.employee.firstName,
      lastName: `${testData.employee.lastName}${Date.now()}`,
    };

    await pimPage.addEmployee(employee.firstName, employee.lastName);
    await pimPage.assertEmployeeCreated();
  });

});