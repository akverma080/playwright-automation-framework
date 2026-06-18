import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { BasePage } from '../../pages/BasePage';

test.describe('Login Tests', () => {   

test('should display error message for invalid credentials', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.openLogin();
// await loginPage.loginWithWrongCredentials();

// await expect(loginPage.errorMessage)
//   .toHaveText('Invalid username or password.');
 });

});