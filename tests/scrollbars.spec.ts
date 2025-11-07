import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';

test('Scrollbars', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Click on the link to open the 'Scrollbars' page
  await pm.onHomePage().clickScrollbarsLink();

  // Verify that the header of the 'Scrollbars' page is visible
  await expect(pm.onScrollbarsPage().headerScrollbarsPage).toBeVisible();

  // Scroll the page until the Hiding button appears in the viewport
  await pm.onScrollbarsPage().scrollToHidingButton();

  // Verify that the Hiding button is now visible in the viewport
  await expect(pm.onScrollbarsPage().buttonHiding).toBeInViewport();

  // Click the Hiding button
  await pm.onScrollbarsPage().buttonHiding.click();
});
