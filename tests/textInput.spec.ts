import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';
import { NEW_BUTTON_NAME } from '../test-data/TestData';

test('Text Input', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Click on the link to open the 'Text Input' page
  await pm.onHomePage().openTextInputPage();

  // Verify that the header of the 'Text Input' page is visible
  await expect(pm.onTextInputPage().headerTextInputPage).toBeVisible();

  // Update the button name
  await pm.onTextInputPage().updateButtonName(NEW_BUTTON_NAME);

  // Verify that the button's name has changed to the new name
  await expect(pm.onTextInputPage().buttonWithChangeableName).toHaveText(NEW_BUTTON_NAME);
});
