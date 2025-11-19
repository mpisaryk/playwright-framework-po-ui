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
   * Clicks the Hiding button.
   */
  async clickHidingButton(): Promise<void> {
    await this.buttonHiding.click();
  }
}
