import { Page } from '@playwright/test';

/**
 * Handles browser dialogs (alert, confirm, and prompt) in Playwright tests.
 *
 * This utility function listens for a single dialog event on the provided page
 * and automatically performs the specified action ('accept' or 'dismiss').
 * If the dialog is a prompt, it can optionally send input text before accepting.
 *
 * @param page - The Playwright Page instance on which to listen for the dialog event
 * @param action - Determines how to handle the dialog ('accept' or 'dismiss'), defaults to 'accept'
 * @param promptText - Optional text to send to a prompt dialog before accepting
 * @returns A promise that resolves with the dialog message text
 */
export function handleDialog(
  page: Page,
  action: 'accept' | 'dismiss' = 'accept',
  promptText?: string,
): Promise<string> {
  return new Promise((resolve) => {
    page.once('dialog', async (dialog) => {
      // Capture the message displayed in the dialog
      const message = dialog.message();

      // Handle different dialog types and actions
      if (dialog.type() === 'prompt' && action === 'accept' && promptText) {
        await dialog.accept(promptText);
      } else if (action === 'accept') {
        await dialog.accept();
      } else {
        await dialog.dismiss();
      }
      // Resolve the promise with the dialog message text
      resolve(message);
    });
  });
}
