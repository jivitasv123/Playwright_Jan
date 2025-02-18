const{test , expect} = require('@playwright/test');

test('Frame' , async ({page}) => {
    

    await page.goto('https://letcode.in/frame');
    
    let allFrame = await page.frames();
    console.log(allFrame.length);
   
    await page.frame({name:'firstFr'}).fill("//input[@name='fname']" , "Jagan")

    //await page.frame({url : 'https://letcode.in/frameUI'}).fill("//input[@name='lname']" , "Kumar" );

    await page.waitForTimeout(4000);

    await page.frame({url :'https://letcode.in/innerFrame'}).fill("//input[@name='email']" , "jagan@123");
  
    const frame = await page.frame({url :'https://letcode.in/innerFrame'});

   const parent = await frame.parentFrame();

   await parent.url();
   console.log(await parent.url());
 
   const lastname = await parent.locator("//input[@name='lname']");
    await lastname.fill('Kumar');

    await page.waitForTimeout(3000);

   const main =  await page.mainFrame();

   await main.locator("//a[text()='Work-Space']").click();
   await page.waitForTimeout(3000);


    // let lastname = await page.frameLocator("//iframe[@id='firstFr']").locator("//input[@name='lname']");
    // await lastname.fill('Kumar');

  


})