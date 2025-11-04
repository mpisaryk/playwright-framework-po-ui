import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';

test('Hidden Layers', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Click on the link to open the "Hidden Layers" page
  await pm.onHomePage().clickHiddenLayersLink();

  // Verify that the header of the "Hidden Layers" page is visible
  await expect(pm.onHiddenLayersPage().headerHiddenLayersPage).toBeVisible();

  // First click on the green button: should succeed as it is visible and clickable
  await pm.onHiddenLayersPage().buttonGreen.click();

  // Second click on the green button: the button is now covered by another element
  // Use expect(...).rejects.toThrow() to assert that the click fails as expected
  // timeout: 1000 ensures the test fails fast if the click is blocked
  await expect(async () => {
    await pm.onHiddenLayersPage().buttonGreen.click({ timeout: 1000 });
  }).rejects.toThrow();
});
