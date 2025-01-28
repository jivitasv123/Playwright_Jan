const{test , expect} = require('@playwright/test')

test('Login Fb' , async({page})=>{

await page.goto('https://www.flipkart.com/');

await page.fill("//input[@type='text']" , "LAPTOP");

await page.waitForTimeout(3000);

await page.press("//input[@type='text']" , "Enter");

await page.waitForTimeout(3000);











// await page.locator("//input[@id='email']").fill("Jivita");
// await page.waitForTimeout(3000);

// await page.locator("//input[@name='pass']").fill("123455");
// await page.waitForTimeout(3000);

// await page.locator("//button[text()='Log in']").click();
// await page.pause();






// //Approach 1
// let email =await page.locator("//input[@id='email']");
// await email.fill('Trendnologies')
// await page.waitForTimeout(3000);
// //Approach 2











// await page.goto('https://www.flipkart.com/');

// await page.goto('https://in.bookmyshow.com/explore/home/chennai');

// await page.goBack();
// await page.waitForTimeout(3000); //hold or  break
// await page.goForward();
// await page.waitForTimeout(3000);
// await page.reload();  //refresh
// await page.close();

})