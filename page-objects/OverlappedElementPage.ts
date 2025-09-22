import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the "Overlapped Element" page.
 * This class encapsulates locators and actions for this page.
 */
export class OverlappedElementPage {
    readonly page: Page;
    readonly overlappedElementHeader: Locator;
    readonly nameInputField: Locator;

    constructor(page: Page) {
        this.page = page;
        // Locate the header element by its role "heading" and visible text "Overlapped Element"
        this.overlappedElementHeader = page.getByRole('heading', { name: 'Overlapped Element' });
        // Locate the input field by its placeholder attribute "Name"
        this.nameInputField = page.getByPlaceholder('Name');
    }

    /**
     * Scrolls the "Name" input field into the center of the viewport.
     * It uses a direct elementHandle and page.evaluate for reliable scrolling.
     */
    async scrollToNameInput() {
        // Get the ElementHandle from the Locator
        const handle = await this.nameInputField.elementHandle();
        // Throw an error if the element is not found (safety check)
        if (!handle) {
            throw new Error('Element not found: nameInputField');
        }
        // Scroll the element into view
        await this.page.evaluate(
            (el) => el.scrollIntoView({ block: 'center', inline: 'center' }),
            handle,
        );
    }
}
