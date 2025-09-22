import { expect, test } from '@playwright/test';

test.describe('UI Tests Examples', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Text Input', async ({ page }) => {
        const textInput = page.getByRole('link', { name: 'Text Input' });
        await textInput.click();
        const textInputHeader = page.getByRole('heading', { name: 'Text Input' });
        await expect(textInputHeader).toBeVisible();

        const buttonNameInput = page.getByPlaceholder('MyButton');
        const buttonWithChangeableName = page.locator('#updatingButton');

        await buttonNameInput.click();
        await page.keyboard.type('Test Button');
        await buttonWithChangeableName.click();
        await expect(buttonWithChangeableName).toHaveText('Test Button');
    });

    test('Progress Bar', async ({ page }) => {
        const textInput = page.getByRole('link', { name: 'Progress Bar' });
        await textInput.click();
        const textInputHeader = page.getByRole('heading', { name: 'Progress Bar' });
        await expect(textInputHeader).toBeVisible();

        const startButton = page.getByRole('button', { name: 'Start' });
        const stopButton = page.getByRole('button', { name: 'Stop' });
        const progressBar = page.locator('#progressBar');

        await startButton.click();
        await page.waitForFunction(
            (el) => Number(el.getAttribute('aria-valuenow')) >= 75,
            await progressBar.elementHandle(),
        );
        await stopButton.click();

        const finalProgressBarValue = Number(await progressBar.getAttribute('aria-valuenow'));
        expect(finalProgressBarValue).toBe(75);
    });
});
