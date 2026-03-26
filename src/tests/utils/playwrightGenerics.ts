import{Browser, BrowserContext, FrameLocator, Locator,Page,TestInfo} from "@playwright/test"

export class playwrightGenerics
{ 
    readonly page:Page
    constructor(p:Page)
    {
        this.page=p
    }
    //Inputbox - type,clear,placeholder, default Text
    async enterText(ele:Locator,valueToEnter:string):Promise<void>
    {
        await ele.fill(valueToEnter)
        console.log("Value entered as",valueToEnter);
        
    }
    async clearText(ele:Locator):Promise<void>
    {
        await ele.clear()
        console.log("Value Cleared");        
    }
    async getAttributeText(ele:Locator,attributeName:string):Promise<string>
    {
        const data = await ele.getAttribute(attributeName)
        console.log("getAttribute of",attributeName); 
        return data || ""       
    }

    async getElementText(ele:Locator):Promise<string>
    {
        return await ele.textContent() || "" 
    }
    
    async getallElementText(ele:Locator):Promise<string[]>
    {
        return ele.allTextContents()       
    }

    //mouse operations
    async clickElement(ele:Locator):Promise<void>
    {
        await ele.click()
        console.log("Element Clicked");        
    }

    async rightclickElement(ele:Locator):Promise<void>
    {
        await ele.click({button:"right"})
        console.log("Element Right Clicked");        
    }
    
    async doubleclickElement(ele:Locator):Promise<void>
    {
        await ele.dblclick()
        console.log("Element Double Clicked");        
    }

    async dragandDrop(source:Locator,target:Locator):Promise<void>
    {
        await source.dragTo(target)
        console.log("Drag and Drop completed successfully");      
    }

    async mouseHover(ele:Locator):Promise<void>
    {
        await ele.hover()
        console.log("Mouse Hover performed on element");      
    }


    //dropdown
    async selectbyIndex(ele:Locator,indexValue:number):Promise<void>
    {
        await ele.selectOption({index:indexValue})
        console.log("Selected Dropdown by index",indexValue);        
    }

    async selectbyValue(ele:Locator,dropdownValue:string):Promise<void>
    {
        await ele.selectOption({value:dropdownValue})
        console.log("Selected Dropdown by value",dropdownValue);        
    }

    async selectbyLabel(ele:Locator,dropdownValue:string):Promise<void>
    {
        await ele.selectOption({label:dropdownValue})
        console.log("Selected Dropdown by label",dropdownValue);        
    }

    //Browser Commands
    async toPreviousPage(page:Page):Promise<void>
    {
        await page.goBack()
        console.log("Got back to previous page");        
    }

    async toNextPage(page:Page):Promise<void>
    {
        await page.goForward()
        console.log("Navigated to next page");        
    }

    async refreshPage(page:Page):Promise<void>
    {
        await page.reload()
        console.log("Page refreshed");        
    }

    async closePage(page:Page):Promise<void>
    {
        await page.close()
        console.log("Page closed");           
    }

    async navigateTo(page:Page,url:string):Promise<void>
    {
        await page.goto(url)
        console.log("Page has been launched");           
    }

    async getTitle(page:Page):Promise<string>
    {
        const title = await page.title()
        console.log("Page Title generated"); 
        return title || ''       
    }

    getURL(page:Page):string
    {
        return page.url()
    }
    
    isPageClosed(page:Page):boolean
    {
        return page.isClosed()
    }


    //frames
    getFrame(page:Page,framename:string):FrameLocator
    {
        return page.frameLocator(framename)
    }

    //alerts
    async acceptAlert(page:Page):Promise<void>
    {
        page.once("dialog",async(dialog)=>{
            await dialog.accept()
        })
    }
    
    async dismissAlert(page:Page):Promise<void>
    {
        page.once("dialog",async(dialog)=>{
            await dialog.dismiss()
        })
    }

    async promptAlert(page:Page,text:string):Promise<void>
    {
        page.once("dialog",async(dialog)=>{
            await dialog.accept(text)
        })
    }

    async getMsgfromAlert(page:Page):Promise<string>
    {
        return new Promise((resolve)=>{
        page.once("dialog",async(dialog)=>{
        const msg= dialog.message()
        await dialog.accept()
        resolve(msg)
        })})
    }

    //Screenshot
    async takePageScreenshot(page:Page,filename:string):Promise<void>
    {
        await page.screenshot({path:`./Screenshot/${filename}_${Date.now()}.png`
        ,fullPage:true})
        console.log("Screenshot captured for entire page");      
    }

    async takeEleScreenshot(ele:Locator,filename:string):Promise<void>
    {
        await ele.screenshot({path:`./Screenshot/${filename}_${Date.now()}.png`})
        console.log("Screenshot captured for element");      
    }

    //"visible" | "hidden" | "checked" | "enabled" | "disabled" | "editable
    async checkifVisible(ele:Locator):Promise<boolean>
    {
        const status =await ele.isVisible()
        console.log("Element visible status is ",status);        
        return status
    }
    
    async checkifHidden(ele:Locator):Promise<boolean>
    {
        const status =await ele.isHidden()
        console.log("Element hidden status is ",status);        
        return status
    }

    async isChecked(ele:Locator):Promise<boolean>
    {
        const status =await ele.isChecked()
        console.log("Element checked status is ",status);        
        return status
    }

    async checkEnabled(ele:Locator):Promise<boolean>
    {
        const status =await ele.isEnabled()
        console.log("Element enability checked");        
        return status
    }    
    
    async checkDisabled(ele:Locator):Promise<boolean>
    {
        const status =await ele.isDisabled()
        console.log("Element disability checked");        
        return status
    }
    
    async checkEditable(ele:Locator):Promise<boolean>
    {
        const status =await ele.isEditable()
        console.log("Element Editability is checked");        
        return status
    }
    
    //Windows Handling
    async launchmultipleURL(page1:Page,page2:Page,url1:string,url2:string):Promise<void>
    {
        await page1.goto(url1)
        await page2.goto(url2)
        console.log("Pages has been launched");         
    }

    async handleChildWindow(context:BrowserContext,page:Page,url:string,ele:Locator):Promise<void>
    {
        page = await context.newPage()
        page.goto(url)
        const childWindow= context.waitForEvent("page")
        await ele.click()
        const cPage=await childWindow
        console.log("Interact with child window",cPage.url())
        console.log("Interact with Parent window",page.url())
    }





}