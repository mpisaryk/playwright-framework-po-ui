import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';

test('Non-Breaking Space', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Click on the link to open the 'Shadow Dom' page
  await pm.onHomePage().clickShadowDomLink();

  // Verify that the header of the 'Shadow Dom' page is visible
  await expect(pm.onShadowDomPage().headerShadowDom).toBeVisible();

  // Click the button to generate a GUID
  await pm.onShadowDomPage().generateGUID();

  // Click the button to copy the generated GUID to the clipboard
  await pm.onShadowDomPage().copyGUID();

  // Retrieve the GUID value from the clipboard
  const clipboardGUID = await pm.onShadowDomPage().getClipboardGUID();

  // Verify that the input field contains the same GUID that was copied
  await expect(pm.onShadowDomPage().fieldGUID).toHaveValue(clipboardGUID);
});
