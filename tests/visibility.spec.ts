import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';

test('Visibility', async ({ page }) => {
    // Initialize the Page Manager
    const pm = new PageManager(page);

    // Navigate to the Home page
    await pm.onHomePage().goToHomePage();

    // Click on the link to open the "Visibility" page
    await pm.onHomePage().clickVisibilityLink();

    // Verify that the header of the "Visibility" page is visible
    await expect(pm.onVisibilityPage().visibilityHeader).toBeVisible();

    // Click the "Hide" button to trigger visibility changes
    await pm.onVisibilityPage().hideButton.click();

    // Check visibility of buttons after clicking the "Hide" button

    // "Hide" button remains visible
    await expect(pm.onVisibilityPage().hideButton).toBeVisible();

    // "Removed" button is hidden
    await expect(pm.onVisibilityPage().removedButton).toBeHidden();

    // "Zero Width" button is hidden
    await expect(pm.onVisibilityPage().zeroWidthButton).toBeHidden();

    // "Overlapped" button is covered by another element
    expect(pm.onVisibilityPage().getTopElementIdOfOverlappedButton()).not.toBe(
        pm.onVisibilityPage().getOverlappedButtonId(),
    );

    // "Opacity 0" button has opacity set to 0
    await expect(pm.onVisibilityPage().opacity0Button).toHaveCSS('opacity', '0');

    // "Visibility Hidden" button is hidden
    await expect(pm.onVisibilityPage().visibilityHiddenButton).toBeHidden();

    // "Display None" button is hidden
    await expect(pm.onVisibilityPage().displayNoneButton).toBeHidden();

    // "Offscreen" button is not in the viewport
    await expect(pm.onVisibilityPage().offscreenButton).not.toBeInViewport();
});
