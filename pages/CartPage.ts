import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}  
  
  
  async clickCheckoutButton(): Promise<void> {
    await this.getCheckoutButton().click();
  }

  private getCheckoutButton() {
    return this.page.getByRole('link', { name: 'Proceed to Checkout' });
    
  }



}