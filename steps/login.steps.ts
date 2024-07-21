import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle: string) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

Then('I will login as {string}', async (userName: string) => {
  await new Login(getPage()).loginAsUser(userName);
});

Then('I should see the error message {string}', async (expectedErrorMessage: string) => {
  await new Login(getPage()).validateText(expectedErrorMessage);
});