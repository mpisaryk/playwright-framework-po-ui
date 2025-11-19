import { type Locator, type Page } from '@playwright/test';
import { waitForElementState } from '../helpers/wait-for-element-state';

/**
 * Page Object for the 'Client Side Delay' page.
 * This class encapsulates locators and actions for this page.
 */
export class ClientSideDelay {
  readonly page: Page;
  readonly headerClientSideDelayPage: Locator;
  readonly buttonTriggerClientSideLogic: Locator;
  readonly labelDataCalculated: Locator;

  constructor(page: Page) {
    this.page = page;

    /**
     * Locators are selected based on Playwright best practices (where possible):
     * - Prefer user-facing attributes over implementation details (like classes or IDs)
     * - Ensure that locators reflect user-visible behavior
     */

    // Locate the header by its role 'heading' and visible text 'Client Side Delay'
    this.headerClientSideDelayPage = page.getByRole('heading', { name: 'Client Side Delay' });

    // Locate the button that triggers the client side logic by its role 'button' and visible name 'Button Triggering Client Side Logic'
    this.buttonTriggerClientSideLogic = page.getByRole('button', {
      name: 'Button Triggering Client Side Logic',
    });

    // Locate the label that appears after triggering the client side logic
    this.labelDataCalculated = page.locator('p.bg-success', {
      hasText: 'Data calculated on the client side.',
    });
  }

  /**
   * Clicks the button that triggers the client-side logic.
   */
  async triggerClientSideLogic(): Promise<void> {
    await this.buttonTriggerClientSideLogic.click();
  }

  /**
   * Waits for the 'Data Calculated' label to become stable and clicks it
   */
  async clicLabelDataCalculated(): Promise<void> {
    await waitForElementState(this.labelDataCalculated, 'stable');
    await this.labelDataCalculated.click();
  }
}
