// import { test, expect } from '../../fixtures/fixture';
// import { HomePage } from '../pages/HomePage'
// import { NavigationComponent } from '../components/NavigationComponent';
// import { ProductCategory } from '../pages/ProductCategory';
// import { config } from '../config/config';

// test.describe('Home Page', () => {


//   test('should display the correct title', async ({ productCategory }) => {
//     const homePage = new HomePage(page);
//     await homePage.navigateToHome();
//     const pageTitle = await productCategory.title();
//     expect(pageTitle).toContain('Scentelio');
//   });


//   test('should display for men link', async ({ productCategory }) => {

//     const homePage = new HomePage(page);
//     await homePage.navigateToHome();
//     const nav = new NavigationComponent(page);

//     await nav.clickMenuLinkByName(config.category.forMen);
 
//     const title = await productCategory.getPageTitle();
//     expect(title).toContain('For Men');

//   });



// });