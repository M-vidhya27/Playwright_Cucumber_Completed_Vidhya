"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const test_1 = require("@playwright/test");
class Login {
    page;
    password = 'secret_sauce';
    passwordField = 'input[id="password"]';
    userNameField = 'input[id="user-name"]';
    loginButton = 'input[id="login-button"]';
    errorMessage = '//div[@class="error-message-container error"]/h3';
    constructor(page) {
        this.page = page;
    }
    async validateTitle(expectedTitle) {
        const pageTitle = await this.page.title();
        if (pageTitle !== expectedTitle) {
            throw new Error(`Expected title to be ${expectedTitle} but found ${pageTitle}`);
        }
    }
    async loginAsUser(userName) {
        await this.page.locator(this.userNameField).fill(userName);
        await this.page.locator(this.passwordField).fill(this.password);
        await this.page.locator(this.loginButton).click();
    }
    async validateText(expectedErrorMessage) {
        await (0, test_1.expect)(this.page.locator(this.errorMessage)).toHaveText(expectedErrorMessage);
    }
}
exports.Login = Login;
