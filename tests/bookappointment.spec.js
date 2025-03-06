import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole('link', { name: 'My Appointments' }).click();
    await page.getByRole('link', { name: 'AppointMe', exact: true }).click();
    await page.getByLabel('location').selectOption('Athens');
    await page.getByLabel('service').selectOption('Barber');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('button', { name: 'Book' }).click();
    await page.getByRole('textbox', { name: 'Phone Number' }).click();
    await page.getByRole('textbox', { name: 'Phone Number' }).fill('+306928345198');
    await page.locator('select[name="staff"]').selectOption('d9c79ba4-3da4-41b9-ad87-996d196ddb76');
    await page.locator('select[name="service"]').selectOption('ec8ad1dc-2a3d-453d-a9e0-22166f887b97');
    await page.locator('input[name="date"]').fill('2025-03-27');
    await page.locator('#time').selectOption('09:30');
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => { });
    });
    await page.getByRole('button', { name: 'Book Appointment' }).click();
    await expect(page.locator('div').filter({ hasText: /^Book your appointments with ease$/ })).toBeVisible();
});