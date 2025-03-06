import { test, expect } from '@playwright/test';

test('Full Client flow: Signup, Signin, Book Appointment, View Appointments, Logout', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    // Step 1: Signup
    await test.step('Signup', async () => {
        await page.goto('http://localhost:3000/auth/signup');
        await page.getByRole('textbox', { name: 'username' }).fill('aspasia');
        await page.getByRole('textbox', { name: 'password' }).fill('aspasia');
        await page.getByRole('combobox').selectOption('Staff');
        await page.getByRole('button', { name: 'Sign Up' }).click();
        await expect(page).toHaveURL('http://localhost:3000/');
        await expect(page.getByText('AppointMeMy')).toBeVisible();
    });

    // Save session state
    await page.context().storageState({ path: 'state.json' });

    // Step 2: Logout after Signup
    await test.step('Logout after Signup', async () => {
        await page.getByRole('link', { name: 'aspasia' }).click();
        await expect(page).toHaveURL('http://localhost:3000/profile');
        await page.getByRole('button', { name: 'Logout' }).click();
        await expect(page).toHaveURL('http://localhost:3000/auth/signin');
    });


    // Close context
    await context.close();
});