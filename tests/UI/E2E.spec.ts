import { expect, test } from '../../fixtures/fixture'
import { productNames } from '../../pages/ProductCategory';
import { categoryType } from '../../test-data/categoryData';

test.describe('E2E Tests', () => {

    test('Place Order', async ({ homePage, navigationComponent, productCategory, cartPage, checkoutPage, orderConfirmationPage }) => {

        const forMensCategory = categoryType[0]
        await navigationComponent.clickMenuLinkByName(forMensCategory)
        await productCategory.clickAddToCartButton(productNames.AquaDGIO)
        await productCategory.clickView()
        await cartPage.clickCheckoutButton()
        await checkoutPage.placeOrder()
        const orderReceivedHeading =
            orderConfirmationPage.getOrderReceivedHeading()
        await expect(orderReceivedHeading).toBeVisible()
        const orderConfirmationMessage =
            orderConfirmationPage.getThankYouMessage()
        await expect(orderConfirmationMessage).toBeVisible()
    })

})