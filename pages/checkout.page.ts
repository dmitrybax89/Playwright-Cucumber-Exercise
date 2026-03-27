import { Page } from "@playwright/test"
import userData from '../data/userDetails.json'

export class Checkout {
    private readonly page: Page
    private readonly headerCartIcon: string = '[data-test="shopping-cart-link"]'
    private readonly checkoutButton: string = '[data-test="checkout"]'
    private readonly firstName: string = '[data-test="firstName"]'
    private readonly lastName: string = '[data-test="lastName"]'
    private readonly zip: string = '[data-test="postalCode"]'
    private readonly checkoutContinue: string = '[data-test="continue"]'
    private readonly finishButton: string = '[data-test="finish"]'
    private readonly orderSuccessMessage: string = '[data-test="complete-header"]'
    

    constructor(page: Page) {
        this.page = page;
    }

    public async goToCart() {
        await this.page.locator(this.headerCartIcon).click()
    }

    public async goToCheckout() {
        await this.page.locator(this.checkoutButton).click()
    }

    public async fillOutCheckoutForm() {
        await this.page.locator(this.firstName).fill(userData.firstName)
        await this.page.locator(this.lastName).fill(userData.lastName)
        await this.page.locator(this.zip).fill(userData.ZIP)
    }

        public async checkoutClickContinue() {
        await this.page.locator(this.checkoutContinue).click()
    }

        public async checkoutClickFinish() {
        await this.page.locator(this.finishButton).click()
    }

    public async orderSuccess() {
        await this.page.locator(this.orderSuccessMessage).click();
        const expectedMessage = 'Thank you for your order!';
        const actualMessage = await this.page.locator(this.orderSuccessMessage).textContent();
        if (actualMessage?.trim() !== expectedMessage) {
            throw new Error(`Expected "${expectedMessage}" but found "${actualMessage}"`);
        }
    }


}