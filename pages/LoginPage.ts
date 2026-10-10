import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly alertBadge: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.alertBadge = page.getByRole('alert');
  }

  async openApp() {
    await this.navigateTo('/web/index.php/auth/login');
  }

  async login(username?: string, password?: string) {
    if (username) await this.sendKeys(this.usernameInput, username);
    if (password) await this.sendKeys(this.passwordInput, password);
    await this.clickElement(this.loginButton);
  }

  async assertInvalidCredentialsError() {
    await expect(this.alertBadge).toContainText('Invalid credentials');
  }
}