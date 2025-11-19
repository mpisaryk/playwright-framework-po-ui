import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';

test('Client Side Delay', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Click on the link to open the 'Client Side Delay' page
  await pm.onHomePage().openClientSideDelayPage();

  // Verify that the header of the 'Client Side Delay' page is visible
  await expect(pm.onClientSideDelayPage().headerClientSideDelayPage).toBeVisible();

  // Click the button that triggers client-side logic
  await pm.onClientSideDelayPage().triggerClientSideLogic();

  // Wait for the 'Data Calculated' label to become stable and click it
  await pm.onClientSideDelayPage().clicLabelDataCalculated();
});
