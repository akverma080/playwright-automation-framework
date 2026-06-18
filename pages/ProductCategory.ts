import {Page, expect} from '@playwright/test';
import { BasePage } from './BasePage';
import { config } from '../config/config';



export class ProductCategory  {

    constructor(protected page: Page) {}


async getPageTitle(): Promise<string> { 
    return await this.pageTitle().textContent() || '';
}


private pageTitle() {
  return this.page.locator('.wp-block-cover__inner-container h1');


}
  
  }
