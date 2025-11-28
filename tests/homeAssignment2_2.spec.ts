import { chromium, expect, test, webkit } from "@playwright/test";

test(`Two Context`,async()=>{
    const browser = await chromium.launch({channel: 'msedge'});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.redbus.in');
    const title = await page.title();
    const url = page.url();
    expect(title).toContain('redBus');
    expect(url).toContain('redbus');

    const browser1 = await webkit.launch();
    const context1 = await browser1.newContext();
    const page1 = await context1.newPage();

    await page1.goto('https://www.flipkart.com/');
    const title1 = await page1.title();
    const url1 = page1.url();
    expect(title1).toContain('Online Shopping');
    expect(url1).toContain('flipkart');

})

