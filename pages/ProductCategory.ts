import {Page, expect} from '@playwright/test';
import { BasePage } from './BasePage';
import { config } from '../config/config';



export class ProductCategory  {

    constructor(protected page: Page) {}

async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async getPageHeading(title: string): Promise<string> {
    return (await this.pageTitle(title).textContent()) ?? '';
  }

private pageTitle(title: string) {
  return this.page.getByRole('heading', { name: title, level: 1 });


}
  
  }
