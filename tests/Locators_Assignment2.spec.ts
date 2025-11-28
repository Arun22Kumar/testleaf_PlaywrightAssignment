import { chromium, expect, test } from "@playwright/test";

test(`Edit lead in Testleaf in application`,async()=>{
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    const companyName = "TestLeaf"
    const firstName = "Arun"
    const lastName = "S"
    const companyNameNew = "TestLeafNew"

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator(".crmsfa").click()
    await page.locator('//a[text()="Leads"]').click();
    await page.getByRole('link', { name: 'Find Leads' }).click();

    await page.waitForTimeout(3000)
    await page.locator('input[name="firstName"]').nth(2).fill(firstName);
    await page.locator('input[name="lastName"]').nth(2).fill(lastName);
    await page.locator('input[name="companyName"]').nth(1).fill(companyName);
    await page.getByRole('button', { name: 'Find Leads' }).click();
    await page.locator('tbody tr td div a').first().click();
    await page.getByRole('link', { name: 'Edit' }).click();


    
    await page.locator('#updateLeadForm_companyName').fill(companyNameNew);
    await page.locator('#updateLeadForm_annualRevenue   ').fill('15000');
    await page.locator('#updateLeadForm_departmentName').fill('QAE');
    await page.locator('#updateLeadForm_description').fill('Assignment2 of Locators');
    await page.getByRole('button', { name: 'Update' }).click();


    await page.waitForTimeout(3000)
    const actualCompanyName = await page.locator('#viewLead_companyName_sp').innerText();
    const actualRevenue = await page.locator('#viewLead_annualRevenue_sp').innerText();
    const actualDepartment = await page.locator('#viewLead_departmentName_sp').innerText();
    const description = await page.locator('#viewLead_description_sp').innerText();
    expect(actualCompanyName).toContain(companyNameNew)
    expect(actualRevenue).toBe("$15,000.00")
    expect(actualDepartment).toBe("QAE")
    expect(description).toBe("Assignment2 of Locators")
    console.log(await page.title())



})