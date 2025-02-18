const{test , expect}= require('@playwright/test')


test('Simple Alert' , async ({page}) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.mouse.wheel(0 , 400);

    //Enable

    page.on('dialog' , async box =>{
        let type =await box.type();
       expect(type).toContain('alert')
       await page.waitForTimeout(2000);
       await box.accept();
    });


    //Trigger

    await page.click("//button[@id='alertBtn']");
})






test('Confirm Alert' , async ({page}) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.mouse.wheel(0 , 400);

    //Enable

    page.on('dialog' , async POPup=>{
       let type = await POPup.type();
       let msge = await POPup.message();

       expect(type).toContain('confirm');
       expect(msge).toContain('Press a button!')

       //await POPup.accept();
       await page.waitForTimeout(2000);

       await POPup.dismiss();

    })


    //Trigger

    await page.click("//button[@id='confirmBtn']");
})




test.only('Prompt Alert' , async ({page}) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.mouse.wheel(0 , 400);

    //Enable

    page.on('dialog' , async alert=>{

     let type =  await alert.type();
     let msge = await alert.message();
      let dv =    await alert.defaultValue();

      expect(type).toContain('prompt');
      expect(msge).toContain('Please enter your name:');
      expect(dv).toContain('Harry Potter');
      await page.waitForTimeout(2000);

      await alert.accept("Jagan")



    })

    //Trigger

    await page.click("//button[@id='promptBtn']");

    await page.waitForTimeout(2000);

})