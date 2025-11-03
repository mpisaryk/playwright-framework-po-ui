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
  readonly classAttributeLink: Locator;

  constructor(page: Page) {
    this.page = page;

    /**
     * Locators are selected based on Playwright best practices (where possible):
     * - Prefer user-facing attributes over implementation details (like classes or IDs)
     * - Ensure that locators reflect user-visible behavior
     */

    // Link to the "Overlapped Element" page
    this.overlappedElementLink = page.getByRole('link', { name: 'Overlapped Element' });

    // Link to the "AJAX Data" page
    this.ajaxDataLink = page.getByRole('link', { name: 'AJAX DATA' });

    // Link to the "Visibility" page
    this.visibilityLink = page.getByRole('link', { name: 'Visibility' });

    // Link to the "Dynamic Table" page
    this.dynamicTableLink = page.getByRole('link', { name: 'Dynamic Table' });

    // Link to the "Sample App" page
    this.sampleAppLink = page.getByRole('link', { name: 'Sample App' });

    // Link to the "Text Input" page
    this.textInputLink = page.getByRole('link', { name: 'Text Input' });

    // Link to the "Progress Bar" page
    this.progressBarLink = page.getByRole('link', { name: 'Progress Bar' });

    // Link to the "Class Attribute" page
    this.classAttributeLink = page.getByRole('link', { name: 'Class Attribute' });
  }

  /**
   * Navigate directly to the Home page.
   */
  async goToHomePage(): Promise<void> {
    await this.page.goto('/');
  }

  /**
   * Click on the "Overlapped Element" link.
   */
  async clickOverlappedElementLink(): Promise<void> {
    await this.overlappedElementLink.click();
  }

  /**
   * Click on the "AJAX Data" link.
   */
  async clickAjaxDataLink(): Promise<void> {
    await this.ajaxDataLink.click();
  }

  /**
   * Click on the "Visibility" link.
   */
  async clickVisibilityLink(): Promise<void> {
    await this.visibilityLink.click();
  }

  /**
   * Click on the "Dynamic Table" link.
   */
  async clickDynamicTableLink(): Promise<void> {
    await this.dynamicTableLink.click();
  }

  /**
   * Click on the "Sample App" link.
   */
  async clickSampleAppLink(): Promise<void> {
    await this.sampleAppLink.click();
  }

  /**
   * Click on the "Text Input" link.
   */
  async clickTextInputLink(): Promise<void> {
    await this.textInputLink.click();
  }

  /**
   * Click on the "Progress Bar" link.
   */
  async clickProgressBarLink(): Promise<void> {
    await this.progressBarLink.click();
  }

  /**
   * Click on the "Class Attribute" link.
   */
  async clickClassAttributeLink(): Promise<void> {
    await this.classAttributeLink.click();
  }
}
