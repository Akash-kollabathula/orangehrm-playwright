import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class PimPage extends BasePage {
  readonly addEmployeeButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly saveButton: Locator;
  readonly personalDetailsHeader: Locator;

  constructor(page: Page) {
    super(page);
    this.addEmployeeButton = page.getByRole('button', { name: 'Add' });
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.personalDetailsHeader = page.getByRole('heading', { name: 'Personal Details' });
  }

  async addEmployee(firstName: string, lastName: string) {
    await this.clickElement(this.addEmployeeButton);
    await this.sendKeys(this.firstNameInput, firstName);
    await this.sendKeys(this.lastNameInput, lastName);
    await this.clickElement(this.saveButton);
  }

  async assertEmployeeCreated() {
    await expect(this.personalDetailsHeader).toBeVisible({ timeout: 15000 });
  }
}