import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  readonly headerTitle: Locator;
  readonly userDropdown: Locator;

  constructor(page: Page) {
    super(page);
    this.headerTitle = page.getByRole('heading', { name: 'Dashboard' });
    this.userDropdown = page.locator('span.oxd-userdropdown-tab');
  }

  async verifyDashboardLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/.*dashboard.*/);
    await expect(this.headerTitle).toBeVisible();
  }
}