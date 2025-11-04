import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the 'Overlapped Element' page.
 * This class encapsulates locators and actions for this page.
 */
export class OverlappedElementPage {
  readonly page: Page;
  readonly headerOverlappedElementPage: Locator;
  readonly inputName: Locator;

  constructor(page: Page) {
    this.page = page;

    /**
     * Locators are selected based on Playwright best practices (where possible):
     * - Prefer user-facing attributes over implementation details (like classes or IDs)
     * - Ensure that locators reflect user-visible behavior
     */

    // Locate the header by its role 'heading' and visible text 'Overlapped Element'
    this.headerOverlappedElementPage = page.getByRole('heading', {
      name: 'Overlapped Element',
    });

    // Locate the input field by its placeholder 'Name'
    this.inputName = page.getByPlaceholder('Name');
  }

  /**
   * Scrolls the 'Name' input field into the center of the viewport.
   * It uses a direct elementHandle and page.evaluate for reliable scrolling.
   */
  async scrollToNameInput(): Promise<void> {
    // Get the ElementHandle from the Locator
    const handle = await this.inputName.elementHandle();
    // Throw an error if the element is not found (safety check)
    if (!handle) {
      throw new Error('Element not found: nameInputField');
    }
    // Scroll the element into view
    await this.page.evaluate(
      (el) => el.scrollIntoView({ block: 'center', inline: 'center' }),
      handle,
    );
  }
}
