import { test, expect } from '@playwright/test';

//View Appointments test
test('test', async ({ browser }) => {
    const context = await browser.newContext({ storageState: 'state.json' });
    const page = await context.newPage();

    await page.goto('http://localhost:3000/');
    await expect(page.locator('div').filter({ hasText: /^Book your appointments with ease$/ })).toBeVisible();
    await page.getByRole('link', { name: 'My Appointments' }).click();
    await expect(page.getByRole('heading', { name: 'Pending Appointments' })).toBeVisible();
    await expect(page.getByText('March 27, 2025 || 01:30 PMBarbershopLocation: AthensService: Beard TrimStaff:')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Upcoming Appointments' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Cancelled Appointments' })).toBeVisible();
});