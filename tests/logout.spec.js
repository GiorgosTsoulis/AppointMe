import { test, expect } from '@playwright/test';

//Logout test
test('logout', async ({ browser }) => {
    const context = await browser.newContext({ storageState: 'state.json' });
    const page = await context.newPage();
    await page.goto('http://localhost:3000/');
    await page.getByRole('link', { name: 'giorgakis' }).click();
    await expect(page).toHaveURL('http://localhost:3000/profile');
    await expect(page.getByText('User ProfileUsername:')).toBeVisible();
    await page.getByRole('button', { name: 'Logout' }).click();
    await expect(page).toHaveURL('http://localhost:3000/auth/signin');
    await expect(page.getByText('Sign in to your accountEnter username and passwordUsernamePasswordSign inDon\'t')).toBeVisible();

    await context.storageState({ path: 'state.json' });
    await context.close();
});