import { expect, test } from "@playwright/test";

test(`Automating Alert & Frame Interactions`,async({page})=>{
    await page.goto(`https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm`)
    page.on("dialog",async(dialog:any)=>{
        const message = dialog.message()
        console.log(`Dialog message is ${message}`)
        await dialog.accept()
        expect(message).toBe('Press a button!')
    }) 

    const frame =  page.frameLocator('#iframeResult')
    frame.getByRole("button",{name :'Try it'}).click()
})