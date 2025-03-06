import { test, expect } from '@playwright/test';

test('signin', async ({ page }) => {
    await page.goto('http://localhost:3000/auth/signin');
    await page.getByRole('textbox', { name: 'username' }).click();
    await page.getByRole('textbox', { name: 'username' }).fill('giorgos');
    await page.getByRole('textbox', { name: 'password' }).click();
    await page.getByRole('textbox', { name: 'password' }).fill('mypassword');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page).toHaveURL('http://localhost:3000/');
});