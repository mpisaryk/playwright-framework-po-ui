import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the 'Click' page.
 * This class encapsulates locators and actions for this page.
 */
export class ClickPage {
  readonly page: Page;
  readonly headerLinkPage: Locator;
  readonly buttonIgnoringDomClickEvent: Locator;

  constructor(page: Page) {
    this.page = page;

    /**
     * Locators are selected based on Playwright best practices (where possible):
     * - Prefer user-facing attributes over implementation details (like classes or IDs)
     * - Ensure that locators reflect user-visible behavior
     */

    // Locate the header by its role 'heading' and visible text 'Click'
    this.headerLinkPage = page.getByRole('heading', { name: 'Click' });

    // Locate the button by its visible name 'Button That Ignores DOM Click Event'
    this.buttonIgnoringDomClickEvent = page.getByRole('button', {
      name: 'Button That Ignores DOM Click Event',
    });
  }

  /**
   * Get the center coordinates of the button that ignores standard DOM click events.
   * @returns Object with x and y coordinates, or null if bounding box is unavailable
   */
  async getButtonCenter(): Promise<{ x: number; y: number } | null> {
    // Get the bounding box of the button
    const box = await this.buttonIgnoringDomClickEvent.boundingBox();
    if (!box) return null; // Return null if bounding box is unavailable

    // Calculate the center coordinates of the button
    const centerCoordinates = {
      x: box.x + box.width / 2,
      y: box.y + box.height / 2,
    };

    return centerCoordinates;
  }

  /**
   * Get the current background color of the button.
   * @returns Background color as a string (e.g., 'rgb(255, 0, 0)')
   */
  async getButtonColor(): Promise<string> {
    const buttonColor = await this.buttonIgnoringDomClickEvent.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });
    return buttonColor;
  }
}
