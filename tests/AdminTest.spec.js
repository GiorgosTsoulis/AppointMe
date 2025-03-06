import { test, expect } from '@playwright/test';

test('Full Admin Flow: Sign-in, Logout, Sign-in Again, Add-Edit-Delete a Service, Add-Edit-Delete a Staff  Final Logout', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    // Step 1: Sign-in
    await test.step('Sign-in as Admin', async () => {
        await page.goto('http://localhost:3000/auth/signin');
        await expect(page.getByText("Sign in to your accountEnter username and passwordUsernamePasswordSign inDon't")).toBeVisible();
        await page.getByRole('textbox', { name: 'username' }).fill('giorgos');
        await page.getByRole('textbox', { name: 'password' }).fill('mypassword');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await expect(page).toHaveURL('http://localhost:3000/');
        await expect(page.getByText('My StoreMy Store Appointmentsgiorgos')).toBeVisible();
    });

    // Save session state
    await page.context().storageState({ path: 'state.json' });

    // Step 2: Logout
    await test.step('Logout after First Sign-in', async () => {
        await page.getByRole('link', { name: 'giorgos' }).click();
        await expect(page).toHaveURL('http://localhost:3000/profile');
        await expect(page.locator('div').filter({ hasText: 'User ProfileUsername:' }).nth(2)).toBeVisible();
        await page.getByRole('button', { name: 'Logout' }).click();
        await expect(page).toHaveURL('http://localhost:3000/auth/signin');
        await expect(page.getByText("Sign in to your accountEnter username and passwordUsernamePasswordSign inDon't")).toBeVisible();
    });

    // Step 3: Sign-in Again
    await test.step('Sign-in Again as Admin', async () => {
        await page.goto('http://localhost:3000/auth/signin');
        await expect(page.getByText("Sign in to your accountEnter username and passwordUsernamePasswordSign inDon't")).toBeVisible();
        await page.getByRole('textbox', { name: 'username' }).fill('giorgos');
        await page.getByRole('textbox', { name: 'password' }).fill('mypassword');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await expect(page).toHaveURL('http://localhost:3000/');
        await expect(page.getByText('My StoreMy Store Appointmentsgiorgos')).toBeVisible();

    });

    // Save session state
    await page.context().storageState({ path: 'state.json' });


    // Step 4: Add,Edit,Delete a Service
    await test.step('Add-Edit-Delete a Service', async () => {
        await page.goto('http://localhost:3000/');
        await expect(page.locator('div').filter({ hasText: /^Book your appointments with ease$/ })).toBeVisible();
        await page.getByRole('link', { name: 'My Store', exact: true }).click();
        await expect(page).toHaveURL('http://localhost:3000/mystore');
        await expect(page.getByText('Store InfoStore Name:')).toBeVisible();
        await expect(page.getByText('Add ServiceName:Price:')).toBeVisible();
        await page.getByRole('textbox', { name: 'Name:', exact: true }).click();
        await page.getByRole('textbox', { name: 'Name:', exact: true }).fill('S');
        await page.getByRole('textbox', { name: 'Name:', exact: true }).press('CapsLock');
        await page.getByRole('textbox', { name: 'Name:', exact: true }).fill('Shower');
        await page.getByRole('spinbutton', { name: 'Price:' }).click();
        await page.getByRole('spinbutton', { name: 'Price:' }).fill('5');
        await page.getByRole('spinbutton', { name: 'Duration (hours):' }).click();
        await page.getByRole('spinbutton', { name: 'Duration (hours):' }).fill('1');
        await page.getByRole('button', { name: 'Add Service' }).click();
        await page.getByRole('button', { name: 'Edit' }).nth(1).click();
        await expect(page.getByText('Edit ServiceName:Price:')).toBeVisible();
        await expect(page.getByRole('textbox', { name: 'Name:', exact: true })).toHaveValue('Shower');
        await expect(page.getByRole('spinbutton', { name: 'Price:' })).toHaveValue('5.00');
        await expect(page.getByRole('spinbutton', { name: 'Duration (hours):' })).toHaveValue('1');
        await page.getByRole('spinbutton', { name: 'Price:' }).click();
        await page.getByRole('spinbutton', { name: 'Price:' }).fill('8');
        await page.getByRole('button', { name: 'Update Service' }).click();
        await expect(page.getByText('Services:Beard Trim || Cost:')).toBeVisible();
        await page.getByRole('button', { name: 'Delete' }).nth(1).click();
        await expect(page.getByText('Services:Beard Trim || Cost:')).toBeVisible();
    });

    //Step 5: Add-Edit-Delete a Staff Member
    await test.step('Add-Edit-Delete a Staff', async () => {
        await expect(page.getByText('Add StaffUsername:Service')).toBeVisible();
        await page.getByRole('textbox', { name: 'Username:' }).click();
        await page.getByRole('textbox', { name: 'Username:' }).fill('nikos');
        await page.getByRole('textbox', { name: 'Service Name:' }).click();
        await page.getByRole('textbox', { name: 'Service Name:' }).press('CapsLock');
        await page.getByRole('textbox', { name: 'Service Name:' }).fill('H');
        await page.getByRole('textbox', { name: 'Service Name:' }).press('CapsLock');
        await page.getByRole('textbox', { name: 'Service Name:' }).fill('Haircut');
        await page.getByRole('button', { name: 'Add Staff' }).click();
        await expect(page.getByText('Staff:nikos || Service Type:')).toBeVisible();
        await page.getByRole('button', { name: 'Edit' }).nth(2).click();
        await expect(page.getByText('Edit StaffUsername:Service')).toBeVisible();
        await page.getByRole('textbox', { name: 'Service Name:' }).click();
        await page.getByRole('textbox', { name: 'Service Name:' }).fill('');
        await page.getByRole('textbox', { name: 'Service Name:' }).press('CapsLock');
        await page.getByRole('textbox', { name: 'Service Name:' }).fill('B');
        await page.getByRole('textbox', { name: 'Service Name:' }).press('CapsLock');
        await page.getByRole('textbox', { name: 'Service Name:' }).fill('Beard');
        await page.getByRole('textbox', { name: 'Service Name:' }).press('CapsLock');
        await page.getByRole('textbox', { name: 'Service Name:' }).fill('Beard T');
        await page.getByRole('textbox', { name: 'Service Name:' }).press('CapsLock');
        await page.getByRole('textbox', { name: 'Service Name:' }).fill('Beard Trim');
        await page.getByRole('button', { name: 'Update Staff' }).click();
        await page.getByRole('button', { name: 'Delete' }).nth(2).click();
    });

    // Step 6: Final Logout
    await test.step('Final Logout', async () => {
        await page.getByRole('link', { name: 'giorgos' }).click();
        await expect(page).toHaveURL('http://localhost:3000/profile');
        await expect(page.locator('div').filter({ hasText: 'User ProfileUsername:' }).nth(2)).toBeVisible();
        await page.getByRole('button', { name: 'Logout' }).click();
        await expect(page).toHaveURL('http://localhost:3000/auth/signin');
        await expect(page.getByText("Sign in to your accountEnter username and passwordUsernamePasswordSign inDon't")).toBeVisible();
    });

    // Close the context
    await context.close();
});
