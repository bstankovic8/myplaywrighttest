import {test, expect } from '@playwright/test'

test('Automatng From Submissions @githubAction', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/')

    const newTodo = await page.getByPlaceholder('What needs to be done?');
    await newTodo.fill('Joe Doe');
    await newTodo.press('Enter');
    await newTodo.fill('Joe Doe');
    await newTodo.press('Enter');

    const firstTodo = await page.getByTestId('todo-item').nth(0);
    await firstTodo.getByRole('checkbox').check();
    const secontTodo = await page.getByTestId('todo-item').nth(1);

    await expect(firstTodo).toHaveClass('completed');
    await expect(secontTodo).not.toHaveClass('completed'); 
})

test.only('Handling From @githubAction', async({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.fill('[placeholder="What needs to be done?"]', 'John');
    await page.locator('[placeholder="What needs to be done?"]').press('Enter');

    const checkbox = await page.locator('.toggle')
    await checkbox.check();
})