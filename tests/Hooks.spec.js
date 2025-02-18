
const{test , expect}= require('@playwright/test')

 test.beforeAll(async()=>{
  console.log('Launch Browser and goTo Amazon')
 });

 
 test.afterAll(async()=>{
    console.log("Close Browser")
 });


 test.beforeEach(async()=>{
    console.log("HomePage and Search Product")
 });
 
 test.afterEach(async()=>{
    console.log("Order Invoice")
 });


 test('Place Lap', async({page})=>{
    await page.goto('https://www.amazon.in/s?k=laptop')
    console.log('Laptop Dell Order Placement')
 });

 test('PLace mobile' , async({page})=>{
    await page.goto('https://www.amazon.in/s?k=mobiles')
    console.log('Mobile Vivo Order Placement')
 });

  
   
 