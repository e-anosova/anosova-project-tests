import { Locator, Page, expect } from "@playwright/test";

export class BasePage {
  readonly elementsButton: Locator;

  constructor(protected page: Page) {
    this.elementsButton = this.page.locator('a[href="https://demoqa.com"]');
  }

  async checkUrl(partOfUrl: string) {
    console.log(`Проверяем, что URL содержит текст ${partOfUrl}`);
    await expect(this.page).toHaveURL(new RegExp(`.*${partOfUrl}.*`));
  }
}
