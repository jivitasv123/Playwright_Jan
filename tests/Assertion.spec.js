const{test , expect} = require('@playwright/test');


test('Assertions' , async ({page}) => {
    // await page.goto("https://www.facebook.com/");

    // let CurrentUrl = await page.url();
    // console.log(CurrentUrl)
    
    
    // await page.goto("https://ticketnew.com/movies/chennai");

    //  let tc =    await page.url();

    // let currentTitle = await page.title();
    // console.log(currentTitle)


    //           //Expect     //actual
    // await expect(page).toHaveURL(tc)
    // await expect(page).toHaveTitle(currentTitle)

    await page.goto("https://www.instagram.com/");

    let logo = await page.locator("//i[@aria-label='Instagram']");

    await expect(logo).toBeVisible();

    await page.waitForTimeout(3000);

    let loginBtn =  await page.locator("//button[@type='submit']");

    await expect.soft(loginBtn).toBeEditable();

    await page.fill("//input[@type='text']" , "Jivita_04");
    await page.fill("//input[@type='password']" , "Jivita@12345");

   await expect(loginBtn).toBeEnabled();

   await loginBtn.click();

   let msge = await page.locator("//div[contains(text(),'incorrect')]");
  
   await expect(msge).toHaveText('Sorry, your password was incorrect. Please double-check your password.');
   await expect(msge).toContainText('Sorry');

await page.goto('https://testautomationpractice.blogspot.com/');

//Approach 1
let male = await page.locator("(//input[@name='gender'])[1]");
await male.check();


//Approach 2
await page.locator("(//input[@name='gender'])[1]").check();


//Approach 3

 await page.check("(//input[@name='gender'])[2]");



await page.check("//input[@id='monday']");
await page.check("//input[@id='saturday']");



})