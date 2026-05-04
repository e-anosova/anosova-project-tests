# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/registrationForm.test.ts >> Close table via Close button
- Location: tests/ui/registrationForm.test.ts:85:1

# Error details

```
Error: expect(locator).toBeHidden() failed

Locator:  locator('.table.table-dark.table-striped')
Expected: hidden
Received: visible
Timeout:  5000ms

Call log:
  - Expect "toBeHidden" with timeout 5000ms
  - waiting for locator('.table.table-dark.table-striped')
    9 × locator resolved to <table class="table table-dark table-striped table-bordered table-hover">…</table>
      - unexpected value "visible"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - link [ref=e4] [cursor=pointer]:
        - /url: https://demoqa.com
        - img [ref=e5]
    - generic [ref=e8]:
      - generic [ref=e11]:
        - generic [ref=e14] [cursor=pointer]:
          - generic [ref=e15]:
            - img [ref=e17]
            - text: Elements
          - img [ref=e22]
        - generic [ref=e24]:
          - generic [ref=e26] [cursor=pointer]:
            - generic [ref=e27]:
              - img [ref=e29]
              - text: Forms
            - img [ref=e35]
          - list [ref=e38]:
            - listitem [ref=e39] [cursor=pointer]:
              - link "Practice Form" [ref=e40]:
                - /url: /automation-practice-form
                - img [ref=e41]
                - text: Practice Form
        - generic [ref=e45] [cursor=pointer]:
          - generic [ref=e46]:
            - img [ref=e48]
            - text: Alerts, Frame & Windows
          - img [ref=e53]
        - generic [ref=e57] [cursor=pointer]:
          - generic [ref=e58]:
            - img [ref=e60]
            - text: Widgets
          - img [ref=e66]
        - generic [ref=e70] [cursor=pointer]:
          - generic [ref=e71]:
            - img [ref=e73]
            - text: Interactions
          - img [ref=e78]
        - generic [ref=e82] [cursor=pointer]:
          - generic [ref=e83]:
            - img [ref=e85]
            - text: Book Store Application
          - img [ref=e90]
      - generic [ref=e93]:
        - heading "Practice Form" [level=1] [ref=e94]
        - heading "Student Registration Form" [level=5] [ref=e95]
        - generic [ref=e96]:
          - generic [ref=e97]:
            - generic [ref=e99]: Name
            - textbox "First Name" [ref=e101]: Kenton
            - textbox "Last Name" [ref=e103]: Lowe
          - generic [ref=e104]:
            - generic [ref=e106]: Email
            - textbox "name@example.com" [ref=e108]
          - generic [ref=e109]:
            - generic [ref=e110]: Gender
            - generic [ref=e111]:
              - generic [ref=e112]:
                - radio "Male" [checked] [ref=e113]
                - generic [ref=e114]: Male
              - generic [ref=e115]:
                - radio "Female" [ref=e116]
                - generic [ref=e117]: Female
              - generic [ref=e118]:
                - radio "Other" [ref=e119]
                - generic [ref=e120]: Other
          - generic [ref=e121]:
            - generic [ref=e123]: Mobile(10 Digits)
            - textbox "Mobile Number" [ref=e125]: "6184396294"
          - generic [ref=e126]:
            - generic [ref=e128]: Date of Birth
            - textbox [ref=e132]: 04 May 2026
          - generic [ref=e133]:
            - generic [ref=e135]: Subjects
            - generic [ref=e137]:
              - log [ref=e139]
              - combobox [ref=e143]
          - generic [ref=e146]:
            - generic [ref=e148]: Hobbies
            - generic [ref=e149]:
              - generic [ref=e150]:
                - checkbox "Sports" [ref=e151]
                - generic [ref=e152]: Sports
              - generic [ref=e153]:
                - checkbox "Reading" [ref=e154]
                - generic [ref=e155]: Reading
              - generic [ref=e156]:
                - checkbox "Music" [ref=e157]
                - generic [ref=e158]: Music
          - generic [ref=e159]:
            - generic [ref=e161]: Picture
            - button "Choose File" [ref=e163] [cursor=pointer]
          - generic [ref=e164]:
            - generic [ref=e166]: Current Address
            - textbox "Current Address" [ref=e168]
          - generic [ref=e169]:
            - generic [ref=e171]: State and City
            - generic [ref=e173]:
              - log [ref=e175]
              - generic [ref=e176]:
                - generic [ref=e177]:
                  - generic [ref=e178]: Select State
                  - combobox [ref=e180]
                - img [ref=e184]
            - generic [ref=e186]:
              - generic:
                - log
                - generic:
                  - generic:
                    - generic: Select City
                  - generic:
                    - generic:
                      - img
          - button "Submit" [ref=e189] [cursor=pointer]
    - contentinfo [ref=e196]:
      - generic [ref=e197]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
  - dialog "Thanks for submitting the form" [ref=e199]:
    - generic [ref=e200]:
      - generic [ref=e202]: Thanks for submitting the form
      - table [ref=e205]:
        - rowgroup [ref=e206]:
          - row "Label Values" [ref=e207]:
            - columnheader "Label" [ref=e208]
            - columnheader "Values" [ref=e209]
        - rowgroup [ref=e210]:
          - row "Student Name Kenton Lowe" [ref=e211]:
            - cell "Student Name" [ref=e212]
            - cell "Kenton Lowe" [ref=e213]
          - row "Student Email" [ref=e214]:
            - cell "Student Email" [ref=e215]
            - cell [ref=e216]
          - row "Gender Male" [ref=e217]:
            - cell "Gender" [ref=e218]
            - cell "Male" [ref=e219]
          - row "Mobile 6184396294" [ref=e220]:
            - cell "Mobile" [ref=e221]
            - cell "6184396294" [ref=e222]
          - row "Date of Birth 04 May,2026" [ref=e223]:
            - cell "Date of Birth" [ref=e224]
            - cell "04 May,2026" [ref=e225]
          - row "Subjects" [ref=e226]:
            - cell "Subjects" [ref=e227]
            - cell [ref=e228]
          - row "Hobbies" [ref=e229]:
            - cell "Hobbies" [ref=e230]
            - cell [ref=e231]
          - row "Picture" [ref=e232]:
            - cell "Picture" [ref=e233]
            - cell [ref=e234]
          - row "Address" [ref=e235]:
            - cell "Address" [ref=e236]
            - cell [ref=e237]
          - row "State and City" [ref=e238]:
            - cell "State and City" [ref=e239]
            - cell [ref=e240]
      - button "Close" [active] [ref=e242] [cursor=pointer]
```

