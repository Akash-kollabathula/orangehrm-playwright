import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  readonly heading: Locator;
  readonly pimMenu: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Dashboard' });
    this.pimMenu = page.getByRole('link', { name: 'PIM' });
  }

  async assertDashboardLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async navigateToPIM() {
    await this.clickElement(this.pimMenu);
  }
}