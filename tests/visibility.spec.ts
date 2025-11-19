import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';

test('Visibility', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Click on the link to open the 'Visibility' page
  await pm.onHomePage().openVisibilityPage();

  // Verify that the header of the 'Visibility' page is visible
  await expect(pm.onVisibilityPage().headerVisibilityPage).toBeVisible();

  // Click the 'Hide' button to trigger visibility changes
  await pm.onVisibilityPage().buttonHide.click();

  // Check visibility of buttons after clicking the 'Hide' button

  // 'Hide' button remains visible
  await expect(pm.onVisibilityPage().buttonHide).toBeVisible();

  // 'Removed' button is hidden
  await expect(pm.onVisibilityPage().buttonRemoved).toBeHidden();

  // 'Zero Width' button is hidden
  await expect(pm.onVisibilityPage().buttonZeroWidth).toBeHidden();

  // 'Overlapped' button is covered by another element
  // Get IDs of the topmost elements at all four corners of the button
  const cornerElementIds = await pm.onVisibilityPage().getTopElementIdsAtButtonCorners();

  // Get the ID of the target button that is expected to be overlapped
  const overlappedButtonId = await pm.onVisibilityPage().getOverlappedButtonId();

  // Check that every corner is covered by another element (not the button itself)
  const allCornersCovered = cornerElementIds.every(
    (id) => id !== overlappedButtonId && id !== null,
  );

  // Verify that the button is fully overlapped at all corners
  expect(allCornersCovered).toBeTruthy();

  // 'Opacity 0' button has opacity set to 0
  await expect(pm.onVisibilityPage().buttonOpacity0).toHaveCSS('opacity', '0');

  // 'Visibility Hidden' button is hidden
  await expect(pm.onVisibilityPage().buttonVisibilityHidden).toBeHidden();

  // 'Display None' button is hidden
  await expect(pm.onVisibilityPage().buttonDisplayNone).toBeHidden();

  // 'Offscreen' button is not in the viewport
  await expect(pm.onVisibilityPage().buttonOffscreen).not.toBeInViewport();
});
