import { type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly overlappedElementLink: Locator;
    readonly ajaxDataLink: Locator;
    readonly visibilityLink: Locator;
    readonly dynamicTableLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.overlappedElementLink = page.getByRole('link', { name: 'Overlapped Element' });
        this.ajaxDataLink = page.getByRole('link', { name: 'AJAX DATA' });
        this.visibilityLink = page.getByRole('link', { name: 'Visibility' });
        this.dynamicTableLink = page.getByRole('link', { name: 'Dynamic Table' });
    }

    async goToHomePage() {
        await this.page.goto('/');
    }

    async clickOverlappedElementLink() {
        await this.overlappedElementLink.click();
    }

    async clickAjaxDataLink() {
        await this.ajaxDataLink.click();
    }

    async clickVisibilityLink() {
        await this.visibilityLink.click();
    }

    async clickDynamicTableLink() {
        await this.dynamicTableLink.click();
    }
}
