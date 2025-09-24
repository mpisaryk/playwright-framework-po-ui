import { expect, type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the "Progress Bar" page.
 * This class encapsulates locators and actions for this page.
 */
export class ProgressBarPage {
    readonly page: Page;
    readonly progressBarPageHeader: Locator;
    readonly startButton: Locator;
    readonly stopButton: Locator;
    readonly progressBar: Locator;

    constructor(page: Page) {
        this.page = page;

        /**
         * Locators are selected based on Playwright best practices (where possible):
         * - Prefer user-facing attributes over implementation details (like classes or IDs)
         * - Ensure that locators reflect user-visible behavior
         */

        // Locate the header by its role "heading" and visible text "Progress Bar"
        this.progressBarPageHeader = page.getByRole('heading', { name: 'Progress Bar' });

        // Locate buttons by their role and visible names
        this.startButton = page.getByRole('button', { name: 'Start' });
        this.stopButton = page.getByRole('button', { name: 'Stop' });

        // Locate the progress bar by its ID
        this.progressBar = page.locator('#progressBar');
    }

    /**
     * Waits until the progress bar reaches or exceeds the given value.
     * @param value number - the minimum percentage to wait for
     */
    async waitForProgressToReach(value: number): Promise<void> {
        // Get the element handle of the progress bar
        const handle = await this.progressBar.elementHandle();
        if (!handle) throw new Error('Progress bar element not found');

        // Wait for the progress bar's "aria-valuenow" attribute to reach the desired value
        await this.page.waitForFunction(
            ({ el, desiredValue }) => Number(el.getAttribute('aria-valuenow')) >= desiredValue,
            { el: handle, desiredValue: value }, // pass as a single object to satisfy TypeScript
        );
    }

    /**
     * Get the current numeric value of the progress bar (aria-valuenow)
     * @returns number - current progress value as a number
     */
    async getCurrentProgressValue(): Promise<number> {
        const value = await this.progressBar.getAttribute('aria-valuenow');
        return value ? Number(value) : 0;
    }

    /**
     * Verify that the progress bar stopped close enough to the desired value.
     * @param desiredValue number - the target value (e.g., 75)
     * @param tolerance number - allowed difference
     */
    async expectProgressCloseTo(desiredValue: number, tolerance: number): Promise<void> {
        // Get the current value of the progress bar
        const finalValue: number = await this.getCurrentProgressValue();
        // Verify that the absolute difference between the actual value and the desired target value
        // does not exceed the allowed tolerance.
        expect(Math.abs(finalValue - desiredValue)).toBeLessThanOrEqual(tolerance);
    }
}
