import { Page } from '@playwright/test';
import { HomePage } from './HomePage';
import { OverlappedElementPage } from './OverlappedElementPage';
import { AjaxDataPage } from './AjaxDataPage';
import { VisibilityPage } from './VisibilityPage';
import { DynamicTablePage } from './DynamicTable';
import { SampleAppPage } from './SampleAppPage';
import { TextInputPage } from './TextInputPage';
import { ProgressBarPage } from './ProgressBarPage';

/**
 * PageManager class acts as a central entry point for all Page Objects.
 * Instead of creating page objects directly in tests,
 * tests interact with them via PageManager.
 */
export class PageManager {
    private readonly page: Page;

    // Instances of Page Objects
    private readonly homePage: HomePage;
    private readonly overlappedElementPage: OverlappedElementPage;
    private readonly ajaxDataPage: AjaxDataPage;
    private readonly visibilityPage: VisibilityPage;
    private readonly dynamicTablePage: DynamicTablePage;
    private readonly sampleAppPage: SampleAppPage;
    private readonly textInputPage: TextInputPage;
    private readonly progressBarPage: ProgressBarPage;

    constructor(page: Page) {
        this.page = page;

        // Initialize all Page Objects with the same Playwright Page instance
        this.homePage = new HomePage(this.page);
        this.overlappedElementPage = new OverlappedElementPage(this.page);
        this.ajaxDataPage = new AjaxDataPage(this.page);
        this.visibilityPage = new VisibilityPage(this.page);
        this.dynamicTablePage = new DynamicTablePage(this.page);
        this.sampleAppPage = new SampleAppPage(this.page);
        this.textInputPage = new TextInputPage(this.page);
        this.progressBarPage = new ProgressBarPage(this.page);
    }

    /**
     * Accessor for the HomePage object
     */
    onHomePage(): HomePage {
        return this.homePage;
    }

    /**
     * Accessor for the OverlappedElementPage object
     */
    onOverlappedElementPage(): OverlappedElementPage {
        return this.overlappedElementPage;
    }

    /**
     * Accessor for the AjaxDataPage object
     */
    onAjaxDataPage(): AjaxDataPage {
        return this.ajaxDataPage;
    }

    /**
     * Accessor for the VisibilityPage object
     */
    onVisibilityPage(): VisibilityPage {
        return this.visibilityPage;
    }

    /**
     * Accessor for the DynamicTablePage object
     */
    onDynamicTablePage(): DynamicTablePage {
        return this.dynamicTablePage;
    }

    /**
     * Accessor for the SampleAppPage object
     */
    onSampleAppPage(): SampleAppPage {
        return this.sampleAppPage;
    }

    /**
     * Accessor for the TextInputPage object
     */
    onTextInputPage(): TextInputPage {
        return this.textInputPage;
    }

    /**
     * Accessor for the ProgressBarPage object
     */
    onProgressBarPage(): ProgressBarPage {
        return this.progressBarPage;
    }
}
