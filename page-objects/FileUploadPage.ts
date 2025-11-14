import { type FrameLocator, type Locator, type Page } from '@playwright/test';

/**
 * Page Object for the 'File Upload' page.
 * This class encapsulates locators and actions for this page.
 */
export class FileUploadPage {
  page: Page;
  headerFileUploadPage: Locator;
  frameLocator: Locator;

  constructor(page: Page) {
    this.page = page;

    /**
     * Locators are selected based on Playwright best practices (where possible):
     * - Prefer user-facing attributes over implementation details (like classes or IDs)
     * - Ensure that locators reflect user-visible behavior
     */

    // Locate the header by its role 'heading' and visible text 'File Upload'
    this.headerFileUploadPage = page.getByRole('heading', { name: 'File Upload' });

    // Locate the iframe
    this.frameLocator = page.locator('iframe');
  }

  /**
   * @returns a FrameLocator object pointing to the iframe.
   *
   * This is needed to interact with elements inside the iframe context.
   */
  getFrame(): FrameLocator {
    return this.frameLocator.contentFrame();
  }

  /**
   * Upload a file inside the iframe.
   * @param filePath - Path to the file to upload
   */
  async uploadFile(filePath: string): Promise<void> {
    await this.getFrame().getByText('Browse files').setInputFiles(filePath);
  }

  /**
   * Returns locator for file info text inside the iframe.
   */
  fileNameInfo(): Locator {
    return this.getFrame().locator('div.file-info');
  }

  /**
   * Returns locator for success message inside the iframe.
   */
  successInfo(): Locator {
    return this.getFrame().locator('div.success-file');
  }
}
