"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const playwrightUtilities_1 = require("../playwrightUtilities");
const product_page_1 = require("../pages/product.page");
(0, cucumber_1.When)('I will add the backpack to the cart', async () => {
    await new product_page_1.Product((0, playwrightUtilities_1.getPage)()).addBackPackToCart();
});
(0, cucumber_1.When)('I will click on the cart icon', async () => {
    await new product_page_1.Product((0, playwrightUtilities_1.getPage)()).clickOnCartButton();
});
(0, cucumber_1.When)('Sort the items by {string}', async (sortOrder) => {
    await new product_page_1.Product((0, playwrightUtilities_1.getPage)()).sortItemsBy(sortOrder);
});
(0, cucumber_1.Then)('Validate all {int} items are sorted correctly by price {string}', async (itemCount, sortOrder) => {
    await new product_page_1.Product((0, playwrightUtilities_1.getPage)()).verifyProductOrder(sortOrder);
});
(0, cucumber_1.Then)('Validate all items are sorted alphabetically by {string}', async (sortOrder) => {
    const expectedOrder = getOrderBasedOnSortOrder(sortOrder);
    await new product_page_1.Product((0, playwrightUtilities_1.getPage)()).validateProducts(expectedOrder);
});
function getOrderBasedOnSortOrder(sortOrder) {
    switch (sortOrder) {
        case "Price (high to low)":
            return ['Sauce Labs Fleece Jacket', 'Sauce Labs Backpack', 'Test.allTheThings() T-Shirt (Red)', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Bike Light', 'Sauce Labs Onesie'];
        case "Price (low to high)":
            return ['Sauce Labs Onesie', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Test.allTheThings() T-Shirt (Red)', 'Sauce Labs Backpack', 'Sauce Labs Fleece Jacket'];
        case "Name (A to Z)":
            return ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)'];
        case "Name (Z to A)":
            return ['Test.allTheThings() T-Shirt (Red)', 'Sauce Labs Onesie', 'Sauce Labs Fleece Jacket', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Bike Light', 'Sauce Labs Backpack'];
        default:
            throw new Error(`Unsupported sort type: ${sortOrder}`);
    }
}
