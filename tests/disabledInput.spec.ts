import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';
import { faker } from '@faker-js/faker';

test('Disabled Input', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  // Generate random sentence
  const randomSentence = faker.lorem.sentence();

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Navigate to the 'Disabled Input' page
  await pm.onHomePage().openDisabledInputPage();

  // Verify that the header of the 'Disabled Input' page is visible
  await expect(pm.onDisabledInputPage().headerDisabledInputPage).toBeVisible();

  // Enable the input field for editing
  await pm.onDisabledInputPage().enableEditField();

  // Fill the input field with a randomly generated sentence
  await pm.onDisabledInputPage().fillInputField(randomSentence);

  // Verify that the input field now contains the expected text
  await expect(pm.onDisabledInputPage().inputField).toHaveValue(randomSentence);
});
