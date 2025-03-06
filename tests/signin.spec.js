import { test, expect } from '@playwright/test';

// SignIn test
test('signin', async ({ page }) => {
    await page.goto('http://localhost:3000/auth/signin');
    await page.getByRole('textbox', { name: 'username' }).click();
    await page.getByRole('textbox', { name: 'username' }).fill('giorgakis');
    await page.getByRole('textbox', { name: 'password' }).click();
    await page.getByRole('textbox', { name: 'password' }).fill('giorgakis');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page).toHaveURL('http://localhost:3000/');

    // Save the state to a file
    await page.context().storageState({ path: 'state.json' });
});

