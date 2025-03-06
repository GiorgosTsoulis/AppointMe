import { test, expect } from '@playwright/test';

test('Full Client flow: Signup, Signin, Book Appointment, View Appointments, Logout', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    // Step 1: Signup
    await test.step('Signup', async () => {
        await page.goto('http://localhost:3000/auth/signup');
        await page.getByRole('textbox', { name: 'username' }).fill('giorgakis');
        await page.getByRole('textbox', { name: 'password' }).fill('giorgakis');
        await page.getByRole('combobox').selectOption('Customer');
        await page.getByRole('button', { name: 'Sign Up' }).click();
        await expect(page).toHaveURL('http://localhost:3000/');
        await expect(page.getByText('AppointMeMy')).toBeVisible();
    });

    // Save session state
    await page.context().storageState({ path: 'state.json' });

    // Step 2: Logout after Signup
    await test.step('Logout after Signup', async () => {
        await page.getByRole('link', { name: 'giorgakis' }).click();
        await expect(page).toHaveURL('http://localhost:3000/profile');
        await page.getByRole('button', { name: 'Logout' }).click();
        await expect(page).toHaveURL('http://localhost:3000/auth/signin');
    });

    // Step 3: Signin
    await test.step('Signin', async () => {
        await page.goto('http://localhost:3000/auth/signin');
        await page.getByRole('textbox', { name: 'username' }).fill('giorgakis');
        await page.getByRole('textbox', { name: 'password' }).fill('giorgakis');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await expect(page).toHaveURL('http://localhost:3000/');
    });

    // Save session state again
    await page.context().storageState({ path: 'state.json' });

    // Step 4: Book Appointment
    await test.step('Book Appointment', async () => {
        await page.goto('http://localhost:3000/');
        await page.getByLabel('location').selectOption('Athens');
        await page.getByLabel('service').selectOption('Barber');
        await page.getByRole('button', { name: 'Search' }).click();
        await page.getByRole('button', { name: 'Book' }).click();
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

    // Step 5: View Appointments
    await test.step('View Appointments', async () => {
        await page.goto('http://localhost:3000/');
        await page.getByRole('link', { name: 'My Appointments' }).click();
        await expect(page.getByRole('heading', { name: 'Pending Appointments' })).toBeVisible();
        await expect(page.getByText('March 27, 2025 || 01:30 PMBarbershopLocation: AthensService: Beard TrimStaff:')).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Upcoming Appointments' })).toBeVisible();
    });

    // Step 6: Final Logout
    await test.step('Final Logout', async () => {
        await page.getByRole('link', { name: 'giorgakis' }).click();
        await expect(page).toHaveURL('http://localhost:3000/profile');
        await page.getByRole('button', { name: 'Logout' }).click();
        await expect(page).toHaveURL('http://localhost:3000/auth/signin');
    });

    // Close context
    await context.close();
});
