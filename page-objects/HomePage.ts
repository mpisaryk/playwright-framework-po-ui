import { type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly overlappedElementLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.overlappedElementLink = page.getByRole('link', { name: 'Overlapped Element' });
    }

    async goToHomePage() {
        await this.page.goto('/');
    }

    async clickOverlappedElement() {
        await this.overlappedElementLink.click();
    }
}
