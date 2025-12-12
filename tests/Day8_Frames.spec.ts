import { test } from "@playwright/test";

test(`Frames Assignment`, async ({ page }) => {
    await page.goto('https://leafground.com/frame.xhtml');

    // --------------------- Frame 1 ---------------------
    const frame = page.frameLocator("iframe[src='default.xhtml']");
    const clickme = frame.locator('#Click').first();

    const beforeclick = await clickme.innerText();
    console.log(`Click Me button text before click: ${beforeclick}`);

    await clickme.click();
    const afterclick = await clickme.innerText();
    console.log(`Click Me button text after click: ${afterclick}`);

    // --------------------- Frame Count ---------------------
    const allFrames = page.frames();
    console.log(`Total frames on the page: ${allFrames.length}`);

    // --------------------- Nested Frames ---------------------
    const outerFrame = page.frameLocator("iframe[src='page.xhtml']");
    const innerFrame = outerFrame.frameLocator("iframe[src='default.xhtml']");

  
    const clickme1 = innerFrame.getByRole('button', { name: 'Click Me' });

    const beforeclick1 = await clickme1.innerText();
    console.log(`Nested Frame - button text before click: ${beforeclick1}`);

    await clickme1.click();

    const afterClick1 = await clickme1.innerText();
    console.log(`Nested Frame - button text after click: ${afterClick1}`);
});
