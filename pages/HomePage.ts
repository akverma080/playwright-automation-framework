
import { Page } from '@playwright/test';
import { config } from '../config/config';



export class HomePage {
  constructor(protected page: Page) {}  

 
  async navigateToHome(): Promise<void> {
    await this.page.goto(`${config.baseUrl}`, {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  }



}