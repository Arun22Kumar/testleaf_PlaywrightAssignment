import { test } from "@playwright/test";


test(`Test to learn Xpath locators Selectors`,async ({page}) => { // page fixture


await page.goto(`http://leaftaps.com/opentaps/control/main`)


await page.locator(`//input[@id="username"]`).fill(`demosalesmanager`);


await page.locator(`//input[@id="password"]`).fill(`crmsfa`);


await page.locator(`//input[@class="decorativeSubmit"]`).click();


await page.locator(`//a[contains(text(),"CRM")]`).click();

await page.locator(`//ul[@class="shortcuts"]//a[text()="Create Lead"]`).click();

await page.locator(`//input[@name="companyName" and @class="inputBox"]`).fill(`TCS`);

await page.locator(`//input[@name="firstName" and @class="inputBox"]`).fill(`Arun`);

await page.locator(`//input[@name="lastName" and @class="inputBox"]`).fill(`S`);

await page.selectOption(`#createLeadForm_currencyUomId`,{value:`INR`})

await page.selectOption(`#createLeadForm_generalCountryGeoId`,{value:`IND`})

await page.locator(`//input[@type="submit"]`).click();

})