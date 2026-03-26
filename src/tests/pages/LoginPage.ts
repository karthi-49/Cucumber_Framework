import{test,expect, Locator, Page} from "@playwright/test"
import { playwrightGenerics } from "../utils/playwrightGenerics"

    // Page Object Model --> Design Pattern -->It is used to store obj repository for web elements
    // 1. Locate the webelements of respective page
    // 2. Create page methods

export class LoginPage extends playwrightGenerics
{ 
    //Locate elements
    readonly emailEle:Locator
    readonly passEle:Locator
    readonly loginButton:Locator
    readonly errorEle:Locator

    constructor(page:Page)
    {
        super(page)
        this.emailEle=page.locator("#username")
        this.passEle=page.locator("#pwd")
        this.loginButton=page.getByRole("button",{name:"Login"})
        this.errorEle=page.locator(".error")
        
    }

    //page methods
    async loginToApp(email:string,password:string)
    {
        await this.enterText(this.emailEle,email)
        await this.enterText(this.passEle,password)
    }

    async clickLoginButton()
    {
        await this.clickElement(this.loginButton)
    }

    async getErrorMessage()
    {
        return await this.getElementText(this.errorEle)
    }




}