import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the "Visibility" page.
 * This class encapsulates locators and actions for this page.
 */
export class VisibilityPage {
  readonly page: Page;
  readonly visibilityPageHeader: Locator;
  readonly hideButton: Locator;
  readonly removedButton: Locator;
  readonly zeroWidthButton: Locator;
  readonly overlappedButton: Locator;
  readonly opacity0Button: Locator;
  readonly visibilityHiddenButton: Locator;
  readonly displayNoneButton: Locator;
  readonly offscreenButton: Locator;

  constructor(page: Page) {
    this.page = page;

    /**
     * Locators are selected based on Playwright best practices (where possible):
     * - Prefer user-facing attributes over implementation details (like classes or IDs)
     * - Ensure that locators reflect user-visible behavior
     */

    // Locate the header by its role "heading" and visible text "Visibility"
    this.visibilityPageHeader = page.getByRole('heading', { name: 'Visibility' });

    // Locate the buttons by their role "button" and visible names
    this.hideButton = page.getByRole('button', { name: 'Hide' });
    this.removedButton = page.getByRole('button', { name: 'Removed' });
    this.zeroWidthButton = page.getByRole('button', { name: 'Zero Width' });
    this.overlappedButton = page.getByRole('button', { name: 'Overlapped' });
    this.opacity0Button = page.getByRole('button', { name: 'Opacity 0' });
    this.visibilityHiddenButton = page.getByRole('button', { name: 'Visibility Hidden' });
    this.displayNoneButton = page.getByRole('button', { name: 'Display None' });
    this.offscreenButton = page.getByRole('button', { name: 'Offscreen' });
  }

  /**
   * Returns the IDs of the topmost elements at each corner of the overlapped button.
   * The result is an array of 4 elements (top-left, top-right, bottom-left, bottom-right),
   * each being either the element ID or null if no element is found.
   */
  async getTopElementIdsAtButtonCorners(): Promise<(string | null)[]> {
    // Get the bounding box of the overlapped button
    const box = await this.overlappedButton.boundingBox();
    if (!box) return []; // Return empty array if bounding box is unavailable

    // Define coordinates for the four corners of the button
    const corners = [
      { x: box.x, y: box.y }, // top-left
      { x: box.x + box.width, y: box.y }, // top-right
      { x: box.x, y: box.y + box.height }, // bottom-left
      { x: box.x + box.width, y: box.y + box.height }, // bottom-right
    ];

    // Use Promise.all to get the topmost element ID at each corner
    const cornerElementIds = await Promise.all(
      corners.map((corner) =>
        this.page.evaluate(
          ({ x, y }) => document.elementFromPoint(x, y)?.id ?? null, // Return null if no element
          corner,
        ),
      ),
    );

    return cornerElementIds;
  }

  /**
   * Returns the ID of the Overlapped button
   */
  async getOverlappedButtonId(): Promise<string | null> {
    return await this.overlappedButton.getAttribute('id');
  }
}
