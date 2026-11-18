import {test, expect} from "@playwright/test"
test.describe("Login suite",()=>{
  test("Open the app",async({page}) =>{
  await page.goto("https://demoqa.com/")
  })
  })
