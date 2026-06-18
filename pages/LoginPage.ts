import { Page, Locator } from '@playwright/test';
import { environments } from '../config/config';
import { BasePage } from './BasePage';


export class LoginPage extends BasePage {


async openLogin(): Promise<void> {
    await this.navigateToLogin();
  }

 

  async loginWithDefaultUser(): Promise<void> {
  await this.usernameField().fill(process.env.USERNAME!);
  await this.passwordField().fill(process.env.PASSWORD!);
  await this.clickLoginButton();
}

  async loginWithWrongCredentials(): Promise<void> {
  await this.usernameField().fill(process.env.WrongUSERNAME!);
  await this.passwordField().fill(process.env.WrongPASSWORD!);
  await this.clickLoginButton();
}

get errorMessage() {
  return this.page.locator('#errorMessage');
}
private usernameField() {
  return this.page.locator('#username');
}

private passwordField() {
  return this.page.locator('#password');
}

private loginButton() {
  return this.page.locator('#loginButton');
}

async clickLoginButton(): Promise<void> {
  await this.loginButton().click();
}
}



