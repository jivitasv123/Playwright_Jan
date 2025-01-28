const{test , expect}= require('@playwright/test')

test('Launch Insta', async({page})=>{

 await page.goto('https://www.instagram.com/')



 
})