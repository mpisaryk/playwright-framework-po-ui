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

  /**
   * Focuses the input field where the new button name is entered.
   */
  async focusButtonNameInput(): Promise<void> {
    await this.inputButtonName.click();
  }

  /**
   * Types a new button name into the input field.
   * @param name string - the name to set for the button
   */
  async typeButtonName(name: string): Promise<void> {
    await this.inputButtonName.fill(name);
  }

  /**
   * Clicks the button to apply and update its displayed name.
   */
  async applyButtonName(): Promise<void> {
    await this.buttonWithChangeableName.click();
  }

  /**
   * Combines all steps to update the button name in a single method:
   * @param name string - the new button name
   */
  async updateButtonName(name: string): Promise<void> {
    await this.focusButtonNameInput();
    await this.typeButtonName(name);
    await this.applyButtonName();
  }
}
