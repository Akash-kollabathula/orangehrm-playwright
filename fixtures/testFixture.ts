import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { PimPage } from '../pages/PimPage';

type Pages = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  pimPage: PimPage;
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
});

export { expect } from '@playwright/test';