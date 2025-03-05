import {test, expect} from '@playwright/test';


test('Handling Alerts', async ({page}) => {
    await page.goto('http://127.0.0.1:5500/tests/workshop_4/index.html');
    let alertMessage = '';
    page.on('dialog', async(dialog) => {
        expect(dialog.type()).toBe('alert');
        alertMessage = await dialog.message();
        await dialog.accept();
    })
await page.click('#show-alert');
expect (alertMessage).toBe('This is a simple alert.');
})

test('Confirm Alert', async ({page})=> {
    await page.goto('http://127.0.0.1:5500/tests/workshop_4/index.html');
    let alertMessage = '';
    page.on('dialog', async(dialog) => {
        alertMessage = dialog.message();
        await dialog.dismiss();
    })

    await page.click('#show-confirm');
    expect (alertMessage).toBe('You clicked Cancel.');
})

test('Handling Pop-Ups', async ({page}) => {
    await page.goto('http://127.0.0.1:5500/tests/workshop_4/index.html');
    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.click('#open-popup'),
    ]);

    await popup.waitForLoadState();

    // if(popup.url() === 'example url')
})