import { Then } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { Checkout } from '../pages/checkout.page';

Then('Select the cart \\(top-right)', async () => {
    await new Checkout(getPage()).goToCart();
});

Then('Click on Checkout button', async () => {
    await new Checkout(getPage()).goToCheckout()
});

Then('I fill out checkout form', async () => {
    await new Checkout(getPage()).fillOutCheckoutForm()
});

Then('I click on continue', async () => {
    await new Checkout(getPage()).checkoutClickContinue()
});

Then('I click on Finish button', async () => {
    await new Checkout(getPage()).checkoutClickFinish()
});


Then('I have to validate success message', async () => {
    await new Checkout(getPage()).orderSuccess()
});