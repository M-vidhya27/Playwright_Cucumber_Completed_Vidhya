import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Purchase } from '../pages/purchase.page';

Then('I will Select the cart (top-right)', async () => {
  await new Purchase(getPage()).selectCart1();
});

Then('I will Select Checkout', async () => {
  await new Purchase(getPage()).selectCheckout1();
});

Then('I will enter the firstName {string} lastName {string} and zipCode {string}', async (firstName: string, lastName: string, zipCode: string) => {
  await new Purchase(getPage()).fillInfo(firstName, lastName, zipCode);
});

Then('I will Select Continue', async () => {
  await new Purchase(getPage()).selectContinue1();
});

Then('I will Select Finish', async () => {
  await new Purchase(getPage()).selectFinish1();
});

Then('I will Validate the confirmation message element {string}', async (expectedMessage: string) => {
  await new Purchase(getPage()).validateText1(expectedMessage);
});
