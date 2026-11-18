import {test,expect} from "@playwright/test"

test.describe("This is to test the new tabs",async()=>{
    test("new tab",async({page})=>{
        await page.goto("https://demoqa.com/browser-windows");
        const newPagePromise = page.waitForEvent('popup');
        await page.locator("#tabButton").click();
        const newPage = await newPagePromise;
        const title = newPage.title();
        console.log(title);
        await expect(newPage.locator("#sampleHeading")).toHaveText("This is a sample page");
    })
    test("New window",async({page})=>{
        await page.goto("https://demoqa.com/browser-windows");
        const newPageEvent = page.waitForEvent('popup');
        await page.getByRole('button',{name :'New Window',exact :true}).click();
        const newPage = await newPageEvent;
        const title = newPage.title();
        console.log(title);
    })
})