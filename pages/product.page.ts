import { Page, expect } from '@playwright/test';

export class Product {
  private readonly page: Page;
  private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]';
  private readonly cartButton: string = '//div[@id="shopping_cart_container"]';
  private readonly sortDropdown: string = '//select[@class="product_sort_container"]';
  private readonly inventoryItemNameSelector: string = '.inventory_item_name';
  private readonly inventoryItemPriceSelector: string = '.inventory_item_price';

  constructor(page: Page) {
    this.page = page;
  }

  public async addBackPackToCart() {
    await this.page.locator(this.addToCart).click();
  }

  public async clickOnCartButton() {
    await this.page.locator(this.cartButton).click();
  }

  public async sortItemsBy(sortOrder: string) {
    await this.page.locator(this.sortDropdown).selectOption({ label: sortOrder });
  }

  public async verifyProductOrder(sortOrder: string) {
    const itemPrices = await this.page.$$eval(this.inventoryItemPriceSelector, elements =>
      elements.map(element => parseFloat(element.textContent?.replace('$', '').trim() || '0'))
    );

    let sortedItemPrices: number[] = [];

    if (sortOrder === 'Price (low to high)') {
      sortedItemPrices = [...itemPrices].sort((a, b) => a - b);
    } else if (sortOrder === 'Price (high to low)') {
      sortedItemPrices = [...itemPrices].sort((a, b) => b - a);
    }

    expect(itemPrices).toEqual(sortedItemPrices);
  }

  public async validateProducts(expectedOrder: string[]): Promise<void> {
    const productNames = await this.page.$$eval(this.inventoryItemNameSelector, elements =>
      elements.map(element => element.textContent?.trim() || '')
    );

    expect(productNames).toEqual(expectedOrder);
  }
}
