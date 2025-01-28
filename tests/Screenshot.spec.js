const{test , expect} = require('@playwright/test');


test('SCREEN Screenshot' , async ({page}) => {

    await page.goto('https://www.flipkart.com/');

    await page.waitForTimeout(5000);

    await page.screenshot({path:'Screenshot/flip.png'});

})


test.only('FULL Screenshot' , async ({page}) => {

    await page.goto('https://www.myntra.com/clocks');

    await page.waitForTimeout(5000);

   // await page.screenshot({path:'Screenshot/myntra.png' , fullPage:true});

   let logo = await page.locator("//div[@class='desktop-logoContainer']")

   await logo.screenshot({path:'Screenshot/logo.png'})


})