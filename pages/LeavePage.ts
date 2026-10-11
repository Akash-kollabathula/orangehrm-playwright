import { Page } from '@playwright/test';
import { ModulePage } from './ModulePage';

export class LeavePage extends ModulePage {
  constructor(page: Page) {
    super(page);
  }

  async assertLeaveListLoaded() {
    await this.assertListLoaded('Leave List');
  }
}
