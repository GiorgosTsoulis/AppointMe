import { test, expect } from '@playwright/test';
import { appendFile } from 'fs';

test('signup', async ({ page }) => {
    await page.pause();
    await page.goto('http://localhost:3000/auth/signup');
    await expect(page.locator('#root div').filter({ hasText: 'Create an accountEnter' }).nth(3)).toBeVisible();
    await page.getByRole('textbox', { name: 'username' }).click();
    await page.getByRole('textbox', { name: 'username' }).fill('antonis');
    await expect(page.getByRole('textbox', { name: 'username' })).toHaveValue('antonis');
    await page.getByRole('textbox', { name: 'password' }).click();
    await page.getByRole('textbox', { name: 'password' }).fill('password');
    await expect(page.getByRole('textbox', { name: 'password' })).toHaveValue('password');
    await page.getByRole('combobox').selectOption('Customer');
    await expect(page.getByRole('combobox')).toHaveValue('Customer');
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL('http://localhost:3000/');
});