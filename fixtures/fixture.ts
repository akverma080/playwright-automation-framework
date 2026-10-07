import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductCategory } from '../pages/ProductCategory';
import { NavigationComponent } from '../components/NavigationComponent';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { OrderConfirmationPage } from '../pages/OrderConfirmationPage';

type Fixtures = {
  loginPage: LoginPage;
  productCategory: ProductCategory;
  navigationComponent: NavigationComponent;
  homePage: HomePage
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  orderConfirmationPage:OrderConfirmationPage
};

export const test = base.extend<Fixtures>({

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHome();
    await use(homePage);
  },

  navigationComponent: async ({ page }, use) => {
    await use(new NavigationComponent(page));
  },

  productCategory: async ({ page }, use) => {
    await use(new ProductCategory(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  orderConfirmationPage: async ({ page }, use) => {
    await use(new OrderConfirmationPage(page));
  }
});

export { expect };