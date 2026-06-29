import { expect, test } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { NavigationComponent } from '../components/NavigationComponent';
import { ProductCategory } from '../pages/ProductCategory';

test.describe('Home Page', () => {


  test('should display the correct title', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHome();
    const pageTitle = await page.title();
    expect(pageTitle).toContain('Scentelio');
  });


  test('should display for men link', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.navigateToHome();
    const nav = new NavigationComponent(page);

    await nav.clickMenuLinkByName('For Men');
    const productCategoryTitle = new ProductCategory(page);
    const title = await productCategoryTitle.getPageTitle();
    expect(title).toContain('For Men');

  });



});