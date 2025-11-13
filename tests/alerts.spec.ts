import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';
import { handleDialog } from '../utils/dialog-handler';
import { faker } from '@faker-js/faker';

test('Alerts', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  // faker.animal.type() generates a random animal
  const randomAnimal = faker.animal.type();

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Click on the link to open the 'Alerts' page
  await pm.onHomePage().clickAlertsLink();

  // Verify that the header of the 'Alerts' page is visible
  await expect(pm.onAlertsPage().headerAlertsPage).toBeVisible();

  // Handle a simple alert dialog
  await Promise.all([handleDialog(page, 'accept'), pm.onAlertsPage().buttonAlert.click()]);

  // Handle confirm dialogs
  await Promise.all([handleDialog(page, 'accept'), pm.onAlertsPage().buttonConfirm.click()]);
  await handleDialog(page, 'accept');

  // Handle a prompt dialog and pass the random animal as user input
  await Promise.all([
    handleDialog(page, 'accept', randomAnimal),
    pm.onAlertsPage().buttonPrompt.click(),
  ]);

  // Verify that the prompt dialog displays the expected text with the entered prompt value
  const dialogUserValue = await handleDialog(page, 'accept');
  expect(dialogUserValue).toEqual(`User value: ${randomAnimal}`);
});
