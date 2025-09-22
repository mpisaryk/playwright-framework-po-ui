import { expect, test } from '@playwright/test';
import { PageManager } from '../page-objects/PageManager';
import { faker } from '@faker-js/faker';

test('Overlapped Element', async ({ page }) => {
    // Initialize the Page Manager
    const pm = new PageManager(page);

    // Generate a unique name for Playground using Faker
    // faker.company.buzzNoun() generates a random buzz noun that can be used to demonstrate data being viewed by a manager.
    const playgroundName = faker.company.buzzNoun();

    // Navigate to the Home page
    await pm.onHomePage().goToHomePage();

    // Click on the link to open the "Overlapped Element" page
    await pm.onHomePage().clickOverlappedElement();

    // Verify that the header of the "Overlapped Element" page is visible
    await expect(pm.onOverlappedElementPage().overlappedElementHeader).toBeVisible();

    // Scroll the Name input field into view
    await pm.onOverlappedElementPage().scrollToNameInput();

    // Fill the Name input field with the generated Playground name
    await pm.onOverlappedElementPage().nameInputField.fill(playgroundName);

    // Verify that the text was entered correctly.
    await expect(pm.onOverlappedElementPage().nameInputField).toHaveValue(playgroundName);
});
