import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';
import { NEW_BUTTON_NAME } from '../test-data/TestData';

test('Text Input', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Click on the link to open the 'Text Input' page
  await pm.onHomePage().clickTextInputLink();

  // Verify that the header of the 'Text Input' page is visible
  await expect(pm.onTextInputPage().headerTextInputPage).toBeVisible();

  // Focus the input field for the button name
  await pm.onTextInputPage().inputButtonName.click();

  // Type the new button name using the keyboard
  await page.keyboard.type(NEW_BUTTON_NAME);

  // Click the button to apply the new button name
  await pm.onTextInputPage().buttonWithChangeableName.click();

  // Verify that the button's name has changed to the new name
  await expect(pm.onTextInputPage().buttonWithChangeableName).toHaveText(NEW_BUTTON_NAME);
});
