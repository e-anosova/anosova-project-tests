import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage.js";

export class ButtonsPage extends BasePage {
  readonly buttonsPageButton: Locator;
  readonly buttonsHeader: Locator;
  readonly doubleClick: Locator;
  readonly rightClick: Locator;
  readonly dynamicClick: Locator;
  readonly doubleClickMessage: Locator;
  readonly rightClickMessage: Locator;
  readonly dynamicClickMessage: Locator;
  

  constructor(protected page: Page) {
    super(page);
    this.buttonsPageButton = this.page.getByRole("link", { name: "Buttons" });
    this.buttonsHeader = this.page.getByRole('heading', { level: 1, name: 'Buttons' });
    this.doubleClick = page.getByRole('button', { name: 'Double Click Me' });
    this.rightClick = page.getByRole('button', { name: 'Right Click Me' });
    this.dynamicClick = page.locator('button:has-text("Click Me")').last();;
    this.doubleClickMessage = page.locator("doubleClickMessage");
    this.rightClickMessage = page.locator("rightClickMessage");
    this.dynamicClickMessage = page.locator("dynamicClickMessage");
  }

  async goToButtonsPage() {
    await this.buttonsPageButton.click();
    await super.checkUrl("buttons");
  }

  async clichDoubleClickButton() {
    await this.doubleClick.click({ clickCount: 2, delay: 150 });
  }

  async clichRightClickButton() {
    await this.rightClick.click({ button: 'right' });
  }

  async clichDynamicClickButton() {
    await this.dynamicClick.click();
  }

  async checkDoubleClickMessage() {
    await this.doubleClickMessage.isVisible();
  }

   async checkRightClickMessage() {
    await this.rightClickMessage.isVisible();
  }

   async checkDinamiclickMessage() {
    await this.dynamicClickMessage.isVisible();
  }
}