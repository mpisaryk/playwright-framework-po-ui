import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the 'Home' page.
 * This class encapsulates locators and actions specific to the home page.
 */
export class HomePage {
  readonly page: Page;
  readonly linkOverlappedElement: Locator;
  readonly linkAjaxData: Locator;
  readonly linkVisibility: Locator;
  readonly linkDynamicTable: Locator;
  readonly linkSampleApp: Locator;
  readonly linkTextInput: Locator;
  readonly linkProgressBar: Locator;
  readonly linkClassAttribute: Locator;
  readonly linkHiddenLayers: Locator;
  readonly linkLoadDelay: Locator;
  readonly linkClientSideDelay: Locator;
  readonly linkClick: Locator;
  readonly linkScrollbars: Locator;
  readonly linkVerifyText: Locator;
  readonly linkMouseOver: Locator;
  readonly linkShadowDom: Locator;
  readonly linkAlers: Locator;
  readonly linkFileUpload: Locator;
  readonly linkAnimatedButton: Locator;
  readonly linkDisabledInput: Locator;

  constructor(page: Page) {
    this.page = page;

    /**
     * Locators are selected based on Playwright best practices (where possible):
     * - Prefer user-facing attributes over implementation details (like classes or IDs)
     * - Ensure that locators reflect user-visible behavior
     */

    // Link to the 'Overlapped Element' page
    this.linkOverlappedElement = page.getByRole('link', { name: 'Overlapped Element' });

    // Link to the 'AJAX Data' page
    this.linkAjaxData = page.getByRole('link', { name: 'AJAX DATA' });

    // Link to the 'Visibility' page
    this.linkVisibility = page.getByRole('link', { name: 'Visibility' });

    // Link to the 'Dynamic Table' page
    this.linkDynamicTable = page.getByRole('link', { name: 'Dynamic Table' });

    // Link to the 'Sample App' page
    this.linkSampleApp = page.getByRole('link', { name: 'Sample App' });

    // Link to the 'Text Input' page
    this.linkTextInput = page.getByRole('link', { name: 'Text Input' });

    // Link to the 'Progress Bar' page
    this.linkProgressBar = page.getByRole('link', { name: 'Progress Bar' });

    // Link to the 'Class Attribute' page
    this.linkClassAttribute = page.getByRole('link', { name: 'Class Attribute' });

    // Link to the 'Hidden Layers' page
    this.linkHiddenLayers = page.getByRole('link', { name: 'Hidden Layers' });

    // Link to the 'Load Delay' page
    this.linkLoadDelay = page.getByRole('link', { name: 'Load Delay' });

    // Link to the 'Client Side Delay' page
    this.linkClientSideDelay = page.getByRole('link', { name: 'Client Side Delay' });

    // Link to the 'Click' page
    this.linkClick = page.getByRole('link', { name: 'Click' });

    // Link to the 'Scrollbars' page
    this.linkScrollbars = page.getByRole('link', { name: 'Scrollbars' });

    // Link to the 'Verify Text' page
    this.linkVerifyText = page.getByRole('link', { name: 'Verify Text' });

    // Link to the 'Mouse Over' page
    this.linkMouseOver = page.getByRole('link', { name: 'Mouse Over' });

    // Link to the 'Non-Breaking Space' page
    this.linkShadowDom = page.getByRole('link', { name: 'Shadow DOM' });

    // Link to the 'Alerts' page
    this.linkAlers = page.getByRole('link', { name: 'Alerts' });

    // Link to the 'File Upload' page
    this.linkFileUpload = page.getByRole('link', { name: 'File Upload' });

    // Link to the 'Animated Button' page
    this.linkAnimatedButton = page.getByRole('link', { name: 'Animated Button' });

    // Link to the 'Animated Button' page
    this.linkDisabledInput = page.getByRole('link', { name: 'Disabled Input' });
  }

  /**
   * Navigate directly to the Home page.
   */
  async goToHomePage(): Promise<void> {
    await this.page.goto('/');
  }

  /**
   * Open the 'Overlapped Element' page.
   */
  async openOverlappedElementPage(): Promise<void> {
    await this.linkOverlappedElement.click();
  }

  /**
   * Open the 'AJAX Data' page.
   */
  async openAjaxDataPage(): Promise<void> {
    await this.linkAjaxData.click();
  }

  /**
   * Open the 'Visibility' page.
   */
  async openVisibilityPage(): Promise<void> {
    await this.linkVisibility.click();
  }

  /**
   * Open the 'Dynamic Table' page.
   */
  async openDynamicTablePage(): Promise<void> {
    await this.linkDynamicTable.click();
  }

  /**
   * Open the 'Sample App' page.
   */
  async openSampleAppPage(): Promise<void> {
    await this.linkSampleApp.click();
  }

  /**
   * Open the 'Text Input' page.
   */
  async openTextInputPage(): Promise<void> {
    await this.linkTextInput.click();
  }

  /**
   * Open the 'Progress Bar' page.
   */
  async openProgressBarPage(): Promise<void> {
    await this.linkProgressBar.click();
  }

  /**
   * Open the 'Class Attribute' page.
   */
  async openClassAttributePage(): Promise<void> {
    await this.linkClassAttribute.click();
  }

  /**
   * Open the 'Hidden Layers' page.
   */
  async openHiddenLayersPage(): Promise<void> {
    await this.linkHiddenLayers.click();
  }

  /**
   * Open the 'Load Delay' page.
   */
  async openLoadDelayPage(): Promise<void> {
    await this.linkLoadDelay.click();
  }

  /**
   * Open the 'Client Side Delay' page.
   */
  async openClientSideDelayPage(): Promise<void> {
    await this.linkClientSideDelay.click();
  }

  /**
   * Open the 'Click' page.
   */
  async openClickPage(): Promise<void> {
    await this.linkClick.click();
  }

  /**
   * Open the 'Scrollbars' page.
   */
  async openScrollbarsPage(): Promise<void> {
    await this.linkScrollbars.click();
  }

  /**
   * Open the 'Verify Text' page.
   */
  async openVerifyTextPage(): Promise<void> {
    await this.linkVerifyText.click();
  }

  /**
   * Open the 'Mouse Over' page.
   */
  async openMouseOverPage(): Promise<void> {
    await this.linkMouseOver.click();
  }

  /**
   * Open the 'Shadow DOM' page.
   */
  async openShadowDomPage(): Promise<void> {
    await this.linkShadowDom.click();
  }

  /**
   * Open the 'Alerts' page.
   */
  async openAlertsPage(): Promise<void> {
    await this.linkAlers.click();
  }

  /**
   * Open the 'File Upload' page.
   */
  async openFileUploadPage(): Promise<void> {
    await this.linkFileUpload.click();
  }

  /**
   * Open the 'Animated Button' page.
   */
  async openAnimatedButtonPage(): Promise<void> {
    await this.linkAnimatedButton.click();
  }

  /**
   * Open the 'Disabled Input' page.
   */
  async openDisabledInputPage(): Promise<void> {
    await this.linkDisabledInput.click();
  }
}
