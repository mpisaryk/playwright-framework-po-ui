import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';
import { TASK_MANAGER_NAME_VALUE } from '../test-data/TestData';

test('Dynamic Table', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Click on the link to open the 'Dynamic Table' page
  await pm.onHomePage().clickDynamicTableLink();

  // Verify that the header of the 'Dynamic Table' page is visible
  await expect(pm.onDynamicTablePage().dynamicTablePageHeader).toBeVisible();

  // Get CPU value for 'Chrome' row
  const chromeCpuValue = await pm.onDynamicTablePage().getCpuValueForRow(TASK_MANAGER_NAME_VALUE);

  // Get CPU value from the yellow label
  const yellowCpuValue = await pm.onDynamicTablePage().getYellowCpuValue();

  // Validate that the CPU value for 'Chrome' in the table matches the CPU value from the yellow label
  expect(chromeCpuValue).toEqual(yellowCpuValue);
});
