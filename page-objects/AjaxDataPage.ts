import { type Locator, type Page } from '@playwright/test';
import { waitForElementState } from '../helpers/wait-for-element-state';
/**
 * Page Object for the 'AJAX Data' page.
 * This class encapsulates locators and actions for this page.
 */
export class AjaxDataPage {
  readonly page: Page;
  readonly headerAjaxDataPage: Locator;
  readonly buttonAjaxTrigger: Locator;
  readonly labelSuccess: Locator;

  constructor(page: Page) {
    this.page = page;

    /**
     * Locators are selected based on Playwright best practices (where possible):
     * - Prefer user-facing attributes over implementation details (like classes or IDs)
     * - Ensure that locators reflect user-visible behavior
     */

    // Locate the header by its role 'heading' and visible text 'AJAX Data'
    this.headerAjaxDataPage = page.getByRole('heading', { name: 'AJAX Data' });

    // Locate the button that triggers the AJAX request by its role 'button' and visible name 'Button Triggering AJAX Request'
    this.buttonAjaxTrigger = page.getByRole('button', {
      name: 'Button Triggering AJAX Request',
    });

    // Locate the label that appears after the AJAX request succeeds
    this.labelSuccess = page.locator('p.bg-success', {
      hasText: 'Data loaded with AJAX get request.',
    });
  }

  /**
   * Starts the AJAX request on the page.
   */
  async startAjaxRequest(): Promise<void> {
    await this.buttonAjaxTrigger.click();
  }

  /**
   * Waits for the success label to become stable and clicks it
   */
  async clickSuccessLabel(): Promise<void> {
    await waitForElementState(this.labelSuccess, 'stable');
    await this.labelSuccess.click();
  }
}
