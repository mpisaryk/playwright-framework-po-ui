import { type Locator, type Page } from '@playwright/test';
import { waitForElementState } from '../helpers/wait-for-element-state';
import { AvailableItems } from '../test-data/TestData';

/**
 * Page Object for the 'Auto Wait' page.
 * This class encapsulates locators and actions for this page.
 */
export class AutoWaitPage {
  page: Page;
  headerAutoWaitPage: Locator;
  dropDownMenu: Locator;
  buttonApply3s: Locator;
  buttonApply5s: Locator;
  buttonApply10s: Locator;
  buttonTarget: Locator;
  labelStatus: Locator;
  inputField: Locator;
  textArea: Locator;
  itemSelector: Locator;
  labelPlayground: Locator;

  constructor(page: Page) {
    this.page = page;

    /**
     * Locators are selected based on Playwright best practices (where possible):
     * - Prefer user-facing attributes over implementation details (like classes or IDs)
     * - Ensure that locators reflect user-visible behavior
     */

    // Locate the header by its role 'heading' and visible text 'Auto Wait'
    this.headerAutoWaitPage = page.getByRole('heading', { name: 'Auto Wait' });

    // Locate buttons that trigger delayed actions by its role 'button' and visible names
    this.buttonApply3s = page.getByRole('button', { name: 'Apply 3s' });
    this.buttonApply5s = page.getByRole('button', { name: 'Apply 5s' });
    this.buttonApply10s = page.getByRole('button', { name: 'Apply 10s' });

    // Target button to click after delay

    // Drop-down menu to select element type
    this.dropDownMenu = page.locator('#element-type');

    // Status label that updates after actions
    this.labelStatus = page.locator('#opstatus');

    // Taget button, Input field, Text area, Item selector and label to intercat with
    this.buttonTarget = page.getByRole('button', { name: 'Button' });
    this.inputField = page.locator('input#target');
    this.textArea = page.locator('textarea#target');
    this.itemSelector = page.locator('select#target');
    this.labelPlayground = page.locator('label', { hasText: 'This is a Label' });
  }

  /**
   * Select 'Button' option from dropdown, trigger delayed enable, wait for the button to enable, and click it.
   */
  async selectButtonOptionAndTriggerClick(): Promise<void> {
    await this.dropDownMenu.selectOption({ label: 'Button' });
    await this.buttonApply3s.click();
    await waitForElementState(this.buttonTarget, 'enabled');
    await this.buttonTarget.click();
  }

  /**
   * Select 'Input' option from dropdown, trigger delayed enable, wait for input to be editable, and fill it.
   * @param text - The text to enter into the input field
   */
  async selectInputOptionAndEnterText(text: string): Promise<void> {
    await this.dropDownMenu.selectOption({ label: 'Input' });
    await this.buttonApply5s.click();
    await waitForElementState(this.inputField, 'editable');
    await this.inputField.click();
    await this.inputField.fill(text);
  }

  /**
   * Select 'Textarea' option from dropdown, trigger delayed enable, wait for textarea to be editable, and fill it.
   * @param text - The text to enter into the textarea
   */
  async selectTextareaOptionAndEnterText(text: string): Promise<void> {
    await this.dropDownMenu.selectOption({ label: 'Textarea' });
    await this.buttonApply10s.click();
    await waitForElementState(this.textArea, 'editable');
    await this.textArea.click();
    await this.textArea.fill(text);
  }

  /**
   * Select 'Select' option from dropdown, trigger delayed action, wait for the select element to be visible, and select an item.
   * @param item - The item to select (from AvailableItems)
   */
  async selectSelectOptionAndSelectItem(item: AvailableItems): Promise<void> {
    await this.dropDownMenu.selectOption({ label: 'Select' });
    await this.buttonApply3s.click();
    await waitForElementState(this.itemSelector, 'visible');
    await this.itemSelector.selectOption({ label: item });
  }

  /**
   * Select 'Label' option from dropdown, trigger delayed action, wait for label to be visible, and click it.
   */
  async selectLabelOptionAndClickLabel(): Promise<void> {
    await this.dropDownMenu.selectOption({ label: 'Label' });
    await this.buttonApply5s.click();
    await waitForElementState(this.labelPlayground, 'visible');
    await this.labelPlayground.click();
  }
}
