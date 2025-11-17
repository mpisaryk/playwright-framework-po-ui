# Playwright UI Tests Examples

This repository contains a **UI Test Automation solution** for the [UI Test Automation Playground](https://github.com/inflectra/ui-test-automation-playground) web application.

The solution is implemented using **TypeScript + Playwright**.

---

## Project Overview 

In this solution, the following scenarios have been automated:

- Overlapped Element  
- AJAX Data 
- Animated Button 
- Visibility  
- Dynamic Table  
- Sample App  
- Text Input  
- Progress Bar  
- Class Attribute
- Hidden Layers
- Load Delay
- Client Side Delay
- Click
- Scrollbars
- Verify Text
- Mouse Over
- Shadow DOM
- Alerts
- File Upload
- Disabled Input

All automated test cases are located in the `tests/` folder.

---

## Project Structure  
```text
project-root/
├── tests/                # Tests folder
├── page-objects/         # Page Object Models
├── env/                  # .env.dev, .env.prod
├── test-data/            # Test data used in automated tests
├── utils/                # Core utilities
├── playwright.config.ts  # Playwright configuration
├── package.json          # Scripts and dependencies
├── package-lock.json
├── README.md             # Instructions
```
---

## How to Run Tests
1. Extract the archive containing the test project.  

2. In test project folder run::
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