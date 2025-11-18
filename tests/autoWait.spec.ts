import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';
import { faker } from '@faker-js/faker';
import { AVAILABLE_ITEMS, TARGET_CLICKED_MESSAGE } from '../test-data/TestData';

test('Auto Wait', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  // Generate a random sentence
  const randomSentence = faker.lorem.sentence();

  // Choose an item from the predefined list of available select options
  const item = AVAILABLE_ITEMS[1];

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Navigate to the 'Auto Wait' page
  await pm.onHomePage().openAutoWaitPage();

  // Verify that the header of the 'Auto Wait' page is visible
  await expect(pm.onAutoWaitPage().headerAutoWaitPage).toBeVisible();

  // 'Button' option: select Button option, wait for enable, click it, verify message
  await pm.onAutoWaitPage().selectButtonOptionAndTriggerClick();
  await expect(pm.onAutoWaitPage().labelStatus).toHaveText(TARGET_CLICKED_MESSAGE);

  // 'Input' option: select Input option, wait for editable state, fill text, verify value and message
  await pm.onAutoWaitPage().selectInputOptionAndEnterText(randomSentence);
  await expect(pm.onAutoWaitPage().inputField).toHaveValue(randomSentence);
  await expect(pm.onAutoWaitPage().labelStatus).toHaveText(TARGET_CLICKED_MESSAGE);

  // 'Textarea' option: select Textarea option, wait for editable state, fill text, verify value and message
  await pm.onAutoWaitPage().selectTextareaOptionAndEnterText(randomSentence);
  await expect(pm.onAutoWaitPage().textArea).toHaveValue(randomSentence);
  await expect(pm.onAutoWaitPage().labelStatus).toHaveText(TARGET_CLICKED_MESSAGE);

  // 'Select' option: select Select option, wait for visibility, select item, verify message
  await pm.onAutoWaitPage().selectSelectOptionAndSelectItem(item);
  await expect(pm.onAutoWaitPage().labelStatus).toHaveText(`Selected: ${item}`);

  // 'Label' option: select Label option, wait for visibility, click label, verify message
  await pm.onAutoWaitPage().selectLabelOptionAndClickLabel();
  await expect(pm.onAutoWaitPage().labelStatus).toHaveText(TARGET_CLICKED_MESSAGE);
});
