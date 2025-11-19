import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the 'AJAX Data' page.
 * This class encapsulates locators and actions for this page.
 */
export class AnimatedButtonPage {
  page: Page;
  headerAnimatedButtonPage: Locator;
  buttonStartAnimation: Locator;
  buttonMovingTarget: Locator;
  labelAnimationDone: Locator;

  constructor(page: Page) {
    this.page = page;

    /**
     * Locators are selected based on Playwright best practices (where possible):
     * - Prefer user-facing attributes over implementation details (like classes or IDs)
     * - Ensure that locators reflect user-visible behavior
     */

    // Locate the header by its role 'heading' and visible text 'Animated Button'
    this.headerAnimatedButtonPage = page.getByRole('heading', { name: 'Animated Button' });

    // Locate the buttons by their role 'button' and visible names
    this.buttonStartAnimation = page.getByRole('button', { name: 'Start Animation' });
    this.buttonMovingTarget = page.getByRole('button', { name: 'Moving Target' });

    // Locate the label that indicates the animation has finished
    this.labelAnimationDone = page.locator('#opstatus', { hasText: 'Animation done' });
  }

  /**
   * Initiates the animation process.
   */
  async triggerAnimationStart(): Promise<void> {
    await this.buttonStartAnimation.click();
  }

  /**
   * Waits for the animation to finish by waiting for the "Animation done" label to appear.
   */
  async waitForAnimationDone(): Promise<void> {
    await this.labelAnimationDone.waitFor({ state: 'visible' });
  }

  /**
   * Clicks the "Moving Target" button.
   */
  async clickButtonMovingTarget(): Promise<void> {
    await this.buttonMovingTarget.click();
  }

  /**
   * Retrieves the current CSS class of the "Moving Target" button.
   * @returns The value of the 'class' attribute or null if not present
   */
  async getButtonMovingTargetClass(): Promise<string | null> {
    return await this.buttonMovingTarget.getAttribute('class');
  }
}
