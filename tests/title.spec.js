import {test,expect} from "@playwright/test"

test.describe("Title test",async()=>{
test("Check title",async({page})=>{
  await page.goto("https://playwrightlab.github.io/");
  const title = await page.title();
  console.log(title);
  expect(title).toBe("PlayLab — Playwright Practice Arena");
})
})