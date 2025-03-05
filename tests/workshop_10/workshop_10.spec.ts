import {test, expect} from "@playwright/test"

test('Interact with elements', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');

})

test('Screenshoot', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.screenshot({path: 'fail.png'});
    await page.goto('https://demo.playwright.dev/todomvc/#/');

})

test('Flaky test', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');

    page.on('response', (response) => {
        console.log(`Recived from :${response.url}`);
    })


    const flaky = Math.random() < 0.5;
    if (flaky){
        await page.waitForTimeout(1000);
        await page.click('.non-existing-selector');
    }

})