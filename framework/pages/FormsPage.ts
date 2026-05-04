import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage.js";

export class FormsPage extends BasePage {
  readonly practiceForm: Locator;
  readonly userForm: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly emailFild: Locator;
  readonly maleRadio: Locator;
  readonly femaleRadio: Locator;
  readonly otherRadio: Locator;
  readonly mobileNumberFild: Locator;
  readonly dateInput: Locator;
  readonly subjectsFild: Locator;
  readonly sportCheckbox: Locator;
  readonly readingCheckbox: Locator;
  readonly musicCheckbox: Locator;
  readonly uploadFileButton: Locator;
  readonly currentAddress: Locator;
  readonly stateSelector: Locator;
  readonly citySelector: Locator;
  readonly modalTable: Locator;
  readonly studentName: Locator;
  readonly studentEmail: Locator;
  readonly gender: Locator;
  readonly mobile: Locator;
  readonly dateOfBirth: Locator;
  readonly hobbies: Locator;
  readonly address: Locator;
  readonly stateAndCity: Locator;
  readonly submitButton: Locator;
  readonly closeButton: Locator;
  readonly prevMonthButton: Locator;
  readonly nextMonthButton: Locator;
  readonly currentMonthYear: Locator;
  readonly monthSelect: Locator;
  readonly yearSelect: Locator;
  readonly days: Locator;
  readonly outputTable: Locator;
  readonly outputStudentName: Locator;
  readonly outputStudentEmail: Locator;
  readonly outputGender: Locator;
  readonly outputMobile: Locator;
  readonly outputDateOfBirth: Locator;
  readonly outputSubjects: Locator;
  readonly outputHobbies: Locator;
  readonly outputPicture: Locator;
  readonly outputAddress: Locator;
  readonly outputStateAndCity: Locator;

  constructor(protected page: Page) {
    super(page);
    this.practiceForm = page.locator('#item-0 a:has-text("Practice Form")');
    this.userForm = page.locator("#userForm");
    this.firstName = page.locator("#firstName");
    this.lastName = page.locator("#lastName");
    this.emailFild = page.locator("#userEmail");
    this.maleRadio = page.locator("#gender-radio-1");
    this.femaleRadio = page.locator("#gender-radio-2");
    this.otherRadio = page.locator("#gender-radio-3");
    this.mobileNumberFild = page.locator("#userNumber");
    this.dateInput = page.locator("#dateOfBirthInput");
    this.subjectsFild = page.locator("#subjectsInput");
    this.sportCheckbox = page.locator("#hobbies-checkbox-1");
    this.readingCheckbox = page.locator("#hobbies-checkbox-2");
    this.musicCheckbox = page.locator("#hobbies-checkbox-3");
    this.uploadFileButton = page.locator("#uploadPicture");
    this.currentAddress = page.locator("#currentAddress");
    this.stateSelector = page.locator("#state");
    this.citySelector = page.locator("#city");
    this.submitButton = page.locator("#submit");
    this.modalTable = page.locator(".table.table-dark.table-striped");
    this.studentName = page.locator('td:has-text("Student Name") + td');
    this.studentEmail = page.locator('td:has-text("Student Email") + td');
    this.gender = page.locator('td:has-text("Gender") + td');
    this.mobile = page.locator('td:has-text("Mobile") + td');
    this.dateOfBirth = page.locator('td:has-text("Date of Birth") + td');
    this.hobbies = page.locator('td:has-text("Hobbies") + td');
    this.address = page.locator('td:has-text("Address") + td');
    this.stateAndCity = page.locator('td:has-text("State and City") + td');
    this.closeButton = page.locator("#closeLargeModal");
    this.prevMonthButton = page.locator(
      ".react-datepicker__navigation--previous",
    );
    this.nextMonthButton = page.locator(".react-datepicker__navigation--next");
    this.currentMonthYear = page.locator(".react-datepicker__current-month");
    this.monthSelect = page.locator(".react-datepicker__month-select");
    this.yearSelect = page.locator(".react-datepicker__year-select");
    this.days = page.locator(
      ".react-datepicker__day:not(.react-datepicker__day--outside-month)",
    );
    this.outputTable = page.locator('.table.table-dark.table-striped');
    this.outputStudentName = page.locator('td:has-text("Student Name") + td');
    this.outputStudentEmail = page.locator('td:has-text("Student Email") + td');
    this.outputGender = page.locator('td:has-text("Gender") + td');
    this.outputMobile = page.locator('td:has-text("Mobile") + td');
    this.outputDateOfBirth = page.locator('td:has-text("Date of Birth") + td');
    this.outputSubjects = page.locator('td:has-text("Subjects") + td');
    this.outputHobbies = page.locator('td:has-text("Hobbies") + td');
    this.outputPicture = page.locator('td:has-text("Picture") + td');
    this.outputAddress = page.locator('td:has-text("Address") + td');
    this.outputStateAndCity = page.locator('td:has-text("State and City") + td');
  }

