import { test, expect } from '../../../fixtures/fixture';

const INVALID_LOGIN_MESSAGE = 'Invalid username or password.';

test.describe('Login Tests', () => {

  test('should display an error message for invalid credentials', async ({ loginPage }) => {

    await loginPage.openLogin();

    await expect(loginPage.errorMessage)
      .toHaveText(INVALID_LOGIN_MESSAGE);

  });

});