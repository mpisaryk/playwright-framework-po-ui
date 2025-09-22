import { Page } from '@playwright/test';
import { HomePage } from './HomePage';
import { OverlappedElementPage } from './OverlappedElementPage';
import { AjaxDataPage } from './AjaxDataPage';
import { VisibilityPage } from './VisibilityPage';

export class PageManager {
    private readonly page: Page;
    private readonly homePage: HomePage;
    private readonly overlappedElementPage: OverlappedElementPage;
    private readonly ajaxDataPage: AjaxDataPage;
    private readonly visibilityPage: VisibilityPage;

    constructor(page: Page) {
        this.page = page;
        this.homePage = new HomePage(this.page);
        this.overlappedElementPage = new OverlappedElementPage(this.page);
        this.ajaxDataPage = new AjaxDataPage(this.page);
        this.visibilityPage = new VisibilityPage(this.page);
    }

    onHomePage() {
        return this.homePage;
    }

    onOverlappedElementPage() {
        return this.overlappedElementPage;
    }

    onAjaxDataPage() {
        return this.ajaxDataPage;
    }

    onVisibilityPage() {
        return this.visibilityPage;
    }
}
