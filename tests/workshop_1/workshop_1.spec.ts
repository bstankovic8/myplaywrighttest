import { test } from 'playwright/test';

test('Basic Navigation', async ({page}) => {
    await page.goto('https://github.com/');
    await page.waitForTimeout(3000);
    await page.reload();
})

test('test', async ({ page }) => {
    await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('stankovicborislav8@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('SmarasVise1');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
});

test('Using Various Locator Method', async ({page}) => {
    await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('stankovicborislav8@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('SmarasVise1');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
})
