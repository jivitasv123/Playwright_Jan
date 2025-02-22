class LoginPage{

//Constructor
constructor(page){
this.page = page;
this.username = '[data-test="username"]';
this.password = '[data-test="password"]';
this.loginBtn = "//input[@type='submit']";
}

//Methods
async url(){
    await this.page.goto('https://www.saucedemo.com/')
}

 async login(username , password){
   await this.page.locator(this.username).fill(username);
   await this.page.locator(this.password).fill(password);
   await this.page.click(this.loginBtn);
}





}


new LoginPage(jivita)