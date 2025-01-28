const{test , expect} = require('@playwright/test');

test('Single Dropdown' , async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

await page.mouse.wheel(0, 700);

await page.locator("//select[@id='country']").selectOption('uk')  //By value

await page.waitForTimeout(3000);

await page.locator("//select[@id='country']").selectOption('Australia') //By text

await page.waitForTimeout(3000);

await page.selectOption("//select[@id='country']" , {index:9}) //By index

await page.waitForTimeout(3000);

})



test.only('Multiple Dropdown' , async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    
    await page.mouse.wheel(0, 700);

    let colors = await page.locator("//select[@id='colors']");

    let ToBeSelected = ['Green' , 'Red' , 'Yellow'];

    await colors.selectOption(ToBeSelected);

    await page.waitForTimeout(3000);



})
