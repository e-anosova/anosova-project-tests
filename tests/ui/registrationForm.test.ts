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

  await demoqaPage.openDemoqa();
  await demoqaPage.goToFormsPage();
  await formsPage.gotoPracticeForm();
  await formsPage.firstNameFill(firstName);
  await formsPage.lastNameFill(lastName);
  await formsPage.emailFill(email);
  await formsPage.femaleGenderCheck();
  await formsPage.fillPhoneNumber(mobileNumber);
  await formsPage.selectDateSimple(1,'January',2000);
  await formsPage.fillSubject(subjects);
  await formsPage.sportsHobbyCheck();
  await formsPage.uploadFile(filePath);
  await formsPage.currentAddresslFill(currentAddress);
  await formsPage.selectState('NCR');
  await formsPage.selectCity('Noida');
  await formsPage.clickSubmit();
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
})

test("Fill only mandatory filds and click Submit", async ({
  page,
  firstName,
  lastName,
  mobileNumber
}) => {
  const demoqaPage = new DemoqaPage(page);
  const formsPage = new FormsPage(page);
  const filePath = 'test-data/example.jpg';

  await demoqaPage.openDemoqa();
  await demoqaPage.goToFormsPage();
  await formsPage.gotoPracticeForm();
  await formsPage.firstNameFill(firstName);
  await formsPage.lastNameFill(lastName);
  await formsPage.maleGenderCheck();
  await formsPage.fillPhoneNumber(mobileNumber);
  await formsPage.clickSubmit();
  await formsPage.verifyAllOutputData({
  studentName: firstName + ' ' + lastName,
  studentEmail: " ",
  gender: 'Male',
  mobile: mobileNumber,
  dateOfBirth: ('01 January,2000'),
  subjects: '',      
  hobbies: 'Sport',     
  address: ' ',
  stateAndCity: ' '
});
});