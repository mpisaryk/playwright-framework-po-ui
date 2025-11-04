import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the "Sample App" page.
 * This class encapsulates locators and actions for this page.
 */
export class SampleAppPage {
  readonly page: Page;
  readonly headerSampleAppPage: Locator;
  readonly inputUserName: Locator;
  readonly inputPassword: Locator;
  readonly buttonLogIn: Locator;
  readonly buttonLogOut: Locator;
  readonly loginStatus: Locator;

  constructor(page: Page) {
    this.page = page;

    /**
     * Locators are selected based on Playwright best practices (where possible):
     * - Prefer user-facing attributes over implementation details (like classes or IDs)
     * - Ensure that locators reflect user-visible behavior
     */

    // Locate the header by its role "heading" and visible text "Sample App"
    this.headerSampleAppPage = page.getByRole('heading', { name: 'Sample App' });

    // Locate Input fields by their placeholder text
    this.inputUserName = page.getByPlaceholder('User Name');
    this.inputPassword = page.getByPlaceholder('********');

    // Locate buttons by their role and visible names
    this.buttonLogIn = page.getByRole('button', { name: 'Log In' });
    this.buttonLogOut = page.getByRole('button', { name: 'Log Out' });

    // Locate the login status message by its ID
    this.loginStatus = page.locator('#loginstatus');
  }

  /**
   * Perform login by filling username and password and clicking the login button.
   * @param username - Username to login
   * @param password - Password to login
   */
  async login(username: string, password: string): Promise<void> {
    await this.inputUserName.fill(username);
    await this.inputPassword.fill(password);
    await this.buttonLogIn.click();
  }
}
