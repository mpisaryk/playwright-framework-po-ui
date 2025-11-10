import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the 'Verify Text' page.
 * This class encapsulates locators and actions for this page.
 */
export class VerifyTextPage {
  readonly page: Page;
  readonly headerVerifyText: Locator;
  readonly labelWelcomeText: Locator;

  constructor(page: Page) {
    this.page = page;

    /**
     * Locators are selected based on Playwright best practices (where possible):
     * - Prefer user-facing attributes over implementation details (like classes or IDs)
     * - Ensure that locators reflect user-visible behavior
     */

    // Locate the header by its role 'heading' and visible text 'Verify Text'
    this.headerVerifyText = page.getByRole('heading', { name: 'Verify Text' });

    // Locate the label with the text
    this.labelWelcomeText = page.locator('.badge-secondary', { hasText: 'Welcome UserName!' });
  }
}
