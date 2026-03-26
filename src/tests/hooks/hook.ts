import { Before,After,setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { CustomWorld } from "../utils/world";
import { LoginPage } from "../pages/LoginPage";

setDefaultTimeout(60*1000);

// Before all, Before, Before step, After step, After, After all

Before(async function(this:CustomWorld){
    this.browser =await chromium.launch({headless:false});
    let context = await this.browser.newContext();
    this.page = await context.newPage();
    console.log("Browser Launched...");

    //Create object for all pages
    this.loginPage = new LoginPage(this.page)
    
    });

After(async function(this:CustomWorld){
    console.log("Browser closed");
    await this.browser.close()
});