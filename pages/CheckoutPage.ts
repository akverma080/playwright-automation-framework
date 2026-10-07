import { Page } from '@playwright/test'
import { checkoutFormData } from '../test-data/checkoutData'



export class CheckoutPage {
    constructor(private page: Page) { }



    async placeOrder() {
        await this.getEmailInput().fill(checkoutFormData.email)
        await this.getSelectCountryDropdown().selectOption(checkoutFormData.country)
        await this.getFirstNameInput().fill(checkoutFormData.firstName)
        await this.getLastNameInput().fill(checkoutFormData.lastName)
        await this.getAddressInput().fill(checkoutFormData.address)
        await this.getCityInput().fill(checkoutFormData.city)
        await this.getSelectStateDropdown().selectOption(checkoutFormData.state)
        await this.getZipCodeInput().fill(checkoutFormData.pin)
        await this.getPhoneNumberInput().fill(checkoutFormData.phone)
        await this.getPlaceOrderButton().click()
    }

    private getEmailInput() {
        return this.page.getByLabel('Email Address')
    }

    private getSelectCountryDropdown() {
        return this.page.getByLabel('Country/Region')
    }
    private getFirstNameInput() {
        return this.page.getByLabel('First Name')
    }
    private getLastNameInput() {
        return this.page.getByLabel('Last Name')
    }
    private getAddressInput() {
        return this.page.getByRole('textbox', {
            name: 'Address',
            exact: true
        });
    }
    private getCityInput() {
        return this.page.getByLabel('City')
    }

    private getSelectStateDropdown() {
        return this.page.getByLabel('State')
    }
    private getZipCodeInput() {
        return this.page.getByLabel('PIN Code')
    }
    private getPhoneNumberInput() {
        return this.page.getByLabel('Phone (optional)')
    }

    private getPlaceOrderButton() {
        return this.page.getByRole('button', { name: 'Place Order' })
    }

}