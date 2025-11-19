import { Locator } from '@playwright/test';

/**
 * Waits for a specific state of a Playwright Locator element.
 * This helps avoid flakiness when interacting with dynamic elements.
 *
 * @param element - The Playwright Locator for the element to wait on
 * @param state - The desired state to wait for. Can be one of:
 *                'visible' | 'stable' | 'hidden' | 'enabled' | 'disabled' | 'editable'
 *
 * @throws Error if the element cannot be found
 */
export async function waitForElementState(
  element: Locator,
  state: 'visible' | 'stable' | 'hidden' | 'enabled' | 'disabled' | 'editable',
): Promise<void> {
  // Get the element handle from the locator
  const handle = await element.elementHandle();

  // Throw an error if the element does not exist
  if (!handle) {
    throw new Error(`Element not found while waiting for state: ${state}`);
  }

  // Wait until the element reaches the specified state
  await handle.waitForElementState(state);
}
