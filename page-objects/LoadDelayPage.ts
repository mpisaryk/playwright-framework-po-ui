import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the 'Load Delay' page.
 * This class encapsulates locators and actions for this page.
 */
export class LoadDelayPage {
  readonly page: Page;
  readonly headerLoadDelayPage: Locator;
  readonly buttonAppearingAfterDelay: Locator;

  constructor(page: Page) {
    this.page = page;

    /**
     * Locators are selected based on Playwright best practices (where possible):
     * - Prefer user-facing attributes over implementation details (like classes or IDs)
     * - Ensure that locators reflect user-visible behavior
     */

    // Locate the header by its role 'heading' and visible text 'Load Delays'
    this.headerLoadDelayPage = page.getByRole('heading', { name: 'Load Delays' });

    // Locate the button by its role and visible name
    this.buttonAppearingAfterDelay = page.getByRole('button', {
      name: 'Button Appearing After Delay',
    });
  }
}
