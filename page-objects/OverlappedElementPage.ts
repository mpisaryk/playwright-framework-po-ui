import { type Locator, type Page } from '@playwright/test';
import { scrollElementIntoView } from '../helpers/scroll-element-into-view';

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
   * Scrolls the name input field into view and fills it with the provided text.
   *
   * @param playgroundName - The text value to be entered into the name input field.
   * @returns Promise<void> - Resolves when the field is scrolled into view and filled.
   */
  async fillPlaygroundName(playgroundName: string): Promise<void> {
    await scrollElementIntoView(this.inputName, this.page);
    await this.inputName.fill(playgroundName);
  }
}
