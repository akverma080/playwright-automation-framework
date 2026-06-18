import {expect, test} from '@playwright/test'
import { HomePage } from '../pages/HomePage'

test.describe('Home Page', () => {


  test('should display the correct title', async ({page}) =>{

    const homePage = new HomePage(page);
    await homePage.navigateToHome();
    const pageTitle = await page.title();
    expect(pageTitle).toContain('Scentelio');


  });


});