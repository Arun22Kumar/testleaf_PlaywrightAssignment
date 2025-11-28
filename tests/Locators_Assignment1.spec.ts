import { chromium, expect, test } from "@playwright/test";

test(`Create lead in Testleaf in application`,async()=>{
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    const companyName = "TestLeaf"
    const firstName = "Arun"
    const lastName = "S"

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator(".crmsfa").click()
    await page.locator('//a[text()="Leads"]').click();
    await page.getByRole('link', { name: 'Create Lead' }).click();
    await page.locator('#createLeadForm_companyName').fill(companyName);
    await page.locator('#createLeadForm_firstName').fill(firstName);
    await page.locator('#createLeadForm_lastName').fill(lastName);
    await page.locator('#createLeadForm_personalTitle').fill('Mr.');
    await page.locator('#createLeadForm_generalProfTitle').fill('Tester');
    await page.locator('#createLeadForm_annualRevenue').fill('10000');
    await page.locator('#createLeadForm_departmentName').fill('QA');
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('7845967455');
    await page.locator('.smallSubmit').click();


    await page.waitForTimeout(3000)
    const actualCompanyName = await page.locator('#viewLead_companyName_sp').innerText();
    const actualFirstName = await page.locator('#viewLead_firstName_sp').innerText();
    const actualLastName = await page.locator('#viewLead_lastName_sp').innerText();
    const status = await page.locator('#viewLead_statusId_sp').innerText();
    expect(actualCompanyName).toContain(companyName)
    expect(actualFirstName).toBe(firstName)
    expect(actualLastName).toBe(lastName)
    expect(status).toBe("Assigned")
    console.log(await page.title())



})