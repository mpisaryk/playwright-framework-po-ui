import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the "Text Input" page.
 * This class encapsulates locators and actions for this page.
 */
export class TextInputPage {
    readonly page: Page;
    readonly textInputPageHeader: Locator;
    readonly buttonNameInput: Locator;
    readonly buttonWithChangeableName: Locator;

    constructor(page: Page) {
        this.page = page;

        // Locate the header element by its role "heading" and visible text "Text Input"
        this.textInputPageHeader = page.getByRole('heading', { name: 'Text Input' });

        // Locate the input field for the button name using its placeholder text
        this.buttonNameInput = page.getByPlaceholder('MyButton');

        // Locate the button with the changeable name using its ID
        this.buttonWithChangeableName = page.locator('#updatingButton');
    }
}
