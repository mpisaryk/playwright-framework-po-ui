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
     * Returns the ID of the topmost element at the center of the overlapped button
     */
    async getTopElementIdOfOverlappedButton(): Promise<string | null> {
        // Get bounding box of the overlapped button
        const box = await this.overlappedButton.boundingBox();
        if (!box) return null; // safety check

        // Calculate center coordinates
        const centerX = box.x + box.width / 2;
        const centerY = box.y + box.height / 2;

        // Get the element id at the coordinates
        const topElementId = await this.page.evaluate(
            ({ x, y }) => document.elementFromPoint(x, y)?.id ?? null, // <-- convert undefined to null
            { x: centerX, y: centerY },
        );

        return topElementId;
    }

    /**
     * Returns the ID of the Overlapped button
     */
    async getOverlappedButtonId(): Promise<string | null> {
        return await this.overlappedButton.getAttribute('id');
    }
}
