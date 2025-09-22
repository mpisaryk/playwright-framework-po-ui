import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the "Overlapped Element" page.
 * This class encapsulates locators and actions for this page.
 */
export class SampleAppPage {
    readonly page: Page;
    readonly sampleAppPageHeader: Locator;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly logInButton: Locator;
    readonly logOutButton: Locator;
    readonly loginStatus: Locator;

    constructor(page: Page) {
        this.page = page;

        // Locate the header element by its role "heading" and visible text "Sample App"
        this.sampleAppPageHeader = page.getByRole('heading', { name: 'Sample App' });

        // Locate Input fields by their placeholder text
        this.userNameInput = page.getByPlaceholder('User Name');
        this.passwordInput = page.getByPlaceholder('********');

        // Locate buttons by their role and visible names
        this.logInButton = page.getByRole('button', { name: 'Log In' });
        this.logOutButton = page.getByRole('button', { name: 'Log Out' });

        // Locate the login status message by its ID
        this.loginStatus = page.locator('#loginstatus');
    }

    /**
     * Perform login by filling username and password and clicking the login button.
     * @param username - Username to login
     * @param password - Password to login
     */
    async login(username: string, password: string) {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.logInButton.click();
    }
}
