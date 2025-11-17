import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the 'Disabled Input' page.
 * This class encapsulates locators and actions for this page.
 */
export class DisabledInputPage {
  page: Page;
  headerDisabledInputPage: Locator;
  buttonEnableEditField: Locator;
  inputField: Locator;

  constructor(page: Page) {
    this.page = page;

    /**
     * Locators are selected based on Playwright best practices (where possible):
     * - Prefer user-facing attributes over implementation details (like classes or IDs)
     * - Ensure that locators reflect user-visible behavior
     */

    // Locate the page header by its role 'heading' and visible text 'Disabled Input'
    this.headerDisabledInputPage = page.getByRole('heading', { name: 'Disabled Input' });

    // Locate the button that enables input editing by its role 'button' and visible name 'Enable Edit Field with 5 seconds delay'
    this.buttonEnableEditField = page.getByRole('button', {
      name: 'Enable Edit Field with 5 seconds delay',
    });

    // Locate the input field by its placeholder text
    this.inputField = page.getByPlaceholder('Change me...');
  }

  /**
   * Clicks the button to enable the input field.
   * The input field becomes editable after a short delay.
   */
  async enableEditField(): Promise<void> {
    await this.buttonEnableEditField.click();
  }

  /**
   * Waits until the field becomes editable before filling it.
   * Fills the input field with the provided text.
   *
   * @param text - The text to enter into the input field
   * @throws Error if the input field cannot be found
   */
  async fillInputField(text: string): Promise<void> {
    const handle = await this.inputField.elementHandle();
    if (!handle) {
      throw new Error('Input field not found on the AJAX Data page');
    }
    await handle.waitForElementState('editable');
    await this.inputField.fill(text);
  }
}
