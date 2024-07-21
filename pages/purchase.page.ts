import { Page } from "@playwright/test";
import { expect } from '@playwright/test';

export class Purchase {
  private readonly page: Page;
  private readonly selectCart: string = 'a[id="shopping_cart_container"]';
  private readonly selectCheckout: string = 'button[id="checkout"]';
  private readonly firstName: string = 'input[id="first-name"]';
  private readonly lastName: string = 'input[id="last-name"]';
  private readonly zipCode: string = 'input[id="postal-code"]';
  private readonly selectContinue: string = 'input[id="continue"]';
  private readonly selectFinish: string = 'button[id="finish"]';
  private readonly validateText: string = 'h2.complete-header';

  constructor(page: Page) {
    this.page = page;
  }

//   public async addBackPackToCart() {
//     await this.page.locator(this.addToCart).click();
//   }

  public async selectCart1() {
    await this.page.locator(this.selectCart).click();
  }

  public async selectCheckout1() {
    await this.page.locator(this.selectCheckout).click();
  }

  public async fillInfo(firstName: string, lastName: string, zipCode: string) {
    await this.page.locator(this.firstName).fill(firstName);
    await this.page.locator(this.lastName).fill(lastName);
    await this.page.locator(this.zipCode).fill(zipCode);
  }

  public async selectContinue1() {
    await this.page.locator(this.selectContinue).click();
  }

  public async selectFinish1() {
    await this.page.locator(this.selectFinish).click();
  }

  public async validateText1(expectedText: string) {
    const actualText = await this.page.locator(this.validateText).textContent();
    expect(actualText?.trim()).toEqual(expectedText);
  }
}
