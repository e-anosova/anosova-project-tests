import { expect } from "@playwright/test";
import { test } from "../../framework/fixtures/studentFormFixtures";

import { DemoqaPage } from "../../framework/pages/DemoqaPage";
import { ButtonsPage } from "../../framework/pages/ButtonsPage";

test("Check double click message after double click button", async ({ page }) => {
  const demoqaPage = new DemoqaPage(page);
  const buttonsPage = new ButtonsPage(page);

  await test.step('Открываем Demoqa', async () => {
    await demoqaPage.openDemoqa();
  });
  await test.step('Открываем страницу Elements', async () => {
     await demoqaPage.goToElementsPage();
  });
  await test.step('Переходим в разде Buttons', async () => {
    await buttonsPage.goToButtonsPage();
  });
  await test.step('Кликаем два раза по кнопке DoubleClick', async () => {
    await buttonsPage.clichDoubleClickButton();
  });
  await test.step('Проверяем отображение DoubleClickMessage', async () => {
   await buttonsPage.checkDoubleClickMessage();
  });
});

test("Check right click message after double click button", async ({ page }) => {
  const demoqaPage = new DemoqaPage(page);
  const buttonsPage = new ButtonsPage(page);

  await test.step('Открываем Demoqa', async () => {
    await demoqaPage.openDemoqa();
  });
  await test.step('Открываем страницу Elements', async () => {
     await demoqaPage.goToElementsPage();
  });
  await test.step('Переходим в разде Buttons', async () => {
    await buttonsPage.goToButtonsPage();
  });
  await test.step('Кликаем правой кнопкой по RightClickButton', async () => {
    await buttonsPage.clichRightClickButton();
  });
    await test.step('Проверяем отображение RightClickMessage', async () => {
      await buttonsPage.checkRightClickMessage();
    });
});

test("Check one click message after double click button", async ({ page }) => {
  const demoqaPage = new DemoqaPage(page);
  const buttonsPage = new ButtonsPage(page);
  
   await test.step('Открываем Demoqa', async () => {
    await demoqaPage.openDemoqa();
  });
  await test.step('Открываем страницу Elements', async () => {
     await demoqaPage.goToElementsPage();
  });
  await test.step('Переходим в разде Buttons', async () => {
    await buttonsPage.goToButtonsPage();
  });
  await test.step('Кликаем один раз по RightClickButton', async () => {
    await buttonsPage.clichDynamicClickButton();
  });
  await test.step('Проверяем отображение DinamiclickMessage', async () => {
    await buttonsPage.checkDinamiclickMessage();
  });
});