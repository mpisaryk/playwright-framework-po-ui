import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';
import { EXPECTED_CLICK_COUNT } from '../test-data/TestData';

test('Mouse Over', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Click on the link to open the 'Mouse Over' page
  await pm.onHomePage().clickMouseOverLink();

  // Verify that the header of the 'Mouse Over' page is visible
  await expect(pm.onMouseOverPage().headerMouseOver).toBeVisible();

  /**
   * Interact with the "Click Me" link:
   * - Hover over it
   * - Hover, click, move away, hover again, and click again
   * - Verify that the click counter matches the expected value
   */
  await pm.onMouseOverPage().linkClickMe.hover();
  await pm.onMouseOverPage().linkClickMe.click();
  await page.mouse.move(0, 0);
  await pm.onMouseOverPage().linkClickMe.hover();
  await pm.onMouseOverPage().linkClickMe.click();
  const numberOfCliksForClickMeLink = await pm
    .onMouseOverPage()
    .numberContent(pm.onMouseOverPage().counterClickMe);
  expect(numberOfCliksForClickMeLink).toEqual(EXPECTED_CLICK_COUNT);

  /**
   * Interact with the "Button" link in the same way:
   * - Hover, click, move away, hover again, and click again
   * - Verify that the click counter matches the expected value
   */
  await pm.onMouseOverPage().linkButton.hover();
  await pm.onMouseOverPage().linkButton.click();
  await page.mouse.move(0, 0);
  await pm.onMouseOverPage().linkButton.hover();
  await pm.onMouseOverPage().linkButton.click();
  const numberOfCliksForLinkButton = await pm
    .onMouseOverPage()
    .numberContent(pm.onMouseOverPage().counterButton);
  expect(numberOfCliksForLinkButton).toEqual(EXPECTED_CLICK_COUNT);
});
