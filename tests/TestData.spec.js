const { test, expect } = require('@playwright/test');
const fs = require('fs');


test('Login' , async ({page}) => {

    const rawData = fs.readFileSync('Data.json'); // Read file
const testData =  JSON.parse(rawData); 

    const testData = getTestData();
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.waitForSelector("//input[@placeholder='First Name']" )
    await page.fill("//input[@placeholder='First Name']" , testData. );
    await page.fill("//input[@placeholder='Last Name']" , "Trends@123");
    await page.fill("//textarea[@ng-model='Adress']" , "Chennai");
    await page.fill("//input[@type='email']" , "jivitatrends@gmail.com");
    await page.fill("//input[@type='tel']" , "9080883631");
   await page.check("//input[@value='FeMale']");
   await page.check("//input[@value='Movies']");
await page.waitForTimeout(3000);
await page.screenshot({path:'Screenshot/' + Date.now() +'A.png'});
})