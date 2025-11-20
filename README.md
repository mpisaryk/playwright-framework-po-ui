# Playwright-Framework (UI)

This repository contains a **UI Test Automation framework** for the [UI Test Automation Playground](https://github.com/inflectra/ui-test-automation-playground) web application.

The framework is built using **TypeScript + Playwright** and follows the **Page Object pattern** combined with a **Page Manager** for better test structure and maintainability.

## Key features include:

- **Reusable Page Objects** for clear separation of UI components.
- **Page Manager** to efficiently handle navigation and page interactions.
- **Helper utilities** to simplify common actions and assertions.
- Test data generation using **Faker** for dynamic and realistic input.

---

## Project Overview 

In this framework, the following scenarios have been automated:

- Class Attribute
- Hidden Layers
- Load Delay
- AJAX Data 
- Client Side Delay
- Click
- Text Input 
- Scrollbars
- Dynamic Table 
- Verify Text
- Progress Bar 
- Visibility
- Sample App
- Mouse Over  
- Overlapped Element 
- Shadow DOM
- Alerts
- File Upload 
- Animated Button 
- Disabled Input
- Auto Wait

All automated test cases are located in the `tests/` folder.

---

## Project Structure   
```text
project-root/
├── env/                               # Environment variables
│     ├── .env.dev
│     └── .env.prod
├── helpers/                           # Custom helper utilities
│   ├── dialog-handler.ts              # Utility to handle browser dialogs in tests
│   ├── scroll-element-into-view.ts    # Utility to scroll an element into the center of the viewport
│   └── wait-for-element-state.ts      # Utility to wait for a specific state of an element
├── page-objects/                      # Page Object Models
├── test-data/                         # Test data used in automated tests
│   ├── TestData.ts                    # Constants and types for test scenarios
│   └── UploadTextFile.txt             # Sample text file for file upload test cases
├── tests/                             # Automated test cases
├── .gitignore                         # Git ignore rules
├── .prettierrcignore                  # Files and folders ignored by Prettier
├── .prettierrc.cjs                    # Prettier configuration
├── eslint.config.js                   # ESLint configuration
├── LICENSE                            # Project license
├── package-lock.json                  # Dependency lock file
├── package.json                       # Scripts and dependencies
├── playwright.config.ts               # Playwright configuration
├── README.md                          # Instructions
└── tsconfig.json                      # TypeScript configuration
```
---

## How to Run Tests
1. Download the project.  

2. In test project folder run:
```bash
npm install
```
3. To run tests on the [**Production environment**](http://uitestingplayground.com/), use one of the following commands (depending on the mode):
- Headed (visible) mode:

```bash
npm run test:prod:headed
```

- Headless mode:

```bash
npm run test:prod:headless
```

- Headless mode with Allure report generation and opening:

```bash
npm run test:prod:headless:report
```

4. To run tests on the [**Local development environment**](http://localhost:3000):

   4.1 Clone the UI Test Automation Playground repository:

```bash 
  git clone https://github.com/Inflectra/ui-test-automation-playground.git
```

   4.2 Navigate to the UI Test Automation Playground folder and install dependencies:
```bash 
npm install
```

   4.3 Launch the local application:

```bash
  node app.js
```

   4.4 Open a terminal inside the test project folder.
  
   4.5 Use one of the following commands (depending on the mode):

  - Headed (visible) mode:

```bash
npm run test:dev:headed
```

 - Headless mode:

```bash
npm run test:dev:headless
```

 - Headless mode with Allure report generation and opening:

```bash
npm run test:dev:headless:report
```