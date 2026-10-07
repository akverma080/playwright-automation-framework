import {Page} from "@playwright/test";


export class OrderConfirmationPage {
  constructor(private page: Page) {}  
  

  getThankYouMessage() {
    return this.page.getByText(
        'Thank you. Your order has been received.'
    );
}

   getOrderReceivedHeading() {
    return this.page.getByRole('heading', { name: 'Order received', level: 1 });
  }

}