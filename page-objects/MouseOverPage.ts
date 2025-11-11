import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the 'Mouse Over' page.
 * This class encapsulates locators and actions for this page.
 */
export class MouseOverPage {
  page: Page;
  headerMouseOver: Locator;
  linkClickMe: Locator;
  linkButton: Locator;
  counterClickMe: Locator;
  counterButton: Locator;

  constructor(page: Page) {
    this.page = page;

    /**
     * Locators are selected based on Playwright best practices:
     * - Prefer user-facing attributes over implementation details (like classes or IDs)
     * - Ensure that locators reflect user-visible behavior
     */

    // Locate the page header by its role 'heading' and visible text 'Mouse Over'
    this.headerMouseOver = page.getByRole('heading', { name: 'Mouse Over' });

    // Locate links element by their visible text
    this.linkClickMe = page.getByText('Click me');
    this.linkButton = page.getByText('Link Button');

    // Locate the counter that tracks the number of clicks for the "Click me" link
    this.counterClickMe = page.locator('#clickCount');

    // Locate the counter that tracks the number of clicks for the "Link Button"
    this.counterButton = page.locator('#clickButtonCount');
  }

  /**
   * Extracts a numeric value from the given locator’s text content.
   *
   * @param locator - The locator of the element containing numeric text
   * @returns The numeric value parsed from the text content
   * @throws Error if the text cannot be converted to a number
   */
  async numberContent(locator: Locator): Promise<number> {
    const text = await locator.textContent();
    const value = parseInt(text || '0', 10);
    if (isNaN(value)) {
      throw new Error(`Cannot parse number from text: "${text}"`);
    }
    return value;
  }
}
