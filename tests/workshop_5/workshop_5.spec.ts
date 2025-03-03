import { test, expect } from "@playwright/test";

test.skip('Open New Window And Naviagte Back', async ({context, page}) => {
    await page.goto('http://127.0.0.1:5500/tests/workshop_5/index.html');
    const pagePromise = context.waitForEvent('page');
    await page.click('#openNewWindow');
    const NewPage = await pagePromise;
    await NewPage.waitForLoadState();
    console.log(await NewPage.title());
    await expect (NewPage.getByRole('heading', {name: 'Welcome to the New Page'})).toBeVisible();
});

test.skip('Add cookie', async ({page}) => {
    await page.goto('http://127.0.0.1:5500/tests/workshop_5/index.html');
    await page.click('#setCookie');
    const cookies = await page.context().cookies('http://127.0.0.1:5500/tests/workshop_5/index.html'); //url se stavi, da kao parametar
    const sessionCookie = cookies.find(cookies => cookies.name === 'session');
    console.log(sessionCookie);
    await expect (sessionCookie).toBeDefined();
})

test.skip('Delete cookie', async ({page}) => {
    await page.goto('http://127.0.0.1:5500/tests/workshop_5/index.html');
    await page.click('#setCookie');
    const cookies = await page.context().cookies('http://127.0.0.1:5500/tests/workshop_5/index.html'); //url se stavi, da kao parametar
    const sessionCookie = cookies.find(cookies => cookies.name === 'session');
    console.log('Session cookie', sessionCookie);
    await page.click('#deleteCookie');
    const deleteCookies = await page.context().cookies('http://127.0.0.1:5500/tests/workshop_5/index.html');
    const deletedSessionCookie = deleteCookies.find(cookies => cookies.name === 'session');
    console.log('Session cookie', deletedSessionCookie);
    await expect (deletedSessionCookie).toBeUndefined();
})
