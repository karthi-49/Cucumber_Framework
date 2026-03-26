import { setWorldConstructor } from "@cucumber/cucumber";
import {Browser,Page} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage"

export class CustomWorld
{
    browser!: Browser;
    page!: Page;
    loginPage!: LoginPage
}

setWorldConstructor(CustomWorld);