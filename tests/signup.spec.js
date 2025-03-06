import { test, expect } from '@playwright/test';

test('signup', async ({ page }) => {
    await page.goto('http://localhost:3000/auth/signup');
    await page.getByRole('textbox', { name: 'username' }).click();
    await page.getByRole('textbox', { name: 'username' }).fill('giorgakis');
    await page.getByRole('textbox', { name: 'password' }).click();
    await page.getByRole('textbox', { name: 'password' }).fill('giorgakis');
    await page.getByRole('combobox').selectOption('Customer');
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL('http://localhost:3000/');
    await expect(page.getByText('AppointMeMy')).toBeVisible();
    await expect(page.getByText('Book your appointments with')).toBeVisible();

    // Save the state to a file
    await page.context().storageState({ path: 'state.json' });
});