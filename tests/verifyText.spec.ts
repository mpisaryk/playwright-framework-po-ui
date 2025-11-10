import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';
import { EXPECTED_LABEL_TEXT } from '../test-data/TestData';

test('Verify Text', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Click on the link to open the 'Verify Text' page
  await pm.onHomePage().clickVerifyTextLink();

  // Verify that the header of the 'Verify Text' page is visible
  await expect(pm.onVerifyTextPage().headerVerifyText).toBeVisible();

  // Verify that the Welcome label is visible
  await expect(pm.onVerifyTextPage().labelWelcomeText).toBeVisible();

  // Verify that the welcome label contains the expected text
  await expect(pm.onVerifyTextPage().labelWelcomeText).toHaveText(EXPECTED_LABEL_TEXT);
});
