import { Page } from '@playwright/test';
import { HomePage } from './HomePage';
import { OverlappedElementPage } from './OverlappedElementPage';

export class PageManager {
    private readonly page: Page;
    private readonly homePage: HomePage;
    private readonly overlappedElementPage: OverlappedElementPage;

    constructor(page: Page) {
        this.page = page;
        this.homePage = new HomePage(this.page);
        this.overlappedElementPage = new OverlappedElementPage(this.page);
    }

    onHomePage() {
        return this.homePage;
    }

    onOverlappedElementPage() {
        return this.overlappedElementPage;
    }
}
