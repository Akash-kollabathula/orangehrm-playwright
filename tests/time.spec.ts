import { test } from '../fixtures/testFixture';

test('Time module displays pending timesheets', async ({ dashboardPage, timePage }) => {
  await dashboardPage.openDashboard();
  await dashboardPage.navigateToModule('Time');
  await timePage.assertTimesheetsLoaded();
});
