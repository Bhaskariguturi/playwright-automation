import {test,expect} from "@playwright/test"

test.describe("test basic actions", async()=>{
    test("Verify html attribute", async({page})=>{
        await page.goto("https://demoqa.com/text-box");
        await expect(page.locator("#userName")).toHaveAttribute('placeholder','Full Name');
        await expect(page.locator("#userName")).toHaveAttribute('id','userName');
        await expect(page.locator("#userName")).toHaveAttribute('class',' mr-sm-2 form-control');
        await expect(page.locator("#userName")).toHaveAttribute('type','text');
    })
    // test("Handling Hover",async({page})=>{
    //     await page.goto("https://demoqa.com/checkbox");
    //     await page.locator("span[class='rc-tree-title']").hover();
    //     const homeCount = await page.getByText('Home').count()
    //     console.log(homeCount);
    //     await expect(homeCount).toEqual(2);
    // })

    test('select option',async({page})=>{
        await page.goto("https://demoqa.com/automation-practice-form");
        await page.locator('input[id="react-select-3-input"]').click();
        await page.locator('div').filter({hasText:'Uttar Pradesh'}).nth(1).click();
    })


    test("frame test",async({page})=>{
    await page.goto("https://demoqa.com/frames");
    // await expect(page.locator('#frame1').contentFrame().locator('#sampleHeading')).toContainText('This is a sample page');
    const heading = page.locator('#frame1').contentFrame().locator('#sampleHeading');
    await expect(heading).toContainText('This is a sample page');
    console.log('Frame heading:', await heading.textContent());
    })

    test("File upload",async({page})=>{
        await page.goto("https://demoqa.com/upload-download");
        await page.locator("#uploadFile").setInputFiles("demo.pdf");
    })

    test("verify dropdown value text",async({page})=>{
        await page.goto("https://playwrightlab.github.io/");
        await page.locator("select#cascadeContinent").selectOption({label:'Asia'});
        await expect(page.locator("select#cascadeContinent option:checked")).toHaveText('Asia');

    })

     test("verify dropdown values",async({page})=>{
        await page.goto("https://playwrightlab.github.io/");
        const dValues = await page.locator("#cascadeContinent option").allTextContents();
        console.log(dValues.sort())
        await expect(dValues).toHaveLength(4);
        expect(dValues).toEqual(['Select continent...','Asia','Europe','Americas'].sort())
    })
})