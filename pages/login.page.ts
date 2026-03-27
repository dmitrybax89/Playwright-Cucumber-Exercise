import { Page } from "@playwright/test"

export class Login {
    private readonly page: Page
    private readonly password: string = 'secret_sauce'
    private readonly passwordField: string = 'input[id="password"]'
    private readonly userNameField: string = 'input[id="user-name"]'
    private readonly loginButton: string = 'input[id="login-button"]'
    private readonly errorMessage: string= '[data-test="error"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async validateTitle(expectedTitle: string) {
        const pageTitle = await this.page.title();
        /**
         * // This change is not necessary,
         *  but, if register isn't important it's better to check use toLowerCase() to avoid possible issues
         */
        if (pageTitle.toLowerCase() !== expectedTitle.toLowerCase()) { 
          throw new Error(`Expected title to be ${expectedTitle} but found ${pageTitle}`);
        }
    }

    public async loginAsUser(userName: string) {
        await this.page.locator(this.userNameField).fill(userName)
        await this.page.locator(this.passwordField).fill(this.password)
        await this.page.locator(this.loginButton).click()
    }

  public async validateErrorMessage(expectedMessage: string) {
    const actualMessage = await this.page.locator(this.errorMessage).textContent();
    if (actualMessage !== expectedMessage) {
        throw new Error(`Expected error "${expectedMessage}" but found "${actualMessage}"`);
    }
}
}