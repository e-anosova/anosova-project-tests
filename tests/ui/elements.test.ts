import { expect } from "@playwright/test";
import { test } from "..//..//framework//fixtures//textBoxFixtures";

import { DemoqaPage } from "../../framework/pages/DemoqaPage";
import { ElementsPage } from "../../framework/pages/ElementsPage";
import { BasePage } from "../../framework/pages/BasePage";

test("Fill text box and click Submit", async ({
  page,
  fullName,
  email,
  currentAddress,
  permanentAddress,
}) => {
  const demoqaPage = new DemoqaPage(page);
  const elementsPage = new ElementsPage(page);

  await demoqaPage.openDemoqa();
  await demoqaPage.goToElementsPage();
  await elementsPage.gotoTextBox();
  await elementsPage.fullNameFill(fullName);
  await elementsPage.emailFill(email);
  await elementsPage.currentAddresslFill(currentAddress);
  await elementsPage.permanentAddressFill(permanentAddress);
  await elementsPage.clickSubmit();
  await elementsPage.checkOutputResult();
  await elementsPage.checkOutputAndInputNamesMatch(fullName);
  await elementsPage.checkOutputAndInputEmailMatch(email);
  await elementsPage.checkOutputAndInputCurrentAddressMatch(currentAddress);
  await elementsPage.checkOutputAndInputPermanentAddressMatch(permanentAddress);
});

test("Сlick submit without filling fields", async ({ page }) => {
  const demoqaPage = new DemoqaPage(page);
  const elementsPage = new ElementsPage(page);

  await demoqaPage.openDemoqa();
  await demoqaPage.goToElementsPage();
  await elementsPage.gotoTextBox();
  await elementsPage.clickSubmit();
  await elementsPage.checkEmptyOutputResults();
});

test("Check wrong email format", async ({ page, invalidEmail }) => {
  const demoqaPage = new DemoqaPage(page);
  const elementsPage = new ElementsPage(page);

  await demoqaPage.openDemoqa();
  await demoqaPage.goToElementsPage();
  await elementsPage.gotoTextBox();
  await elementsPage.emailFill(invalidEmail);
  await elementsPage.clickSubmit();
  await expect(elementsPage.outputForm).toBeEmpty();
  await elementsPage.checkEmailInpitHasError();
});
