import {test,expect} from "@playwright/test";
test.describe("This test suite is to handle alerts, confirmation and prompts",async()=>{
test("Handling alerts",async({page})=>{
    await page.goto("https://demoqa.com/alerts");
    page.on("dialog",async(dialog)=>{
        console.log(dialog.message());
        await dialog.accept();
    })
    await page.locator('#alertButton').click();
})

test("Handling Alert with time",async({page})=>{
    await page.goto("https://demoqa.com/alerts");
    page.on("dialog",async(dialog)=>{
        console.log(dialog.message());
        await dialog.accept();
    })
    await page.locator("#timerAlertButton").click();
})
test("Handling confirm accept",async({page})=>{
    await page.goto("https://demoqa.com/alerts");
    page.on('dialog',async(dialog)=>{
        console.log(dialog.message())
        await dialog.accept();
    })
    await page.locator("#confirmButton").click();
    expect(page.locator("div.col-md-6").nth(3)).toContainText("You selected Ok");
})
test("Handling confirm Dismiss",async({page})=>{
    await page.goto("https://demoqa.com/alerts");
    page.on('dialog',async(dialog)=>{
        console.log(dialog.message())
        await dialog.dismiss();
    })
    await page.locator("#confirmButton").click();
})
test("Handling Prompt button",async({page})=>{
    await page.goto("https://demoqa.com/alerts");
    page.on("dialog",async(dialog)=>{
        console.log(dialog.message());
        await dialog.accept("Ross");
    })
    await page.locator("#promtButton").click();
    await expect(page.locator("#promptResult")).toHaveText("You entered Ross")
    
})
})