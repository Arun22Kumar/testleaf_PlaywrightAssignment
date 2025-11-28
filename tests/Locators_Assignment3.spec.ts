import { chromium, expect, test } from "@playwright/test";

test(`Create Account in Salesforce`,async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(`https://login.salesforce.com/`);
    await page.getByLabel(`Username`).fill(`texttoarun295@agentforce.com`);
    await page.getByLabel(`Password`).fill(`Arun@2212`);
    await page.locator(`#Login`).click();


    await expect(page).toHaveTitle(`Saleforce`);
    await expect(page).toHaveURL('lightning.force.com');

    await page.locator('.appLauncher').click();
    await page.getByText('View All').click();
    await page.getByPlaceholder('Search apps or items...').fill('Service');

    await page.locator('(//mark[text()="Service"])[1]').click();
    await page.locator('//span[text()="Accounts"]').click();

    await page.getByRole('button', { name: 'New' }).click();

    await page.locator('input[name="Name"]').fill('Test Account');
    await page.locator('//button[text()="Save"]').click();

    const toastMessage = page.locator('.toastMessage')
    expect(toastMessage).toBeVisible();
    console.log(await toastMessage.innerText());
    
     
})