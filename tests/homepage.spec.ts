import { test, expect } from '@playwright/test';

test('Verify TodoMVC homepage', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');

    // Verify the application heading is visible
    await expect(
        page.getByRole('heading', { name: 'todos' })
    ).toBeVisible();

    // Verify the task input is visible
    await expect(
        page.getByPlaceholder('What needs to be done?')
    ).toBeVisible();
});