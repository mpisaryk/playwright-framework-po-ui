import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';
import path from 'path';
import { EXPECTED_FILE_NAME } from '../test-data/TestData';
import { EXPECTED_FILE_UPLOAD_SUCCESS_MESSAGE } from '../test-data/TestData';

test('File Upload', async ({ page }) => {
  // Initialize the Page Manager to work with Page Objects
  const pm = new PageManager(page);

  const filePath: string = path.resolve(__dirname, '../test-data/UploadTextFile.txt');

  // Navigate to the Home page
  await pm.onHomePage().goToHomePage();

  // Click on the link to open the 'File Upload' page
  await pm.onHomePage().openFileUploadPage();

  // Verify that the header of the 'File Upload' page is visible
  await expect(pm.onFileUploadPage().headerFileUploadPage).toBeVisible();

  // Upload the file
  await pm.onFileUploadPage().uploadFile(filePath);

  // Verify that the uploaded file name is displayed correctly
  await expect(pm.onFileUploadPage().fileNameInfo()).toHaveText(EXPECTED_FILE_NAME);

  // Verify that the success message for file upload is displayed correctly
  await expect(pm.onFileUploadPage().successInfo()).toHaveText(
    EXPECTED_FILE_UPLOAD_SUCCESS_MESSAGE,
  );
});
