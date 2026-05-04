# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/registrationForm.test.ts >> Fill registration form and click Submit
- Location: tests/ui/registrationForm.test.ts:7:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('td:has-text("Subjects") + td')
Expected: "demulceo"
Received: ""
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('td:has-text("Subjects") + td')
    9 × locator resolved to <td></td>
      - unexpected value ""

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
            - textbox "First Name" [ref=e101]: Caesar
            - textbox "Last Name" [ref=e103]: Hagenes
          - generic [ref=e104]:
            - generic [ref=e106]: Email
            - textbox "name@example.com" [ref=e108]: Kari.Ondricka16@yahoo.com
          - generic [ref=e109]:
            - generic [ref=e110]: Gender
            - generic [ref=e111]:
              - generic [ref=e112]:
                - radio "Male" [ref=e113]
                - generic [ref=e114]: Male
              - generic [ref=e115]:
                - radio "Female" [checked] [ref=e116]
                - generic [ref=e117]: Female
              - generic [ref=e118]:
                - radio "Other" [ref=e119]
                - generic [ref=e120]: Other
          - generic [ref=e121]:
            - generic [ref=e123]: Mobile(10 Digits)
            - textbox "Mobile Number" [ref=e125]: "8267103598"
          - generic [ref=e126]:
            - generic [ref=e128]: Date of Birth
            - textbox [ref=e132]: 01 Jan 2000
          - generic [ref=e133]:
            - generic [ref=e135]: Subjects
            - generic [ref=e137]:
              - log [ref=e139]
              - combobox [ref=e143]
          - generic [ref=e146]:
            - generic [ref=e148]: Hobbies
            - generic [ref=e149]:
              - generic [ref=e150]:
                - checkbox "Sports" [checked] [ref=e151]
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
            - textbox "Current Address" [ref=e168]: 4432 Schiller View
          - generic [ref=e169]:
            - generic [ref=e171]: State and City
            - generic [ref=e173]:
              - log [ref=e175]
              - generic [ref=e176]:
                - generic [ref=e177]:
                  - generic [ref=e178]: NCR
                  - combobox [ref=e180]
                - img [ref=e184]
            - generic [ref=e187]:
              - log [ref=e189]
              - generic [ref=e190]:
                - generic [ref=e191]:
                  - generic [ref=e192]: Noida
                  - combobox [ref=e194]
                - img [ref=e198]
          - button "Submit" [ref=e202] [cursor=pointer]
    - contentinfo [ref=e209]:
      - generic [ref=e210]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
  - dialog "Thanks for submitting the form" [active] [ref=e212]:
    - generic [ref=e213]:
      - generic [ref=e215]: Thanks for submitting the form
      - table [ref=e218]:
        - rowgroup [ref=e219]:
          - row "Label Values" [ref=e220]:
            - columnheader "Label" [ref=e221]
            - columnheader "Values" [ref=e222]
        - rowgroup [ref=e223]:
          - row "Student Name Caesar Hagenes" [ref=e224]:
            - cell "Student Name" [ref=e225]
            - cell "Caesar Hagenes" [ref=e226]
          - row "Student Email Kari.Ondricka16@yahoo.com" [ref=e227]:
            - cell "Student Email" [ref=e228]
            - cell "Kari.Ondricka16@yahoo.com" [ref=e229]
          - row "Gender Female" [ref=e230]:
            - cell "Gender" [ref=e231]
            - cell "Female" [ref=e232]
          - row "Mobile 8267103598" [ref=e233]:
            - cell "Mobile" [ref=e234]
            - cell "8267103598" [ref=e235]
          - row "Date of Birth 01 January,2000" [ref=e236]:
            - cell "Date of Birth" [ref=e237]
            - cell "01 January,2000" [ref=e238]
          - row "Subjects" [ref=e239]:
            - cell "Subjects" [ref=e240]
            - cell [ref=e241]
          - row "Hobbies Sports" [ref=e242]:
            - cell "Hobbies" [ref=e243]
            - cell "Sports" [ref=e244]
          - row "Picture example.jpg" [ref=e245]:
            - cell "Picture" [ref=e246]
            - cell "example.jpg" [ref=e247]
          - row "Address 4432 Schiller View" [ref=e248]:
            - cell "Address" [ref=e249]
            - cell "4432 Schiller View" [ref=e250]
          - row "State and City NCR Noida" [ref=e251]:
            - cell "State and City" [ref=e252]
            - cell "NCR Noida" [ref=e253]
      - button "Close" [ref=e255] [cursor=pointer]
```

# Test source

```ts
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
  202 |     await expect(this.modalTable).toBeHidden();
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
> 232 |   await expect(this.outputSubjects).toHaveText(expected);
      |                                     ^ Error: expect(locator).toHaveText(expected) failed
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