# Test source

```ts
  102 |     this.outputAddress = page.locator('td:has-text("Address") + td');
  103 |     this.outputStateAndCity = page.locator('td:has-text("State and City") + td');
  104 |   }
  105 | 
  106 |   async gotoPracticeForm() {
  107 |       ;
  108 |     await this.practiceForm.waitFor({ state: "visible", timeout: 10000 });
  109 |      const isVisible = await this.practiceForm.isVisible();
  110 |       ;
  111 |     await this.practiceForm.click();
  112 |     await this.page.waitForURL(/.*automation-practice-form/, { timeout: 10000 });
  113 |     await expect(this.userForm).toBeVisible;
  114 |     await super.checkUrl("automation-practice-form");
  115 |   }
  116 | 
  117 |   async firstNameFill(firstName: string) {
  118 |       ;
  119 |     await expect(this.firstName).toBeEditable;
  120 |     await this.firstName.fill(firstName);
  121 |   }
  122 | 
  123 |   async lastNameFill(lastName: string) {
  124 |       ;
  125 |     await expect(this.lastName).toBeEditable;
  126 |     await this.lastName.fill(lastName);
  127 |   }
  128 | 
  129 |   async emailFill(email: string) {
  130 |       ;
  131 |     await expect(this.emailFild).toBeEditable;
  132 |     await this.emailFild.fill(email);
  133 |   }
  134 | 
  135 |   async femaleGenderCheck() {
  136 |       ;
  137 |     await this.femaleRadio.check();
  138 |   }
  139 | 
  140 |     async maleGenderCheck() {
  141 |       ;
  142 |     await this.maleRadio.check();
  143 |   }
  144 | 
  145 |   async fillPhoneNumber(phoneNumber: string) {
  146 |       ;
  147 |     await expect(this.mobileNumberFild).toBeEditable;
  148 |     await this.mobileNumberFild.fill(phoneNumber);
  149 |   }
  150 | 
  151 |   async selectDateSimple(day: number, month: string, year: number) {
  152 |       ;
  153 |     await this.dateInput.click();
  154 |     await this.monthSelect.selectOption(month);
  155 |     await this.yearSelect.selectOption(year.toString());
  156 |     await this.days.filter({ hasText: new RegExp(`^${day}$`) }).click();
  157 |   }
  158 | 
  159 |   async fillSubject(subject: string) {
  160 |       ;
  161 |     await expect(this.subjectsFild).toBeEditable;
  162 |     await this.subjectsFild.fill(subject);
  163 |     //await this.page.click('body');
  164 |   }
  165 | 
  166 |   async sportsHobbyCheck() {
  167 |       ;
  168 |     await this.sportCheckbox.check();
  169 |   }
  170 | 
  171 |   async uploadFile(filePath: string) {
  172 |       ;
  173 |     await this.uploadFileButton.setInputFiles(filePath);
  174 |   }
  175 | 
  176 |   async currentAddresslFill(currentAddress: string) {
  177 |       ;
  178 |     await expect(this.currentAddress).toBeEditable;
  179 |     await this.currentAddress.fill(currentAddress);
  180 |   }
  181 | 
  182 |   async selectState(state: string) {
  183 |       ;
  184 |     await this.stateSelector.click();
  185 |     await this.page.getByText(state).click();
  186 |   }
  187 | 
  188 |    async selectCity(city: string) {
  189 |       ;
  190 |     await this.citySelector.click();
  191 |     await this.page.getByText(city).click();
  192 |   }
  193 | 
  194 |     async clickSubmit() {
  195 |       ;
  196 |     await this.submitButton.click();
  197 |   }
  198 | 
  199 |   async closeModal() {
  200 |       ;
  201 |     await this.closeButton.click();
> 202 |     await expect(this.modalTable).toBeHidden();
      |                                   ^ Error: expect(locator).toBeHidden() failed
  203 |   }
  204 | 
  205 |   async verifyOutputStudentName(expected: string) {
  206 |     ;
  207 |   await expect(this.outputStudentName).toHaveText(expected);
  208 | }
  209 | 
  210 | async verifyOutputStudentEmail(expected: string) {
  211 |     ;
  212 |   await expect(this.outputStudentEmail).toHaveText(expected);
  213 | }
  214 | 
  215 | async verifyOutputGender(expected: string) {
  216 |     ;
  217 |   await expect(this.outputGender).toHaveText(expected);
  218 | }
  219 | 
  220 | async verifyOutputMobile(expected: string) {
  221 |     ;
  222 |   await expect(this.outputMobile).toHaveText(expected);
  223 | }
  224 | 
  225 | async verifyOutputDateOfBirth(expected: string) {
  226 |     ;
  227 |   await expect(this.outputDateOfBirth).toHaveText(expected);
  228 | }
  229 | 
  230 | async verifyOutputSubjects(expected: string) {
  231 |     ;
  232 |   await expect(this.outputSubjects).toHaveText(expected);
  233 | }
  234 | 
  235 | async verifyOutputHobbies(expected: string) {
  236 |     ;
  237 |   await expect(this.outputHobbies).toHaveText(expected);
  238 | }
  239 | 
  240 | async verifyOutputAddress(expected: string) {
  241 |     ;
  242 |   await expect(this.outputAddress).toHaveText(expected);
  243 | }
  244 | 
  245 | async verifyOutputStateAndCity(expected: string) {
  246 |     ;
  247 |   await expect(this.outputStateAndCity).toHaveText(expected);
  248 | }
  249 |   async verifyAllOutputData(data: {
  250 |   studentName: string;
  251 |   studentEmail: string;
  252 |   gender: string;
  253 |   mobile: string;
  254 |   dateOfBirth: string;
  255 |   subjects?: string;
  256 |   hobbies?: string;
  257 |   address?: string;
  258 |   stateAndCity: string;
  259 | }) {
  260 |     ;
  261 |   await this.verifyOutputStudentName(data.studentName);
  262 |   await this.verifyOutputStudentEmail(data.studentEmail);
  263 |   await this.verifyOutputGender(data.gender);
  264 |   await this.verifyOutputMobile(data.mobile);
  265 |   await this.verifyOutputDateOfBirth(data.dateOfBirth);
  266 |   
  267 |   if (data.subjects) await this.verifyOutputSubjects(data.subjects);
  268 |   if (data.hobbies) await this.verifyOutputHobbies(data.hobbies);
  269 |   if (data.address) await this.verifyOutputAddress(data.address);
  270 |   
  271 |   await this.verifyOutputStateAndCity(data.stateAndCity);
  272 | }
  273 | 
  274 | async checkEmailInpitHasError() {
  275 |     console.log(
  276 |       "Проверяем, что поле email невалидное",
  277 |     );
  278 |     await expect(this.emailFild).toHaveJSProperty('validity.valid', false);
  279 |   }
  280 | 
  281 |   async checkNumberInpitHasError() {
  282 |     console.log(
  283 |       "Проверяем, что при неверном формате number поле подсвечиваетя красным",
  284 |     );
  285 |     await expect(this.mobileNumberFild).toHaveJSProperty('validity.valid', false);
  286 |   }
  287 | 
  288 | async getCityList() {
  289 |   await this.citySelector.click();
  290 |   await this.page.waitForTimeout(200);
  291 |   const cities = await this.page.locator('[role="option"]').allTextContents();
  292 |   await this.page.click('body');
  293 |   return cities;
  294 | }
  295 | }
  296 | 
```