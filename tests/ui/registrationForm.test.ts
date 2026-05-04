import { expect } from "@playwright/test";
import { test } from "..//..//framework//fixtures//studentFormFixtures";

import { DemoqaPage } from "../../framework/pages/DemoqaPage";
import { FormsPage } from "../../framework/pages/FormsPage";

test("Fill registration form and click Submit", async ({
  page,
  firstName,
  lastName,
  email,
  mobileNumber,
  subjects,
  currentAddress
}) => {
  const demoqaPage = new DemoqaPage(page);
  const formsPage = new FormsPage(page);
  const filePath = 'test-data/example.jpg';

  await test.step('Открываем Demoqa', async () => {
      await demoqaPage.openDemoqa();
    });
    await test.step('Идём в раздел Forms', async () => {
      await demoqaPage.goToFormsPage();
    });
    await test.step('Идём на страницу PracticeForm', async () => {
      await formsPage.gotoPracticeForm();
    });

    await test.step('Заполняем имя', async () => {
      await formsPage.firstNameFill(firstName);
    });
    await test.step('Заполняем фамилию', async () => {
      await formsPage.lastNameFill(lastName);
    });
  await test.step('Заполняем email', async () => {
    await formsPage.emailFill(email);
  });
  await test.step('Выбираем женский гендер', async () => {
    await formsPage.femaleGenderCheck();
  });
  await test.step('Заполняем номер телефона', async () => {
   await formsPage.fillPhoneNumber(mobileNumber);
  });
  await test.step('Вводим дату', async () => {
    await formsPage.selectDateSimple(1,'January',2000);
  });
  await test.step('Заполняем предмет', async () => {
   await formsPage.fillSubject(subjects);
  });
  await test.step('Выбираем хобби Спорт', async () => {
    await formsPage.sportsHobbyCheck();
  });
  await test.step('Прикладываем файл', async () => {
    await formsPage.uploadFile(filePath);
  });
  await test.step('Заполняем фактический адрес', async () => {
    await formsPage.currentAddresslFill(currentAddress);
  });
  await test.step('Выбираем область', async () => {
    await formsPage.selectState('NCR');
  });
  await test.step('Выбираем город', async () => {
    await formsPage.selectCity('Noida');
  });
  await test.step('Нажимаем кнопку подтверждения', async () => {
   await formsPage.clickSubmit();
  });
  await test.step('Проверяем результаты вывода', async () => {
    await formsPage.verifyAllOutputData({
  studentName: firstName + ' ' + lastName,
  studentEmail: email,
  gender: 'Female',
  mobile: mobileNumber,
  dateOfBirth: ('01 January,2000'),
  subjects: subjects,      
  hobbies: 'Sport',     
  address: currentAddress,
  stateAndCity: 'NCR Delhi'
});
  });
  
})

test("Fill only mandatory filds and click Submit", async ({
  page,
  firstName,
  lastName,
  mobileNumber
  
}) => {
  const demoqaPage = new DemoqaPage(page);
  const formsPage = new FormsPage(page);
   const today = new Date();
  const day = today.getDate().toString().padStart(2, '0'); // "04"
  const month = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();
  const currentDate = `${day} ${month},${year}`;

  await test.step('Открываем Demoqa', async () => {
      await demoqaPage.openDemoqa();
    });
    await test.step('Идём в раздел Forms', async () => {
      await demoqaPage.goToFormsPage();
    });
    await test.step('Идём на страницу PracticeForm', async () => {
      await formsPage.gotoPracticeForm();
    });
    await test.step('Заполняем имя', async () => {
      await formsPage.firstNameFill(firstName);
    });
  await test.step('Заполняем фамилию', async () => {
    await formsPage.lastNameFill(lastName);
  });
  await test.step('Выбираем мужской гендер', async () => {
     await formsPage.maleGenderCheck();
  });
 await test.step('Заполняем номер телефона', async () => {
   await formsPage.fillPhoneNumber(mobileNumber);
 });
 await test.step('Нажимаем кнопку подтверждения', async () => {
   await formsPage.clickSubmit();
  });
  await test.step('Проверяем результаты вывода', async () => {
      await formsPage.verifyAllOutputData({
  studentName: firstName + ' ' + lastName,
  studentEmail: " ",
  gender: 'Male',
  mobile: mobileNumber,
  dateOfBirth: currentDate,
  subjects: '',      
  hobbies: ' ',     
  address: ' ',
  stateAndCity: ' '
});
  });

});

