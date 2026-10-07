import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { config } from '../config/config';

export const productNames = {
  'AquaDGIO': 'Aqua D Gio',
}

export class ProductCategory {

  constructor(protected page: Page) { }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async getPageHeading(title: string): Promise<string> {
    return (await this.pageTitle(title).textContent()) ?? '';
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async clickAddToCartButton(productName: string): Promise<void> {
    await this.getAddToCartButton(productName).click();
  }

  async clickView(): Promise<void> {
    await this.getViewCartLink().click()
  }


  private pageTitle(title: string) {
    return this.page.getByRole('heading', { name: title, level: 1 });
  }


  private getViewCartLink() {
    return this.page.getByRole('link', { name: 'View Cart' });
  }
  private getAddToCartButton(productName: string) {
    return this.page.getByRole('button', { name: `${productName}` });
  }

}
