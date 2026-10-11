import { test } from '../fixtures/testFixture';

test('Admin can search for an existing system user', async ({
  dashboardPage,
  adminPage,
}) => {
  await dashboardPage.openDashboard();
  await dashboardPage.navigateToModule('Admin');
  await adminPage.assertListLoaded('System Users');

  await adminPage.searchForUser('Admin');
  await adminPage.assertUserListed('Admin');
});
