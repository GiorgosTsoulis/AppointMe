import { test, expect } from '@playwright/test';


//Book Appointment test
test('bookappointment', async ({ browser }) => {
    const context = await browser.newContext({ storageState: 'state.json' });
    const page = await context.newPage();

    await page.goto('http://localhost:3000/');
    await expect(page.locator('div').filter({ hasText: /^Book your appointments with ease$/ })).toBeVisible();
    await page.getByLabel('location').selectOption('Athens');
    await page.getByLabel('service').selectOption('Barber');
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.locator('div').filter({ hasText: /^BarbershopStore: BarbershopLocation: AthensService: BarberBook$/ }).nth(2)).toBeVisible();
    await page.getByRole('button', { name: 'Book' }).click();
    await expect(page).toHaveURL('http://localhost:3000/store/10ae4439-1164-49e1-a0c0-5e617c212wd3/book');
    await expect(page.locator('div').filter({ hasText: 'Book an AppointmentNamePhone' }).nth(2)).toBeVisible();
    await page.getByRole('textbox', { name: 'Phone Number' }).click();
    await page.getByRole('textbox', { name: 'Phone Number' }).fill('+306978234123');
    await page.locator('select[name="staff"]').selectOption('d9c79ba4-3da4-41b9-ad87-996d196ddb76');
    await page.locator('select[name="service"]').selectOption('10ae4439-1164-49e1-a0c0-5e617c212df4');
    await page.locator('input[name="date"]').fill('2025-03-27');
    await page.locator('#time').selectOption('13:30');
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => { });
    });
    await page.getByRole('button', { name: 'Book Appointment' }).click();
    await expect(page.locator('div').filter({ hasText: /^Book your appointments with ease$/ })).toBeVisible();
});