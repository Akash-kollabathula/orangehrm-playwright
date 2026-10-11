import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { PimPage } from '../pages/PimPage';
import { AdminPage } from '../pages/AdminPage';
import { LeavePage } from '../pages/LeavePage';
import { RecruitmentPage } from '../pages/RecruitmentPage';
import { TimePage } from '../pages/TimePage';

type Pages = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  pimPage: PimPage;
  adminPage: AdminPage;
  leavePage: LeavePage;
  recruitmentPage: RecruitmentPage;
  timePage: TimePage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.openApp();
    await use(loginPage);
  },

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },

  pimPage: async ({ page }, use) => {
    await use(new PimPage(page));
  },

  adminPage: async ({ page }, use) => {
    await use(new AdminPage(page));
  },

  leavePage: async ({ page }, use) => {
    await use(new LeavePage(page));
  },

  recruitmentPage: async ({ page }, use) => {
    await use(new RecruitmentPage(page));
  },

  timePage: async ({ page }, use) => {
    await use(new TimePage(page));
  },
});

export { expect } from '@playwright/test';