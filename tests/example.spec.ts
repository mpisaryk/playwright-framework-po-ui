import { expect, test } from '@playwright/test';

test.describe('UI Tests Examples', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Overlapped Element test', async ({ page }) => {
        const overlappedElement = page.locator('h3 > a').filter({ hasText: 'Overlapped Element' });
        await overlappedElement.click();
        const overlappedElementHeader = page.getByRole('heading', { name: 'Overlapped Element' });
        await expect(overlappedElementHeader).toBeVisible();

        const inputNameField = page.getByPlaceholder('Name');
        const elementHandle = await inputNameField.elementHandle();
        await page.evaluate((el) => el.scrollIntoView({ block: 'center' }), elementHandle);
        // await inputNameField.hover();
        // await page.mouse.wheel(0, 16);
        await expect(inputNameField).toBeVisible();
        await inputNameField.fill('Misha');
        await expect(inputNameField).toHaveValue('Misha');
    });

    test('AJAX Data test', async ({ page }) => {
        const ajaxData = page.locator('h3 > a').filter({ hasText: 'AJAX DATA' });
        await ajaxData.click();
        const ajaxDataHeader = page.getByRole('heading', { name: 'AJAX Data' });
        await expect(ajaxDataHeader).toBeVisible();

        const buttonAjaxTrigger = page.getByRole('button', {
            name: 'Button Triggering AJAX Request',
        });
        await buttonAjaxTrigger.click();
        const successLabel = page
            .locator('#content p')
            .filter({ hasText: 'Data loaded with AJAX get request.' });
        await expect(successLabel).toBeVisible({ timeout: 16000 });
        await successLabel.click();
    });

    test('Visibility test', async ({ page }) => {
        const visibility = page.locator('h3 > a').filter({ hasText: 'Visibility' });
        await visibility.click();
        const hideButton = page.getByRole('button', { name: 'Hide' });
        const removedButton = page.getByRole('button', { name: 'Removed' });
        const zeroWidthButton = page.getByRole('button', { name: 'Zero Width' });
        const overlappedButton = page.getByRole('button', { name: 'Overlapped' });
        const opacity0Button = page.getByRole('button', { name: 'Opacity 0' });
        const visibilityHiddenButton = page.getByRole('button', { name: 'Visibility Hidden' });
        const displayNoneButton = page.getByRole('button', { name: 'Display None' });
        const offscreenButton = page.getByRole('button', { name: 'Offscreen' });

        // Click Hide button to trigger visibility changes
        await hideButton.click();

        // Check visibility of buttons
        await expect(hideButton).toBeVisible(); // Hide button remains visible

        await expect(removedButton).toBeHidden();
        await expect(zeroWidthButton).toBeHidden();
        //1
        const overlappedButtonBox = await overlappedButton.boundingBox();
        const centerX = overlappedButtonBox.x + overlappedButtonBox.width / 2;
        const centerY = overlappedButtonBox.y + overlappedButtonBox.height / 2;
        const topElementId = await page.evaluate(
            ({ x, y }) => {
                return document.elementFromPoint(x, y)?.id;
            },
            { x: centerX, y: centerY },
        );
        expect(topElementId).not.toBe('overlappedButton');
        await expect(async () => {
            await overlappedButton.click({ trial: true });
        }).rejects.toThrow(); // check that the button cannot be clicked by a user

        //!!!!fix the rest of buttons
        await expect(opacity0Button).toHaveCount(1);
        await expect(opacity0Button).toHaveCSS('opacity', '0');
        await expect(async () => {
            await opacity0Button.click({ trial: true });
        }).rejects.toThrow();
        await expect(visibilityHiddenButton).toBeHidden();
        await expect(displayNoneButton).toBeHidden();
        await expect(offscreenButton).toBeHidden();
    });
});
