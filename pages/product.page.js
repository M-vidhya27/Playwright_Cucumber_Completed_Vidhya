"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const test_1 = require("@playwright/test");
class Product {
    page;
    addToCart = 'button[id="add-to-cart-sauce-labs-backpack"]';
    cartButton = '//div[@id="shopping_cart_container"]';
    sortDropdown = '//select[@class="product_sort_container"]';
    inventoryItemNameSelector = '.inventory_item_name';
    inventoryItemPriceSelector = '.inventory_item_price';
    constructor(page) {
        this.page = page;
    }
    async addBackPackToCart() {
        await this.page.locator(this.addToCart).click();
    }
    async clickOnCartButton() {
        await this.page.locator(this.cartButton).click();
    }
    async sortItemsBy(sortOrder) {
        await this.page.locator(this.sortDropdown).selectOption({ label: sortOrder });
    }
    async verifyProductOrder(sortOrder) {
        const itemPrices = await this.page.$$eval(this.inventoryItemPriceSelector, elements => elements.map(element => parseFloat(element.textContent?.replace('$', '').trim() || '0')));
        let sortedItemPrices = [];
        if (sortOrder === 'Price (low to high)') {
            sortedItemPrices = [...itemPrices].sort((a, b) => a - b);
        }
        else if (sortOrder === 'Price (high to low)') {
            sortedItemPrices = [...itemPrices].sort((a, b) => b - a);
        }
        (0, test_1.expect)(itemPrices).toEqual(sortedItemPrices);
    }
    async validateProducts(expectedOrder) {
        const productNames = await this.page.$$eval(this.inventoryItemNameSelector, elements => elements.map(element => element.textContent?.trim() || ''));
        (0, test_1.expect)(productNames).toEqual(expectedOrder);
    }
}
exports.Product = Product;
