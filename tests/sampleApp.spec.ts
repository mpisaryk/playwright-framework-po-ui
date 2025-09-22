import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';

test('Sample App', async ({ page }) => {
    // Initialize the Page Manager
    const pm = new PageManager(page);

    // Navigate to the Home page
    await pm.onHomePage().goToHomePage();

    // Click on the link to open the "Sample App" page
    await pm.onHomePage().clickSampleAppLink();

    // Verify that the header of the "Sample App" page is visible
    await expect(pm.onSampleAppPage().sampleAppPageHeader).toBeVisible();

    // Perform login using credentials from environment variables
    await pm
        .onSampleAppPage()
        .login(process.env.USER_NAME || 'defaultUser', process.env.PASSWORD || 'defaultPassword');

    // Verify that the login status message is displayed correctly
    await expect(pm.onSampleAppPage().loginStatus).toHaveText(
        `Welcome, ${process.env.USER_NAME || 'defaultUser'}!`,
    );

    // Verify that the Log Out button is visible after login
    await expect(pm.onSampleAppPage().logOutButton).toBeVisible();
});
