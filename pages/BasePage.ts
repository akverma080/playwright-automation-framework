import { Page } from '@playwright/test';
import { config } from '../config/config';
import { ROUTES } from '../config/routes';

export class BasePage {

  constructor(protected page: Page) {}

  async navigateToLogin(): Promise<void> {
    await this.page.goto(`${config.baseUrl}${ROUTES.LOGIN}`);
  }

  
}