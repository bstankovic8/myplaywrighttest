import {test, expect } from '@playwright/test'
import { PageObject } from './page/Page'
import * as testData from './testData.json'

test.describe('Sample Test', ()=>{
    let pageObject: PageObject;

    test.beforeEach(async ({ browser })=>{
        const page = await browser.newPage()
        pageObject = new PageObject(page);
        await pageObject.open('http://127.0.0.1:5500/tests/workshop_8/index.html');
    })
    for(const data of Object.values(testData)) {
        if(data.testName === "Test-1 Fill Input" || data.testName === "Test-1 Negative Input"){
            test(data.testName, async () => {
                await pageObject.fillFirstName(data.firstName);
                await pageObject.fillAge(data.age);
                if(data.isStudent){
                    await pageObject.checkIsStudent();
                }
                await pageObject.applyData()

        expect(await pageObject.text(pageObject.displayFirstName)).toBe(data.expectedFirsmName)
        expect(await pageObject.text(pageObject.displayAge)).toBe(data.expectedAge)
        console.log(data.expectedIsStudent)
        expect(await pageObject.text(pageObject.displayIsStudent)).toBe(data.expectedIsStudent)
            })
        }
    }
    
    })