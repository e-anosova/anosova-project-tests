import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage.js";

export class ElementsPage extends BasePage {
  readonly textBox: Locator;
  readonly userForm: Locator;
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly currentAddressInput: Locator;
  readonly permanentAddressInput: Locator;
  readonly submitButton: Locator;
  readonly outputForm: Locator;
  readonly nameOutput: Locator;
  readonly emailOutput: Locator;
  readonly currentAddressOutput: Locator;
  readonly permananetAddressOutput: Locator;

  constructor(protected page: Page) {
    super(page);
    this.textBox = this.page.getByRole("link", { name: "Text Box" });
    this.userForm = page.locator("#userForm");
    this.fullNameInput = page.locator("#userName");
    this.emailInput = page.locator("#userEmail");
    this.currentAddressInput = page.locator("#currentAddress");
    this.permanentAddressInput = page.locator("#permanentAddress");
    this.submitButton = page.locator("#submit");
    this.outputForm = page.locator("#output");
    this.nameOutput = page.locator("#name");
    this.emailOutput = page.locator("#email");
    this.currentAddressOutput = page.locator("#currentAddress.mb-1");
    this.permananetAddressOutput = page.locator("#permanentAddress.mb-1");
  }

  async gotoTextBox() {
    await this.textBox.waitFor({ state: "visible", timeout: 10000 });
    const isVisible = await this.textBox.isVisible();
    await this.textBox.click();
    await this.page.waitForURL(/.*text-box/, { timeout: 10000 });
    await expect(this.userForm).toBeVisible;
    await super.checkUrl("text-box");
  }

  async fullNameFill(fullName: string) {
    await expect(this.fullNameInput).toBeEditable;
    await this.fullNameInput.fill(fullName);
  }

  async emailFill(email: string) {
    await expect(this.emailInput).toBeEditable;
    await this.emailInput.fill(email);
  }

  async currentAddresslFill(currentAddress: string) {
    await expect(this.currentAddressInput).toBeEditable;
    await this.currentAddressInput.fill(currentAddress);
  }

  async permanentAddressFill(permanentAddress: string) {
    await expect(this.permanentAddressInput).toBeEditable;
    await this.permanentAddressInput.fill(permanentAddress);
  }

  async clickSubmit() {
    await this.submitButton.click();
  }

  async checkOutputResult() {
    await expect(this.outputForm).not.toBeEmpty();
  }

  async checkOutputAndInputNamesMatch(fullName: string) {
    await expect(this.nameOutput).toHaveText(
      new RegExp(`Name:\\s*${fullName}`),
    );
  }

  async checkOutputAndInputEmailMatch(email: string) {
    console.log(
      "Проверяем, что выведеннsq output email соответсвует input email",
    );
    await expect(this.emailOutput).toHaveText(new RegExp(`Email:\\s*${email}`));
  }

  async checkOutputAndInputCurrentAddressMatch(currentAddress: string) {
    console.log(
      "Проверяем, что выведеннsq output email соответсвует input email",
    );
    await expect(this.currentAddressOutput).toHaveText(
      new RegExp(`Current Address :\\s*${currentAddress}`),
    );
  }

  async checkOutputAndInputPermanentAddressMatch(permanentAddress: string) {
    console.log(
      "Проверяем, что выведеннsq output email соответсвует input email",
    );
    await expect(this.permananetAddressOutput).toHaveText(
      new RegExp(`Permananet Address :\\s*${permanentAddress}`),
    );
  }

  async checkEmptyOutputResults() {
    await expect(this.outputForm).toBeEmpty();
  }

  async checkEmailInpitHasError() {
    console.log(
      "Проверяем, что при неверном формате email поле подсвечиваетя красным",
    );
    await expect(this.emailInput).toHaveClass(/field-error/);
  }
}
