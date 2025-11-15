import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';

test('Animated Button', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Click on the link to open the 'Animated Button' page
  await pm.onHomePage().clickAnimatedButtonLink();

  // Verify that the header of the 'Animated Button' page is visible
  await expect(pm.onAnimatedButtonPage().headerAnimatedButtonPage).toBeVisible();

  // Start the button animation
  await pm.onAnimatedButtonPage().triggerAnimationStart();

  // Wait until the animation is finished
  await pm.onAnimatedButtonPage().waitForAnimationDone();

  // Click the moving target button once the animation is complete
  await pm.onAnimatedButtonPage().clickButtonMovingTarget();

  // Verify that the button is no longer in a spinning state by checking its CSS class
  expect(await pm.onAnimatedButtonPage().getButtonMovingTargetClass()).not.toContain('spin');
});
