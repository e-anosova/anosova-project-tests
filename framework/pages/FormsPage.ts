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
    console.log("Идём в раздел Practice Form");
    await this.practiceForm.waitFor({ state: "visible", timeout: 10000 });
     const isVisible = await this.practiceForm.isVisible();
    console.log(`Элемент Practice Form видим: ${isVisible}`);
    await this.practiceForm.click();
    await this.page.waitForURL(/.*automation-practice-form/, { timeout: 10000 });
    await expect(this.userForm).toBeVisible;
    await super.checkUrl("automation-practice-form");
  }

  async firstNameFill(firstName: string) {
    console.log("Заполняем First Name");
    await expect(this.firstName).toBeEditable;
    await this.firstName.fill(firstName);
  }

  async lastNameFill(lastName: string) {
    console.log("Заполняем Second Name");
    await expect(this.lastName).toBeEditable;
    await this.lastName.fill(lastName);
  }

  async emailFill(email: string) {
    console.log("Заполняем email");
    await expect(this.emailFild).toBeEditable;
    await this.emailFild.fill(email);
  }

  async femaleGenderCheck() {
    console.log("Выбираем женский гендер");
    await this.femaleRadio.check();
  }

    async maleGenderCheck() {
    console.log("Выбираем мужской гендер");
    await this.maleRadio.check();
  }

  async fillPhoneNumber(phoneNumber: string) {
    console.log("Заполняем номер телефона");
    await expect(this.mobileNumberFild).toBeEditable;
    await this.mobileNumberFild.fill(phoneNumber);
  }

  async selectDateSimple(day: number, month: string, year: number) {
    console.log(`Выбираем дату: ${day} ${month} ${year}`);
    await this.dateInput.click();
    await this.monthSelect.selectOption(month);
    await this.yearSelect.selectOption(year.toString());
    await this.days.filter({ hasText: new RegExp(`^${day}$`) }).click();
  }

  async fillSubject(subject: string) {
    console.log("Заполняем subject");
    await expect(this.subjectsFild).toBeEditable;
    await this.subjectsFild.fill(subject);
    //await this.page.click('body');
  }

  async sportsHobbyCheck() {
    console.log("Выбираем хобби спорт");
    await this.sportCheckbox.check();
  }

  async uploadFile(filePath: string) {
    console.log(`Загружаем файл: ${filePath}`);
    await this.uploadFileButton.setInputFiles(filePath);
  }

  async currentAddresslFill(currentAddress: string) {
    console.log("Заполняем Current Address");
    await expect(this.currentAddress).toBeEditable;
    await this.currentAddress.fill(currentAddress);
  }

  async selectState(state: string) {
    console.log("Выбираем страну");
    await this.stateSelector.click();
    await this.page.getByText(state).click();
  }

   async selectCity(city: string) {
    console.log("Выбираем город");
    await this.citySelector.click();
    await this.page.getByText(city).click();
  }

    async clickSubmit() {
    console.log("Нажимаем Submit");
    await this.submitButton.click();
  }

  async closeModal() {
    console.log("Закрываем модальное окно");
    await this.closeButton.click();
    await expect(this.modalTable).toBeHidden();
  }

  async verifyOutputStudentName(expected: string) {
  console.log(`Проверяем имя студента: ${expected}`);
  await expect(this.outputStudentName).toHaveText(expected);
}

async verifyOutputStudentEmail(expected: string) {
  console.log(`Проверяем email: ${expected}`);
  await expect(this.outputStudentEmail).toHaveText(expected);
}

async verifyOutputGender(expected: string) {
  console.log(`Проверяем пол: ${expected}`);
  await expect(this.outputGender).toHaveText(expected);
}

async verifyOutputMobile(expected: string) {
  console.log(`Проверяем телефон: ${expected}`);
  await expect(this.outputMobile).toHaveText(expected);
}

async verifyOutputDateOfBirth(expected: string) {
  console.log(`Проверяем дату рождения: ${expected}`);
  await expect(this.outputDateOfBirth).toHaveText(expected);
}

async verifyOutputSubjects(expected: string) {
  console.log(`Проверяем предметы: ${expected}`);
  await expect(this.outputSubjects).toHaveText(expected);
}

async verifyOutputHobbies(expected: string) {
  console.log(`Проверяем хобби: ${expected}`);
  await expect(this.outputHobbies).toHaveText(expected);
}

async verifyOutputAddress(expected: string) {
  console.log(`Проверяем адрес: ${expected}`);
  await expect(this.outputAddress).toHaveText(expected);
}

async verifyOutputStateAndCity(expected: string) {
  console.log(`Проверяем штат и город: ${expected}`);
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
  console.log('Проверяем все данные в таблице');
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
}