  async gotoPracticeForm() {
    await this.practiceForm.waitFor({ state: "visible", timeout: 10000 });
     const isVisible = await this.practiceForm.isVisible();
    await this.practiceForm.click();
    await this.page.waitForURL(/.*automation-practice-form/, { timeout: 10000 });
    await expect(this.userForm).toBeVisible;
    await super.checkUrl("automation-practice-form");
  }

  async firstNameFill(firstName: string) {
    await expect(this.firstName).toBeEditable;
    await this.firstName.fill(firstName);
  }

  async lastNameFill(lastName: string) {
    await expect(this.lastName).toBeEditable;
    await this.lastName.fill(lastName);
  }

  async emailFill(email: string) {
    await expect(this.emailFild).toBeEditable;
    await this.emailFild.fill(email);
  }

  async femaleGenderCheck() {
    await this.femaleRadio.check();
  }

    async maleGenderCheck() {
    await this.maleRadio.check();
  }

  async fillPhoneNumber(phoneNumber: string) {
    await expect(this.mobileNumberFild).toBeEditable;
    await this.mobileNumberFild.fill(phoneNumber);
  }

  async selectDateSimple(day: number, month: string, year: number) {
    await this.dateInput.click();
    await this.monthSelect.selectOption(month);
    await this.yearSelect.selectOption(year.toString());
    await this.days.filter({ hasText: new RegExp(`^${day}$`) }).click();
  }

  async fillSubject(subject: string) {
    await expect(this.subjectsFild).toBeEditable;
    await this.subjectsFild.fill(subject);
    //await this.page.click('body');
  }

  async sportsHobbyCheck() {
    await this.sportCheckbox.check();
  }

  async uploadFile(filePath: string) {
    await this.uploadFileButton.setInputFiles(filePath);
  }

  async currentAddresslFill(currentAddress: string) {
    await expect(this.currentAddress).toBeEditable;
    await this.currentAddress.fill(currentAddress);
  }

  async selectState(state: string) {
    await this.stateSelector.click();
    await this.page.getByText(state).click();
  }

   async selectCity(city: string) {
    await this.citySelector.click();
    await this.page.getByText(city).click();
  }

    async clickSubmit() {
    await this.submitButton.click();
  }

  async closeModal() {
    await this.closeButton.click();
    await expect(this.modalTable).toBeHidden();
  }

  async verifyOutputStudentName(expected: string) {
  await expect(this.outputStudentName).toHaveText(expected);
}

async verifyOutputStudentEmail(expected: string) {
  await expect(this.outputStudentEmail).toHaveText(expected);
}

async verifyOutputGender(expected: string) {
  await expect(this.outputGender).toHaveText(expected);
}

async verifyOutputMobile(expected: string) {
  await expect(this.outputMobile).toHaveText(expected);
}

async verifyOutputDateOfBirth(expected: string) {
  await expect(this.outputDateOfBirth).toHaveText(expected);
}

async verifyOutputSubjects(expected: string) {
  await expect(this.outputSubjects).toHaveText(expected);
}

async verifyOutputHobbies(expected: string) {
  await expect(this.outputHobbies).toHaveText(expected);
}

async verifyOutputAddress(expected: string) {
  await expect(this.outputAddress).toHaveText(expected);
}

async verifyOutputStateAndCity(expected: string) {
  await expect(this.outputStateAndCity).toHaveText(expected);
}
  async verifyAllOutputData(data: {
  studentName: string;
  studentEmail: string;
  gender: string;
  mobile: string;
  dateOfBirth: string;
  subjects?: string;
  hobbies?: string;
  address?: string;
  stateAndCity: string;
}) {
  await this.verifyOutputStudentName(data.studentName);
  await this.verifyOutputStudentEmail(data.studentEmail);
  await this.verifyOutputGender(data.gender);
  await this.verifyOutputMobile(data.mobile);
  await this.verifyOutputDateOfBirth(data.dateOfBirth);
  
  if (data.subjects) await this.verifyOutputSubjects(data.subjects);
  if (data.hobbies) await this.verifyOutputHobbies(data.hobbies);
  if (data.address) await this.verifyOutputAddress(data.address);
  
  await this.verifyOutputStateAndCity(data.stateAndCity);
}

async checkEmailInpitHasError() {
    console.log(
      "Проверяем, что поле email невалидное",
    );
    await expect(this.emailFild).toHaveJSProperty('validity.valid', false);
  }

  async checkNumberInpitHasError() {
    console.log(
      "Проверяем, что при неверном формате number поле подсвечиваетя красным",
    );
    await expect(this.mobileNumberFild).toHaveJSProperty('validity.valid', false);
  }

async getCityList() {
  await this.citySelector.click();
  await this.page.waitForTimeout(200);
  const cities = await this.page.locator('[role="option"]').allTextContents();
  await this.page.click('body');
  return cities;
}
}
