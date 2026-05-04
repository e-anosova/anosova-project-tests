# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/elements.test.ts >> Check wrong email format
- Location: tests/ui/elements.test.ts:44:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_TIMED_OUT at https://demoqa.com/
Call log:
  - navigating to "https://demoqa.com/", waiting until "load"

```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | import { BasePage } from "./BasePage.js";
  3  | export const BASE_URL = process.env.BASE_URL;
  4  | 
  5  | export class DemoqaPage extends BasePage {
  6  |   readonly elementsButton: Locator;
  7  |   readonly formsButton: Locator;
  8  |   readonly alertsWindowsButton: Locator;
  9  |   readonly widgetsButton: Locator;
  10 |   readonly interactionsButton: Locator;
  11 |   readonly booksButton: Locator;
  12 | 
  13 |   constructor(page: Page) {
  14 |     super(page);
  15 |     this.elementsButton = this.page.getByRole("link", { name: "Elements" });
  16 |     this.formsButton = this.page.getByRole("link", { name: "Forms" });
  17 |     this.alertsWindowsButton = this.page.getByRole("link", {
  18 |       name: "AlertsWindows",
  19 |     });
  20 |     this.widgetsButton = this.page.getByRole("link", { name: "Widgets" });
  21 |     this.interactionsButton = this.page.getByRole("link", {
  22 |       name: "Interactios",
  23 |     });
  24 |     this.booksButton = this.page.getByRole("link", { name: "Books" });
  25 |   }
  26 | 
  27 |   async openDemoqa() {
  28 |     await this.page.setViewportSize({ width: 1920, height: 1080 });
> 29 |     await this.page.goto("/");
     |                     ^ Error: page.goto: net::ERR_TIMED_OUT at https://demoqa.com/
  30 |   }
  31 | 
  32 |   async goToElementsPage() {
  33 |       ;
  34 |     await this.elementsButton.click();
  35 |     await super.checkUrl("elements");
  36 |   }
  37 | 
  38 |   async goToFormsPage() {
  39 |       ;
  40 |     await this.formsButton.click();
  41 |     await super.checkUrl("forms");
  42 |   }
  43 | 
  44 |   async goToAlertsPage() {
  45 |       ;
  46 |     await this.alertsWindowsButton.click();
  47 |     await super.checkUrl("windows");
  48 |   }
  49 | 
  50 |   async goToWidgetsPage() {
  51 |       ;
  52 |     await this.widgetsButton.click();
  53 |     await super.checkUrl("widgets");
  54 |   }
  55 | 
  56 |   async goToInteractionsPage() {
  57 |       ;
  58 |     await this.interactionsButton.click();
  59 |     await super.checkUrl("interactions");
  60 |   }
  61 | 
  62 |   async goToBooksPage() {
  63 |       ;
  64 |     await this.booksButton.click();
  65 |     await super.checkUrl("books");
  66 |   }
  67 | }
  68 | 
```