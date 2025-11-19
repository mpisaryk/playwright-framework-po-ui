import { Locator, Page } from '@playwright/test';

/**
 * Scrolls a specific element into the center of the viewport.
 *
 * @param element - Playwright Locator representing the target element to scroll into view.
 * @param page - Playwright Page instance used to execute the scroll command in the browser context.
 * @throws Error if the target element cannot be resolved into an ElementHandle.
 */
export async function scrollElementIntoView(element: Locator, page: Page): Promise<void> {
  // Get the ElementHandle from the Locator
  const handle = await element.elementHandle();

  // Throw an error if the element is not found
  if (!handle) {
    throw new Error('Element not found while scrolling into view');
  }

  // Scroll the element into view
  await page.evaluate((el) => el.scrollIntoView({ block: 'center', inline: 'center' }), handle);
}
