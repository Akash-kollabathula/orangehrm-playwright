import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ModulePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async assertListLoaded(heading: string) {
    await expect(this.page.getByRole('heading', { name: heading, exact: true })).toBeVisible();
    await expect(this.page.getByRole('table')).toBeVisible();
  }
}
