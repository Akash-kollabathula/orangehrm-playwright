import { Page } from '@playwright/test';
import { ModulePage } from './ModulePage';

export class RecruitmentPage extends ModulePage {
  constructor(page: Page) {
    super(page);
  }

  async assertCandidatesLoaded() {
    await this.assertListLoaded('Candidates');
  }
}
