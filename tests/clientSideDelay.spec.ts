import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';

test('Client Side Delay', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Click on the link to open the 'AJAX Data' page
  await pm.onHomePage().clickClientSideDelayLink();

  // Verify that the header of the 'AJAX Data' page is visible
  await expect(pm.onClientSideDelayPage().headerClientSideDelayPage).toBeVisible();

  // Click the button that triggers client-side logic
  await pm.onClientSideDelayPage().buttonTriggerClientSideLogic.click();

  // Wait for the 'Data Calculated' label to become stable
  // elementHandle() is used to get a reference to the DOM element
  // waitForElementState('stable') ensures the element is fully rendered and not in transition
  // Throws an error if the element is not found, providing safety for the test
  const elementHandle = await pm.onClientSideDelayPage().labelDataCalculated.elementHandle();
  if (elementHandle) {
    await elementHandle.waitForElementState('stable');
  } else {
    throw new Error('Element Label Data Calculated not found');
  }
});
