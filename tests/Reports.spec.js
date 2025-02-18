const{test , expect} = require('@playwright/test');

test.describe('Test 1' , async({page})=>{

test()

test()

await page.goto('https://www.facebook.com/');
expect(page).toHaveTitle('Facebook – log in or sign up');
})

test('Test 2' , async({page})=>{

    await page.goto('https://www.instagram.com/');
expect(page).toHaveTitle('Instagram');
})


test('Test 3' , async({page})=>{

await page.goto('https://in.bookmyshow.com/explore/home/chennai');
const bookMySHOW = 'Movie Tickets, Plays, Sports, Events & Cinemas near Chennai - BookMyShow Chennai.'
expect(page).toHaveTitle(bookMySHOW);
})

 test('Test 4' , async({page})=>{

 await page.goto('https://www.amazon.in/');
 const amazon = 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in'
 expect(page).toHaveTitle(amazon);
        })

 test('Test 5' , async({page})=>{
  await page.goto('https://www.flipkart.com/');
  const title = 'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!'
  expect(page).toHaveTitle(title);
 })