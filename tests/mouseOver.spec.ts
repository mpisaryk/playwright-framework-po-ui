import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';
import { EXPECTED_CLICK_COUNT } from '../test-data/TestData';

test('Mouse Over', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Click on the link to open the 'Mouse Over' page
  await pm.onHomePage().openMouseOverPage();

  // Verify that the header of the 'Mouse Over' page is visible
  await expect(pm.onMouseOverPage().headerMouseOver).toBeVisible();

  // Perform the action sequence on the 'Click Me' link: hover, click, move away, hover again, and click again
  // The method returns the current click count recorded by the counter
  const clicksClickMe = await pm.onMouseOverPage().interactWithClickMeLink();

  // Verify that the number of clicks on the 'Click Me' link matches the expected value
  expect(clicksClickMe).toEqual(EXPECTED_CLICK_COUNT);

  // Perform the same action sequence on the 'Button' link: hover, click, move away, hover again, and click again
  // The method returns the current click count for this button
  const clicksButton = await pm.onMouseOverPage().interactWithLinkButton();

  // Verify that the number of clicks on the 'Button' link matches the expected value
  expect(clicksButton).toEqual(EXPECTED_CLICK_COUNT);
});
