import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';

test('AJAX Data', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Click on the link to open the "AJAX Data" page
  await pm.onHomePage().clickAjaxDataLink();

  // Verify that the header of the "AJAX Data" page is visible
  await expect(pm.onAjaxDataPage().headerAjaxDataPage).toBeVisible();

  // Click the button to trigger the AJAX request
  await pm.onAjaxDataPage().buttonAjaxTrigger.click();

  // Wait for label text to appear
  await expect(pm.onAjaxDataPage().labelSuccess).toBeVisible({ timeout: 16000 });

  // Click on text of the loaded label
  await pm.onAjaxDataPage().labelSuccess.click();
});
