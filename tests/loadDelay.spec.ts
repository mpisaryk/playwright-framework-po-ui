import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';

test('Load Delay', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Perform parallel actions:
  // Click on the 'Load Delay' link from the Home page
  // Wait for the page to reach the "load" state (ensuring all resources are loaded)
  await Promise.all([pm.onHomePage().clickLoadDelayLink(), page.waitForLoadState('load')]);

  // Verify that the header of the 'Load Delay' page is visible
  await expect(pm.onLoadDelayPage().headerLoadDelayPage).toBeVisible();

  // Click the button that appears after the loading delay.
  await pm.onLoadDelayPage().buttonAppearingAfterDelay.click();
});
