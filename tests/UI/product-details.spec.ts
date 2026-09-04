import { test, expect } from '../../fixtures/fixture';

import { CategoryConfig, categoryType } from '../../test-data/categoryData';

test.describe('Home Page', () => {

  test('should display the correct title', async ({ homePage, productCategory }) => {
    const pageTitle = await productCategory.getPageTitle()
    expect(pageTitle).toContain('Scentelio')
  });


  categoryType.forEach((category, index) => {
    test(`should display for ${category} link`, async ({ homePage, productCategory, navigationComponent }) => {     
      await navigationComponent.clickMenuLinkByName(category);
      const title = await productCategory.getPageHeading(category);
      expect(title).toContain(category);

    });

  });

});