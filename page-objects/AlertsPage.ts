import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the 'Alerts' page.
 * This class encapsulates locators and actions for this page.
 */
export class AlertsPage {
  page: Page;
  headerAlertsPage: Locator;
  buttonAlert: Locator;
  buttonConfirm: Locator;
  buttonPrompt: Locator;

  constructor(page: Page) {
    this.page = page;

    /**
     * Locators are selected based on Playwright best practices (where possible):
     * - Prefer user-facing attributes over implementation details (like classes or IDs)
     * - Ensure that locators reflect user-visible behavior
     */

    // Locate the header by its role 'heading' and visible text 'Alerts'
    this.headerAlertsPage = page.getByRole('heading', { name: 'Alerts' });

    // Locate the buttons that trigger the alerts by their role 'button' and visible names
    this.buttonAlert = page.getByRole('button', { name: 'Alert' });
    this.buttonConfirm = page.getByRole('button', { name: 'Confirm' });
    this.buttonPrompt = page.getByRole('button', { name: 'Prompt' });
  }

  /**
   * Opens the alert dialog.
   */
  async openAlert(): Promise<void> {
    await this.buttonAlert.click();
  }

  /**
   * Opens the confirm dialog.
   */
  async openConfirm(): Promise<void> {
    await this.buttonConfirm.click();
  }

  /**
   * Opens the prompt dialog.
   */
  async openPrompt(): Promise<void> {
    await this.buttonPrompt.click();
  }
}
