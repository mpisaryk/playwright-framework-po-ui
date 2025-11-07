import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the 'Scrollbars' page.
 * This class encapsulates locators and actions for this page.
 */
export class ScrollbarsPage {
  readonly page: Page;
  readonly headerScrollbarsPage: Locator;
  readonly buttonHiding: Locator;

  constructor(page: Page) {
    this.page = page;

    /**
     * Locators are selected based on Playwright best practices (where possible):
     * - Prefer user-facing attributes over implementation details (like classes or IDs)
     * - Ensure that locators reflect user-visible behavior
     */

    // Locate the header by its role 'heading' and visible text 'Scrollbars'
    this.headerScrollbarsPage = page.getByRole('heading', { name: 'Scrollbars' });

    // Locate the button by its role and visible name
    this.buttonHiding = page.getByRole('button', { name: 'Hiding Button' });
  }

  /**
   * Scrolls the 'Hiding Button' into the center of the viewport.
   * It uses a direct elementHandle and page.evaluate for reliable scrolling.
   */
  async scrollToHidingButton(): Promise<void> {
    // Get the ElementHandle from the Locator
    const handle = await this.buttonHiding.elementHandle();

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
