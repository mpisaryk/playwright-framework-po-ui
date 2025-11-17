import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';
import { DIALOG_MESSAGE } from '../test-data/TestData';
import { handleDialog } from '../utils/dialog-handler';

test('Class Attribute', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Click on the link to open the 'Dynamic Table' page
  await pm.onHomePage().openClassAttributePage();

  // Verify that the header of the 'Class Attribute' page is visible
  await expect(pm.onClassAttributePage().headerClassAttributePage).toBeVisible();

  //Click the primary button and accept any appearing dialog
  const [dialogMessage] = await Promise.all([
    handleDialog(page, 'accept'),
    pm.onClassAttributePage().clickPrimaryButton(),
  ]);

  // Verify the dialog message
  expect(dialogMessage).toBe(DIALOG_MESSAGE);
});
