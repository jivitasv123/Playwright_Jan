const{test , expect}= require('@playwright/test')

test('Upload File', async({page})=>{

 await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')


 //Single File
await page.locator("//input[@type='file']").setInputFiles('E:/JavaScript/Functions.txt')
await page.waitForTimeout(5000);

//Multiple Files

await page.locator("//input[@type='file']").setInputFiles(['E:/JavaScript/Functions.txt' , 'C:/Users/admin/Downloads/SAMPLE.xlsx' ,

   'C:/Users/admin/Downloads/DEGREE.pdf'
])
await page.waitForTimeout(8000);

//REmove file
 await page.locator("//input[@type='file']").setInputFiles([])
 await page.waitForTimeout(4000);

})