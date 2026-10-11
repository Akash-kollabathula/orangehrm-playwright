import { test } from '../fixtures/testFixture';

test('Recruitment module displays candidate records', async ({
  dashboardPage,
  recruitmentPage,
}) => {
  await dashboardPage.openDashboard();
  await dashboardPage.navigateToModule('Recruitment');
  await recruitmentPage.assertCandidatesLoaded();
});
