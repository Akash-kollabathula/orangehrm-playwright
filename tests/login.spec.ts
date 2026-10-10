import { test, expect } from '../fixtures/baseTest';
import loginData from '../data/loginData.json';

test.describe('Authentication Suite', () => {

  test('TC_01: Verify successful login with valid credentials', async ({ loginPage, dashboardPage }) => {
    await loginPage.executeLogin(loginData.validUser.username, loginData.validUser.password);
    await dashboardPage.verifyDashboardLoaded();
  });

  test('TC_02: Verify error alert with invalid credentials', async ({ loginPage }) => {
    await loginPage.executeLogin(loginData.invalidUser.username, loginData.invalidUser.password);
    await loginPage.expectErrorMessage(loginData.errorMessages.invalidCredentials);
  });

  
  test('TC_03: Verify input validation on empty submission', async ({ loginPage }) => {
    await loginPage.loginButton.click();
    await loginPage.expectRequiredFieldErrorCount(2);
  });

});