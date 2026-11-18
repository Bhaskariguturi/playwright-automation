import {test, expect} from "@playwright/test"
test.describe("Basic actions",()=>{
  test("Form filling",async({page}) =>{
  await page.goto("https://demoqa.com/");
  await page.goto("https://demoqa.com/automation-practice-form");
  await page.getByRole('link',{name:'Practice Form'}).click();
  await page.locator("#firstName").fill("firstname");
  await page.getByPlaceholder("Last Name").fill("lastName");
  const heading = await page.locator("div h5").innerText();
  await expect(heading).toEqual("Student Registration Form");
  await page.locator("#gender-radio-1").check();
  expect(await page.locator("#gender-radio-1")).toBeChecked();
  await page.locator("#dateOfBirthInput").click();
  await page.locator("select[class='react-datepicker__month-select']").selectOption("March");
  await page.locator("select[class='react-datepicker__year-select']").selectOption("1990");

  })
  })
