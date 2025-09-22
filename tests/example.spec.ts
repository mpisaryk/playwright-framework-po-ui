import { expect, test } from '@playwright/test';

test.describe('UI Tests Examples', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    
    test('Dynamic Table', async ({ page }) => {
        const dynamicTable = page.getByRole('link', { name: 'Dynamic Table' });
        await dynamicTable.click();
        const dynamicTableHeader = page.getByRole('heading', { name: 'Dynamic Table' });
        await expect(dynamicTableHeader).toBeVisible();

        const cpuIndex = await page
            .locator('[role="columnheader"]')
            .evaluateAll((headers) =>
                headers.findIndex((header) => header.textContent?.trim() === 'CPU'),
            );
        const chromeRow = page.locator('[role="row"]', { hasText: 'Chrome' });
        const cpuValue = await chromeRow.locator('[role="cell"]').nth(cpuIndex).innerText();
        const cpuValueNumber = cpuValue.match(/(\d+(\.\d+)?)%/)?.[1];

        const yellowLabel = page.locator('p.bg-warning');
        const yellowLabelText = await yellowLabel.innerText();
        const yellowCpuValue = yellowLabelText.match(/(\d+(\.\d+)?)%/)?.[1];

        expect(cpuValueNumber).toEqual(yellowCpuValue);
    });

    // note for me - rewrite with env variables
    test('Sample App', async ({ page }) => {
        const sampleApp = page.getByRole('link', { name: 'Sample App' });
        await sampleApp.click();
        const sampleAppHeader = page.getByRole('heading', { name: 'Sample App' });
        await expect(sampleAppHeader).toBeVisible();

        const userNameInput = page.getByPlaceholder('User Name');
        const passwordInput = page.getByPlaceholder('********');
        const logInButton = page.getByRole('button', { name: 'Log In' });

        await userNameInput.fill('Misha');
        // const userNameValue = userNameInput.inputValue();
        // await expect(userNameValue).toHaveText('Misha');

        await passwordInput.fill('pwd');
        // const passwordInputValue = passwordInput.inputValue();
        // await expect(passwordInputValue).toHaveValue('pwd');

        await logInButton.click();
        const loginStatus = page.locator('#loginstatus');
        await expect(loginStatus).toHaveText('Welcome, Misha!');
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
