import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage.js";
export const BASE_URL = process.env.BASE_URL;

export class DemoqaPage extends BasePage {
  readonly elementsButton: Locator;
  readonly formsButton: Locator;
  readonly alertsWindowsButton: Locator;
  readonly widgetsButton: Locator;
  readonly interactionsButton: Locator;
  readonly booksButton: Locator;

  constructor(page: Page) {
    super(page);
    this.elementsButton = this.page.getByRole("link", { name: "Elements" });
    this.formsButton = this.page.getByRole("link", { name: "Forms" });
    this.alertsWindowsButton = this.page.getByRole("link", {
      name: "AlertsWindows",
    });
    this.widgetsButton = this.page.getByRole("link", { name: "Widgets" });
    this.interactionsButton = this.page.getByRole("link", {
      name: "Interactios",
    });
    this.booksButton = this.page.getByRole("link", { name: "Books" });
  }

  async openDemoqa() {
    await this.page.goto("/");
  }

  async goToElementsPage() {
    console.log("Идём на страницу Elements");
    await this.elementsButton.click();
    await super.checkUrl("elements");
  }

  async goToFormsPage() {
    console.log("Идём на страницу Forms");
    await this.formsButton.click();
    await super.checkUrl("forms");
  }

  async goToAlertsPage() {
    console.log("Идём на страницу Windows");
    await this.alertsWindowsButton.click();
    await super.checkUrl("windows");
  }

  async goToWidgetsPage() {
    console.log("Идём на страницу Widgets");
    await this.widgetsButton.click();
    await super.checkUrl("widgets");
  }

  async goToInteractionsPage() {
    console.log("Идём на страницу Interactions");
    await this.interactionsButton.click();
    await super.checkUrl("interactions");
  }

  async goToBooksPage() {
    console.log("Идём на страницу books");
    await this.booksButton.click();
    await super.checkUrl("books");
  }
}
