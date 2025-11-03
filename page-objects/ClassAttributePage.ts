import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the "Class Attribute" page.
 * This class encapsulates locators and actions for this page.
 */
export class ClassAttributePage {
  readonly page: Page;
  readonly classAttributePageHeader: Locator;
  readonly buttonPrimary: Locator;

  constructor(page: Page) {
    this.page = page;

    // Locate the header by its role "heading" and visible text "Class Attribute"
    this.classAttributePageHeader = page.getByRole('heading', { name: 'Class Attribute' });

    /**
     * Locate the primary button using its class "btn-primary".
     * XPath is used here with normalization to ensure that spaces in class names are handled correctly.
     * This avoids false negatives when multiple classes are present.
     */
    this.buttonPrimary = page.locator(
      '//button[contains(concat(" ", normalize-space(@class), " "), " btn-primary ")]',
    );
  }

  /**
   * Clicks the primary button and automatically accepts any appearing dialog.
   * The dialog message is captured and returned for verification.
   *
   * Steps:
   * 1. Listen for a dialog event and capture its message.
   * 2. Accept the dialog to avoid blocking further actions.
   * 3. Click the primary button.
   * 4. Return the dialog message.
   */
  async clickPrimaryButtonAndAcceptDialog(): Promise<string> {
    let dialogMessage = '';
    this.page.on('dialog', async (dialog) => {
      dialogMessage = dialog.message();
      await dialog.accept();
    });
    await this.buttonPrimary.click();
    return dialogMessage;
  }
}