test("Close table via Close button", async({
 page,
  firstName,
  lastName,
  mobileNumber
}) => {
  const demoqaPage = new DemoqaPage(page);
  const formsPage = new FormsPage(page);

  await test.step('Открываем Demoqa', async () => {
      await demoqaPage.openDemoqa();
    });
    await test.step('Идём в раздел Forms', async () => {
      await demoqaPage.goToFormsPage();
    });
    await test.step('Идём на страницу PracticeForm', async () => {
      await formsPage.gotoPracticeForm();
    });
    await test.step('описание шага', async () => {
      /* код */
    });
 await test.step('Заполняем имя', async () => {
      await formsPage.firstNameFill(firstName);
    });
  await test.step('Заполняем фамилию', async () => {
    await formsPage.lastNameFill(lastName);
  });
  await test.step('Выбираем мужской гендер', async () => {
     await formsPage.maleGenderCheck();
  });
 await test.step('Заполняем номер телефона', async () => {
   await formsPage.fillPhoneNumber(mobileNumber);
 });
 await test.step('Нажимаем кнопку подтверждения', async () => {
   await formsPage.clickSubmit();
  });
  await test.step('Нажимаем на кнопку Закрыть и проверяем, что модальное окно пропадает', async () => {
    await formsPage.closeModal();
  });
})

test("Fill incorect email", async({
 page,
  firstName,
  lastName,
  mobileNumber,
  invalidEmail
}) => {
  const demoqaPage = new DemoqaPage(page);
  const formsPage = new FormsPage(page);

  await test.step('Открываем Demoqa', async () => {
      await demoqaPage.openDemoqa();
    });
    await test.step('Идём в раздел Forms', async () => {
      await demoqaPage.goToFormsPage();
    });
    await test.step('Идём на страницу PracticeForm', async () => {
      await formsPage.gotoPracticeForm();
    });
  await test.step('Заполняем имя', async () => {
      await formsPage.firstNameFill(firstName);
    });
  await test.step('Заполняем фамилию', async () => {
    await formsPage.lastNameFill(lastName);
  });
  await test.step('Заполняем email в некорректном формате', async () => {
    await formsPage.emailFill(invalidEmail);
  });
  
    await test.step('Выбираем мужской гендер', async () => {
     await formsPage.maleGenderCheck();
  });
 await test.step('Заполняем номер телефона', async () => {
   await formsPage.fillPhoneNumber(mobileNumber);
 });
  await test.step('Нажимаем кнопку подтверждения', async () => {
   await formsPage.clickSubmit();
  });
  await test.step('Проверяем, что поле ввода email подсвечивает ошибку', async () => {
   await formsPage.checkEmailInpitHasError();
  });
  
})

test("Fill incorect mobile number", async({
 page,
  firstName,
  lastName,
  invalidMobileNumber
}) => {
  const demoqaPage = new DemoqaPage(page);
  const formsPage = new FormsPage(page);

  await test.step('Открываем Demoqa', async () => {
      await demoqaPage.openDemoqa();
    });
    await test.step('Идём в раздел Forms', async () => {
      await demoqaPage.goToFormsPage();
    });
    await test.step('Идём на страницу PracticeForm', async () => {
      await formsPage.gotoPracticeForm();
    });
  await test.step('Заполняем имя', async () => {
      await formsPage.firstNameFill(firstName);
    });
  await test.step('Заполняем фамилию', async () => {
    await formsPage.lastNameFill(lastName);
  });
  await test.step('Выбираем мужской гендер', async () => {
     await formsPage.maleGenderCheck();
  });
  await test.step('Заполняем номер телефона в некорректном формате', async () => {
    await formsPage.fillPhoneNumber(invalidMobileNumber);
  });
  await test.step('Нажимаем кнопку подтверждения', async () => {
   await formsPage.clickSubmit();
  });
  await test.step('Проверяем, что поле ввода телефонного номера подсвечивает ошибку', async () => {
    await formsPage.checkNumberInpitHasError();
  });
  
})

test('Verify NCR cities', async({
 page
}) => {
  const demoqaPage = new DemoqaPage(page);
  const formsPage = new FormsPage(page);

   await test.step('Открываем Demoqa', async () => {
      await demoqaPage.openDemoqa();
    });
    await test.step('Идём в раздел Forms', async () => {
      await demoqaPage.goToFormsPage();
    });
    await test.step('Идём на страницу PracticeForm', async () => {
      await formsPage.gotoPracticeForm();
    });
    await test.step('Выбираем штат NCR', async () => {
      await formsPage.selectState('NCR');
    });
    await test.step('Проверяем, что в выбранном штате доступны только допустимые города', async () => {
      const cities = await formsPage.getCityList(); 
  expect(cities).toEqual(['Delhi', 'Gurgaon', 'Noida']);
    });
});
