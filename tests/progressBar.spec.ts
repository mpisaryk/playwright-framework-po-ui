import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';
import { DESIRED_PROGRESS_BAR_VALUE } from '../test-data/TestData';

test('Progress Bar', async ({ page }) => {
    // Initialize the Page Manager to work with Page Objects
    const pm = new PageManager(page);

    // Navigate to the Home page
    await pm.onHomePage().goToHomePage();

    // Click on the link to open the "Progress Bar" page
    await pm.onHomePage().clickProgressBarLink();

    // Verify that the header of the "Progress Bar" page is visible
    await expect(pm.onProgressBarPage().progressBarPageHeader).toBeVisible();

    // Click 'Start' button to start the progress bar
    await pm.onProgressBarPage().startButton.click();

    // Wait until the progress bar reaches the desired value (75%)
    await pm.onProgressBarPage().waitForProgressToReach(DESIRED_PROGRESS_BAR_VALUE);

    // Click 'Stop' button to stop the progress bar
    await pm.onProgressBarPage().stopButton.click();

    // Get the final value of the progress bar
    const finalProgressBarValue = await pm.onProgressBarPage().getCurrentProgressValue();

    // Verify that the final progress value matches the desired value
    expect(finalProgressBarValue).toBe(DESIRED_PROGRESS_BAR_VALUE);
});
