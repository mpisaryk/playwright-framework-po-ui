import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';
import { DIALOG_MESSAGE } from '../test-data/TestData';

test('Class Attribute', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Click on the link to open the 'Dynamic Table' page
  await pm.onHomePage().clickClassAttributeLink();

  // Verify that the header of the 'Class Attribute' page is visible
  await expect(pm.onClassAttributePage().headerClassAttributePage).toBeVisible();

  //Click the primary button and accept any appearing dialog.
  const dialogMessage = await pm.onClassAttributePage().clickPrimaryButtonAndAcceptDialog();

  // Verify the dialog message
  expect(dialogMessage).toBe(DIALOG_MESSAGE);
});
