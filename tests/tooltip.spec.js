import {test,expect} from "@playwright/test"

test.describe("Tooltip suite", async()=>{
    test("tool tip test",async({page})=>{
        await page.goto("https://demoqa.com/tool-tips");
        await page.locator("#toolTipButton").hover();
        await expect(page.locator("div.tooltip-inner")).toBeVisible();
        await expect(page.locator("div.tooltip-inner")).toHaveText("You hovered over the Button");

    })
})