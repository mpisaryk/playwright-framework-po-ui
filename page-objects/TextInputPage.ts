import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the 'Text Input' page.
 * This class encapsulates locators and actions for this page.
 */
export class TextInputPage {
  readonly page: Page;
  readonly headerTextInputPage: Locator;
  readonly inputButtonName: Locator;
  readonly buttonWithChangeableName: Locator;

  constructor(page: Page) {
    this.page = page;

    /**
     * Locators are selected based on Playwright best practices (where possible):
     * - Prefer user-facing attributes over implementation details (like classes or IDs)
     * - Ensure that locators reflect user-visible behavior
     */

    // Locate the header by its role 'heading' and visible text 'Text Input'
    this.headerTextInputPage = page.getByRole('heading', { name: 'Text Input' });

    // Locate the input field for the button name using its placeholder text
    this.inputButtonName = page.getByPlaceholder('MyButton');

    // Locate the button with the changeable name using its ID
    this.buttonWithChangeableName = page.locator('#updatingButton');
  }
}
