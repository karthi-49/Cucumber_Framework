import { Given, When, Then } from "@cucumber/cucumber";


Given('I open browser', async()=>{
    console.log("Browser Opened");
    
});

Given('I navigate to Login page {string}', async(url:string)=> {
    console.log("Navigating to Login page",url);

});

When('I enter username {string} and password {string}', async (userName:string, password:string) => {
    console.log("username entered as",userName);
    console.log("password entered as",password);

});

When('I click login button', async () => {
    console.log("User clicked login button...");
    
});
Then('I validate home page title {string}', async (expectedTitle:string) => {
    console.log("Homepage title matched", expectedTitle);
}); 
Then('I validate error message {string}', async (errorMessage:string) => {
    console.log("Error message matched", errorMessage);
});
