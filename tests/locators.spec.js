import { test, expect } from '@playwright/test';

test.describe("Programs on loactors",async()=>{

// Write a Playwright test that:
// 1. Opens the login page.
// 2. Enters username as admin.
// 3. Enters password as admin123.
// 4. Clicks the Login button.
// 5. Verifies that Login Successful is displayed.    
// test('Login functionality', async ({ page }) => {
//     await page.goto('https://example.com/login');
//     await page.locator('#username').fill('admin');
//     await page.locator('#password').fill('admin123');
//     await page.locator('#login').click();
//     await expect(page.locator('#message'))
//         .toHaveText('Login Successful');
// });

test("example on selecting drop down",async({page})=>{
//     Write Playwright code to:
// 1. Locate the country dropdown.
// 2. Select India using its value.
// 3. Verify that India is selected.
// 4. Select USA using its visible text.
// 5. Verify that USA is selected.
    await page.goto("file:///D:/Learning/example%20pages/dropdown.html");
    const dropdownLocator = await page.locator("#country")
    await dropdownLocator.selectOption("IN");
    expect(dropdownLocator).toHaveValue("IN");
    await dropdownLocator.selectOption({label:'USA'})
    expect(dropdownLocator).toHaveValue("US");
    const selectedText = await page.locator('#country option:checked').textContent();
    expect(selectedText).toBe('USA');
    const selectedText2 = await page.locator('#country').evaluate(
    element => element.selectedOptions[0].text
);
    expect(selectedText2).toBe('USA');
})
    test("Check box and radio button",async({page})=>{
// Write Playwright code to:
// 1. Select Java checkbox.
// 2. Select Python checkbox.
// 3. Verify both checkboxes are checked.
// 4. Select Male radio button.
// 5. Verify Male is selected.
// 6. Uncheck Python.
// 7. Verify Python is unchecked.
   await page.goto("file:///D:/Learning/example%20pages/checkbox_radiobuttons.html");
   await page.locator("#java").check();
   await page.locator('#python').check();
   await expect(page.locator("#java")).toBeChecked();
   await expect(page.locator("#python")).toBeChecked();
   await page.locator("input[value='male']").check();
   await expect(page.locator("input[value='male']")).toBeChecked();
   await page.locator('#python').uncheck();
   await expect(page.locator("#python")).not.toBeChecked();
   await page.locator('#java').setChecked(true);
})
 test("duplicate elements",async({page})=>{
//     Write Playwright code to:
// 1. Find how many products are available.
// 2. Click Add to Cart for iPhone only.
// 3. Verify that the iPhone product contains the Add to Cart button.
// 4. Print the names of all three products.
    await page.goto("file:///D:/Learning/example%20pages/duplicate%20elements.html");
    const products = await page.locator(".product").count();
    console.log(`The total products are ${products}`);
    const iphone = page.locator(".product")
    .filter({ hasText: "iPhone" });
    await iphone.locator("button").click();
    expect (await iphone.locator('h3').textContent()).toBe('iPhone');
    expect (await iphone.locator('button').textContent()).toBe('Add to Cart');
    const allProducts = await page.locator("h3").allTextContents();
    console.log(allProducts)
    allProducts.forEach(product=>{
        console.log(product);
    })
 })

 test("dynamic elements",async({page})=>{
//     Write Playwright code to:
// 1. Click Load Users.
// 2. Wait until the users are displayed.
// 3. Verify that three users are displayed.
// 4. Verify that Ravi is present.
// 5. Print all user names.
    await page.goto("file:///D:/Learning/example%20pages/dynamic%20elements.html");
    await page.locator("#loadUsers").click();
    await page.waitForLoadState('networkidle');
    const users = await page.locator("div.user");
    await expect(users).toHaveCount(3);
    const usertwo = await users.filter({hasText:'Ravi'})
    await expect(usertwo).toContainText('Ravi');
    console.log(await users.allTextContents());
 })

 test("Handling tables",async({page})=>{
//     Write Playwright code to:
// 1. Count the total number of employee rows (exclude the header).
// 2. Print all employee names.
// 3. Find the employee named Krishna.
// 4. Verify Krishna belongs to Development.
// 5. Find all employees belonging to the QA department and print their names.
    await page.goto("file:///D:/Learning/example%20pages/tables.html");
    const rows = await page.locator("table tbody tr").filter({hasNotText : 'ID'});
    await expect(rows).toHaveCount(4);
    for (let i = 0; i < rows.count; i++) {
        const name = await rows.nth(i).locator('td').nth(1).textContent();
        console.log(name);
    }
    const employee = await rows.filter({hasText : 'Krishna'})
    await expect(employee).toContainText("Development");
    const qaEmployees = rows.filter({ hasText: 'QA' });
    console.log(await qaEmployees.locator('td:nth-child(2)').allTextContents());
 })
 test("Handling tables 2",async({page})=>{
    // Find all employees belonging to Development.
    // Print their names.
    // Find the employee with the highest salary.
    // Verify that Mahesh has a salary of 80000.
    // Count how many employees have a salary greater than 50000.
    await page.goto("file:///D:/Learning/example%20pages/tables2.html");
    const devDeptEmp = await page.locator("tr").filter({hasText:'Development'});
    const allDevEmp = await devDeptEmp.locator("td:nth-child(2)").allTextContents()
    console.log(`The Development department employees are ${allDevEmp}`);
    const allSalaries = await page.locator("tr td:nth-child(4)").allTextContents();
    let maxSalary =0;
    allSalaries.forEach(salary=>{
        salary = parseInt(salary)
        if(salary > maxSalary)
            maxSalary = salary
    })

console.log(maxSalary);
const empwithMaxSalary = await page.locator("tr").filter({hasText : maxSalary});
const empNamewithMaxSalary = await empwithMaxSalary.locator('td:nth-child(2)').textContent();
console.log(empNamewithMaxSalary);
const mahesh = await page.locator("tr").filter({hasText:"Mahesh"});
const salaryOfMahesh = await mahesh.locator("td:nth-child(4)").textContent();
expect(salaryOfMahesh).toBe('80000');
let salaryGreaterThan50k=0
allSalaries.forEach(salary=>{
        salary = parseInt(salary)
        if(salary >= 50000)
            salaryGreaterThan50k +=1
    })
    console.log(salaryGreaterThan50k);
 })
})
