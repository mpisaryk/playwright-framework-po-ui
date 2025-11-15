import { type Locator, type Page, expect } from '@playwright/test';

/**
 * Page Object for the 'Hidden Layers' page.
 * This class encapsulates locators and actions for this page.
 */
export class HiddenLayersPage {
  readonly page: Page;
  readonly buttonGreen: Locator;
  readonly headerHiddenLayersPage: Locator;

  constructor(page: Page) {
    this.page = page;
    /**
     * Locators are selected based on Playwright best practices:
     * - Prefer user-facing attributes over implementation details (like classes or IDs)
     * - Ensure that locators reflect user-visible behavior
     */

    // Locate the green button by its ID 'greenButton'
    this.buttonGreen = page.locator('#greenButton');

    // Locate the page header by its role 'heading' and visible text 'Hidden Layers'
    this.headerHiddenLayersPage = page.getByRole('heading', { name: 'Hidden Layers' });
  }

  /**
   * Clicks the green button.
   */
  async clickGreenButton(): Promise<void> {
    await this.buttonGreen.click();
  }

  /**
   * Attempts to click the green button and expects the click to fail,
   * e.g., when the button is covered by another element.
   */
  async expectGreenButtonClickToFail(): Promise<void> {
    await expect(async () => {
      await this.buttonGreen.click({ timeout: 1000 });
    }).rejects.toThrow();
  }
}
