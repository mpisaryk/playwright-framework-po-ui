import { type Locator, type Page } from '@playwright/test';
import { TASK_MANAGER_COLUMN } from '../test-data/TestData';

/**
 * Page Object for the 'Dynamic Table' page.
 * This class encapsulates locators and actions for this page.
 */
export class DynamicTablePage {
  readonly page: Page;
  readonly headerDynamicTablePage: Locator;
  readonly tableHeaders: Locator;
  readonly labelYellow: Locator;

  constructor(page: Page) {
    this.page = page;

    /**
     * Locators are selected based on Playwright best practices (where possible):
     * - Prefer user-facing attributes over implementation details (like classes or IDs)
     * - Ensure that locators reflect user-visible behavior
     */

    // Locate the header by its role 'heading' and visible text 'Dynamic Table'
    this.headerDynamicTablePage = page.getByRole('heading', { name: 'Dynamic Table' });

    // Locate all table column headers by their role
    this.tableHeaders = page.locator('[role="columnheader"]');

    // Locate the yellow label
    this.labelYellow = page.locator('p.bg-warning');
  }

  /**
   * Get the index of a column by its header text
   * @param columnName - Task manager column name (e.g., 'CPU')
   */
  async getColumnIndex(columnName: string): Promise<number> {
    return this.tableHeaders.evaluateAll((headers, columnName) => {
      // Iterate over all headers and return the index of the matching one
      return headers.findIndex((header) => header.textContent?.trim() === columnName);
    }, columnName);
  }

  /**
   * Get numeric CPU value for a given row (e.g., 'Chrome').
   *  1. Find the "CPU" column index
   *  2. Locate the row by its name (taskManagerNameValue)
   *  3. Extract the text of the cell in the CPU column
   *  4. Parse the number from the value
   *
   * @param taskManagerNameValue - Name of the row (e.g., 'Chrome')
   * @returns CPU value as a number, or null if not found
   */
  async getCpuValueForRow(taskManagerNameValue: string): Promise<number | null> {
    const cpuColumnIndex = await this.getColumnIndex(TASK_MANAGER_COLUMN);
    const row = this.page.locator('[role="row"]', { hasText: taskManagerNameValue });
    const cpuValue = await row.locator('[role="cell"]').nth(cpuColumnIndex).innerText();
    const cpuNumericValue = cpuValue.match(/(\d+(\.\d+)?)%/);
    return cpuNumericValue ? parseFloat(cpuNumericValue[1]) : null;
  }

  /**
   * Get numeric CPU value displayed in the yellow label.
   *  1. Get text of the yellow label
   *  2. Extract the number from the text
   *
   * @returns CPU value as a number, or null if not found
   */
  async getYellowCpuValue(): Promise<number | null> {
    const text = await this.labelYellow.innerText();
    const match = text.match(/(\d+(\.\d+)?)%/);
    return match ? parseFloat(match[1]) : null;
  }
}
