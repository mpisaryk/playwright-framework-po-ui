import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the 'Shadow Dom' page.
 * This class encapsulates locators and actions for this page.
 */
export class ShadowDomPage {
  page: Page;
  headerShadowDom: Locator;
  buttonGUIDGenerator: Locator;
  buttonCopyClipbboard: Locator;
  fieldGUID: Locator;

  constructor(page: Page) {
    this.page = page;

    /**
     * Locators are selected based on Playwright best practices (where possible):
     * - Prefer user-facing attributes over implementation details (like classes or IDs)
     * - Ensure that locators reflect user-visible behavior
     */

    // Locate the header by its role 'heading' and visible text 'Shadow DOM'
    this.headerShadowDom = page.getByRole('heading', { name: 'Shadow DOM' });

    // Locate the button that generates a GUID
    this.buttonGUIDGenerator = page.locator('#buttonGenerate');

    // Locate the button that copies the GUID to the clipboard
    this.buttonCopyClipbboard = page.locator('#buttonCopy');

    // Locate the input field where the GUID value is displayed
    this.fieldGUID = page.locator('#editField');
  }

  /**
   * Clicks the 'Generate' button.
   */
  async generateGUID(): Promise<void> {
    await this.buttonGUIDGenerator.click();
  }

  /**
   * Clicks the 'Copy to clipboard' button.
   */
  async copyGUID(): Promise<void> {
    await this.buttonCopyClipbboard.click();
  }

  /**
   * Reads the current text value from the system clipboard.
   *
   * @returns The text currently in the clipboard, or a message if the Clipboard API is unavailable
   */
  async getClipboardGUID(): Promise<string> {
    const clipboardText = await this.page.evaluate(async () => {
      if (navigator.clipboard) {
        return await navigator.clipboard.readText();
      }
      return 'Clipboard API not available';
    });

    return clipboardText;
  }
}
