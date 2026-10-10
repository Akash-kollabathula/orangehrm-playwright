import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly alertBadge: Locator;
  readonly inputErrors: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.alertBadge = page.getByRole('alert');
    this.inputErrors = page.locator('span.oxd-input-field-error-message');
  }

  async open(): Promise<void> {
    await this.navigateTo('/web/index.php/auth/login');
  }

  async executeLogin(username?: string, password?: string): Promise<void> {
    if (username) await this.usernameInput.fill(username);
    if (password) await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectErrorMessage(message: string): Promise<void> {
    await expect(this.alertBadge).toContainText(message);
  }

  async expectRequiredFieldErrorCount(count: number): Promise<void> {
    await expect(this.inputErrors).toHaveCount(count);
  }
}