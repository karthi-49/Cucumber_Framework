import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../utils/world";
import { expect } from "@playwright/test";


Given('I navigate to Login page {string}', async function(this:CustomWorld,url:string) {
    console.log("Navigating to Login page",url);
    await this.page.goto(url)
});

When('I enter username {string} and password {string}', async function (this:CustomWorld, userName:string, password:string){
    await this.loginPage.loginToApp(userName,password)
});

When('I click login button', async function (this:CustomWorld) {
    await this.loginPage.clickLoginButton()
    console.log("User clicked login button...");
    
});
Then('I validate home page title {string}', async function (this:CustomWorld,expectedTitle:string){
    expect(await this.page.title()).toBe(expectedTitle);
    console.log("Homepage title matched", expectedTitle);
}); 
Then('I validate error message {string}', async function(this:CustomWorld,errorMessage:string) {
    expect(await this.loginPage.getErrorMessage()).toBe(errorMessage);
    console.log("Error message matched", errorMessage);
});
