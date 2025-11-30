import { expect, test } from "@playwright/test";

test(`Assertions Practice`,async({page})=>{
    await page.goto(`https://www.leafground.com/input.xhtml `)

    const disabled = page.locator(`[placeholder="Disabled"]`)
    await expect(disabled).toBeDisabled()

    const enabled = page.locator(`[placeholder="Babu Manickam"]`)
    await expect(enabled).toBeEnabled()
    await expect.soft(enabled).toBeDisabled()

    const editable = page.locator(`.city`)
    await expect(editable).toBeEditable()
     await editable.fill("India")
    
})