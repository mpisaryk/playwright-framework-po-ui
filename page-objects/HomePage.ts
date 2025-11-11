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
  }

  /**
   * Navigate directly to the Home page.
   */
  async goToHomePage(): Promise<void> {
    await this.page.goto('/');
  }

  /**
   * Click on the 'Overlapped Element' link.
   */
  async clickOverlappedElementLink(): Promise<void> {
    await this.linkOverlappedElement.click();
  }

  /**
   * Click on the 'AJAX Data' link.
   */
  async clickAjaxDataLink(): Promise<void> {
    await this.linkAjaxData.click();
  }

  /**
   * Click on the 'Visibility' link.
   */
  async clickVisibilityLink(): Promise<void> {
    await this.linkVisibility.click();
  }

  /**
   * Click on the 'Dynamic Table' link.
   */
  async clickDynamicTableLink(): Promise<void> {
    await this.linkDynamicTable.click();
  }

  /**
   * Click on the 'Sample App' link.
   */
  async clickSampleAppLink(): Promise<void> {
    await this.linkSampleApp.click();
  }

  /**
   * Click on the 'Text Input' link.
   */
  async clickTextInputLink(): Promise<void> {
    await this.linkTextInput.click();
  }

  /**
   * Click on the 'Progress Bar' link.
   */
  async clickProgressBarLink(): Promise<void> {
    await this.linkProgressBar.click();
  }

  /**
   * Click on the 'Class Attribute' link.
   */
  async clickClassAttributeLink(): Promise<void> {
    await this.linkClassAttribute.click();
  }

  /**
   * Click on the 'Hidden Layers' link.
   */
  async clickHiddenLayersLink(): Promise<void> {
    await this.linkHiddenLayers.click();
  }

  /**
   * Click on the 'Load Delay' link.
   */
  async clickLoadDelayLink(): Promise<void> {
    await this.linkLoadDelay.click();
  }

  /**
   * Click on the 'Client Side Delay' link.
   */
  async clickClientSideDelayLink(): Promise<void> {
    await this.linkClientSideDelay.click();
  }

  /**
   * Click on the 'Click' link.
   */
  async clickClickLink(): Promise<void> {
    await this.linkClick.click();
  }

  /**
   * Click on the 'Scrollbars' link.
   */
  async clickScrollbarsLink(): Promise<void> {
    await this.linkScrollbars.click();
  }

  /**
   * Click on the 'Verify Text' link.
   */
  async clickVerifyTextLink(): Promise<void> {
    await this.linkVerifyText.click();
  }

  /**
   * Click on the 'Mouse Over' link.
   */
  async clickMouseOverLink(): Promise<void> {
    await this.linkMouseOver.click();
  }
}