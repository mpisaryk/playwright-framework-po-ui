import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';
import { EXPECTED_BUTTON_COLOR } from '../test-data/TestData';

test('Click', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Click on the link to open the 'Click' page
  await pm.onHomePage().openClickPage();

  // Verify that the header of the 'Click' page is visible
  await expect(pm.onClickPage().headerLinkPage).toBeVisible();

  // Get the coordinates of the button center and click it
  await pm.onClickPage().clickButtonCenter();

  // Verify that the button, which ignores standard DOM click events, changed to the expected color
  await expect(pm.onClickPage().buttonIgnoringDomClickEvent).toHaveCSS(
    'background-color',
    EXPECTED_BUTTON_COLOR,
  );
});
