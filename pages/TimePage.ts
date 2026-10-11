import { Page } from '@playwright/test';
import { ModulePage } from './ModulePage';

export class TimePage extends ModulePage {
  constructor(page: Page) {
    super(page);
  }

  async assertTimesheetsLoaded() {
    await this.assertListLoaded('Timesheets Pending Action');
  }
}
