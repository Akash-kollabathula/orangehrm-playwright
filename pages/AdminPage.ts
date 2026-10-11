import { Page, expect } from '@playwright/test';
import { ModulePage } from './ModulePage';

export class AdminPage extends ModulePage {
  private readonly searchForm;

  constructor(page: Page) {
    super(page);
    this.searchForm = page.locator('.oxd-form').first();
  }

  async searchForUser(username: string) {
    await this.searchForm.getByRole('textbox').first().fill(username);
    await this.searchForm.getByRole('button', { name: 'Search' }).click();
  }

  async assertUserListed(username: string) {
    await expect(
      this.page.getByRole('cell', { name: username, exact: true }).first(),
    ).toBeVisible();
  }
}
