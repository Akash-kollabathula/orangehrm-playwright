import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  readonly heading: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Dashboard' });
  }

  async openDashboard() {
    await this.navigateTo('/web/index.php/dashboard/index');
  }

  async assertDashboardLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async navigateToModule(name: string) {
    await this.clickElement(this.page.getByRole('link', { name, exact: true }));
  }
}