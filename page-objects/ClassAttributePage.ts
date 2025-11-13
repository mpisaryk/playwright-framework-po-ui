import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the 'Class Attribute' page.
 * This class encapsulates locators and actions for this page.
 */
export class ClassAttributePage {
  readonly page: Page;
  readonly headerClassAttributePage: Locator;
  readonly buttonPrimary: Locator;

  constructor(page: Page) {
    this.page = page;

    // Locate the header by its role 'heading' and visible text 'Class Attribute'
    this.headerClassAttributePage = page.getByRole('heading', { name: 'Class Attribute' });

    /**
     * Locate the primary button using its class 'btn-primary'.
     * XPath is used here with normalization to ensure that spaces in class names are handled correctly.
     * This avoids false negatives when multiple classes are present.
     */
    this.buttonPrimary = page.locator(
      '//button[contains(concat(" ", normalize-space(@class), " "), " btn-primary ")]',
    );
  }
}
