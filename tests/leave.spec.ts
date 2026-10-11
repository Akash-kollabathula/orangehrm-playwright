import { test } from '../fixtures/testFixture';

test('Leave module displays the leave list', async ({ dashboardPage, leavePage }) => {
  await dashboardPage.openDashboard();
  await dashboardPage.navigateToModule('Leave');
  await leavePage.assertLeaveListLoaded();
});
