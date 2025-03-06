import { test, expect } from '@playwright/test';

test('logout', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await expect(page.getByText('antonis')).toBeVisible();
    await page.getByRole('link', { name: 'antonis' }).click();
    await expect(page.getByText('User ProfileUsername:')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
    await page.getByRole('button', { name: 'Logout' }).click();
    await expect(page.getByText('Sign in to your accountEnter username and passwordUsernamePasswordSign inDon\'t')).toBeVisible();
    await page.expect(page.getByRole('link', { name: 'antonis' })).not.toBeVisible();
});