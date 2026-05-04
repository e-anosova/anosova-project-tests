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

 await test.step('Открываем Demoqa', async () => {
    await demoqaPage.openDemoqa();
  });
  await test.step('Открываем страницу Elements', async () => {
     await demoqaPage.goToElementsPage();
  });
  await test.step('Идём в раздел TextBox', async () => {
    await elementsPage.gotoTextBox();
  });
  await test.step('Заполняем полное имя', async () => {
    await elementsPage.fullNameFill(fullName);
  });
  await test.step('Заполняем email', async () => {
    await elementsPage.emailFill(email);
  });
  await test.step('Заполняем текущий адрес', async () => {
   await elementsPage.currentAddresslFill(currentAddress);
  });
  await test.step('Заполняем адрес регистрации', async () => {
    await elementsPage.permanentAddressFill(permanentAddress);
  });
  await test.step('Нажимаем кнопку Submit', async () => {
    await elementsPage.clickSubmit();
  });
  await test.step('Проверяем отображение результатов вывода', async () => {
    await elementsPage.checkOutputResult();
  });
  await test.step('Проверяем соответствие введённого и полученного имени', async () => {
    await elementsPage.checkOutputAndInputNamesMatch(fullName);
  });
  await test.step('Проверяем соответствие введённого и полученного email', async () => {
    await elementsPage.checkOutputAndInputEmailMatch(email);
  });
  await test.step('Проверяем соответствие введённого и полученного текущего адреса', async () => {
    await elementsPage.checkOutputAndInputCurrentAddressMatch(currentAddress);
  });
  await test.step('Проверяем соответствие введённого и полученного адреса регистрации', async () => {
    await elementsPage.checkOutputAndInputPermanentAddressMatch(permanentAddress);
  });
  
});

test("Сlick submit without filling fields", async ({ page }) => {
  const demoqaPage = new DemoqaPage(page);
  const elementsPage = new ElementsPage(page);

  await test.step('Открываем Demoqa', async () => {
    await demoqaPage.openDemoqa();
  });
  await test.step('Открываем страницу Elements', async () => {
     await demoqaPage.goToElementsPage();
  });
  await test.step('Идём в раздел TextBox', async () => {
    await elementsPage.gotoTextBox();
  });
 await test.step('Нажимаем кнопку Submit', async () => {
    await elementsPage.clickSubmit();
  });
  await test.step('Проверяем, что таблица вывода не отображется', async () => {
    await elementsPage.checkEmptyOutputResults();
  });
});

test("Check wrong email format", async ({ page, invalidEmail }) => {
  const demoqaPage = new DemoqaPage(page);
  const elementsPage = new ElementsPage(page);

await test.step('Открываем Demoqa', async () => {
    await demoqaPage.openDemoqa();
  });
  await test.step('Открываем страницу Elements', async () => {
     await demoqaPage.goToElementsPage();
  });
  await test.step('Идём в раздел TextBox', async () => {
    await elementsPage.gotoTextBox();
  });
  await test.step('Вводим email в некорректном формате', async () => {
    await elementsPage.emailFill(invalidEmail);
  });

   await test.step('Нажимаем кнопку Submit', async () => {
    await elementsPage.clickSubmit();
  });
  await test.step('Проверяем, что таблица вывода не отображается', async () => {
     await expect(elementsPage.outputForm).toBeEmpty();
  });
  await test.step('Проверяем, что поле email подсвечивает ошибку', async () => {
   await elementsPage.checkEmailInpitHasError();
  });
  
});
