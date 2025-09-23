import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the "Home" page.
 * This class encapsulates locators and actions specific to the home page.
 */
export class HomePage {
    readonly page: Page;
    readonly overlappedElementLink: Locator;
    readonly ajaxDataLink: Locator;
    readonly visibilityLink: Locator;
    readonly dynamicTableLink: Locator;
    readonly sampleAppLink: Locator;
    readonly textInputLink: Locator;
    readonly progressBarLink: Locator;

    constructor(page: Page) {
        this.page = page;

        // Link to "Overlapped Element" page
        this.overlappedElementLink = page.getByRole('link', { name: 'Overlapped Element' });

        // Link to "AJAX Data" page
        this.ajaxDataLink = page.getByRole('link', { name: 'AJAX DATA' });

        // Link to "Visibility" page
        this.visibilityLink = page.getByRole('link', { name: 'Visibility' });

        // Link to "Dynamic Table" page
        this.dynamicTableLink = page.getByRole('link', { name: 'Dynamic Table' });

        // Link to "Sample App" page
        this.sampleAppLink = page.getByRole('link', { name: 'Sample App' });

        // Link to "Text Input" page
        this.textInputLink = page.getByRole('link', { name: 'Text Input' });

        // Link to "Progress Bar" page
        this.progressBarLink = page.getByRole('link', { name: 'Progress Bar' });
    }

    /**
     * Navigate directly to the Home page.
     */
    async goToHomePage() {
        await this.page.goto('/');
    }

    /**
     * Click on the "Overlapped Element" link.
     */
    async clickOverlappedElementLink() {
        await this.overlappedElementLink.click();
    }

    /**
     * Click on the "AJAX Data" link.
     */
    async clickAjaxDataLink() {
        await this.ajaxDataLink.click();
    }

    /**
     * Click on the "Visibility" link.
     */
    async clickVisibilityLink() {
        await this.visibilityLink.click();
    }

    /**
     * Click on the "Dynamic Table" link.
     */
    async clickDynamicTableLink() {
        await this.dynamicTableLink.click();
    }

    /**
     * Click on the "Sample App" link.
     */
    async clickSampleAppLink() {
        await this.sampleAppLink.click();
    }

    /**
     * Click on the "Text Input" link.
     */
    async clickTextInputLink() {
        await this.textInputLink.click();
    }
    
    /**
     * Click on the "Progress Bar" link.
     */
    async clickProgressBarLink() {
        await this.progressBarLink.click();
    }
}
