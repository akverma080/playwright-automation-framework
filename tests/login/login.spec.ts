import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { BasePage } from '../../pages/BasePage';
const INVALID_LOGIN_MESSAGE = 'Invalid username or password.';

test.describe('Login Tests', () => {

  test('should display an error message for invalid credentials', async ({ page }) => {
  
    const loginPage = new LoginPage(page);
    
    await loginPage.openLogin();
    await loginPage.loginWithWrongCredentials();

    // Assert
    await expect(loginPage.errorMessage)
      .toHaveText('Invalid username or password.');
  });

});