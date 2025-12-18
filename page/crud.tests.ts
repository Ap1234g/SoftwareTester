import { Page } from "playwright/test";
import { expect } from "playwright/test";
import { CommonActions } from "../utils/CommonActions";


export class crud{

    private page: Page
    private actions : CommonActions
    private firstUserCheckbox: any
    private deleteButton: any
    private cancelButton: any

    constructor(page :any ){

        this.page = page
        this.actions= new CommonActions(page)
        this.firstUserCheckbox = page.locator("selector-for-first-user-checkbox")
        this.deleteButton = page.locator("selector-for-delete-button")
        this.cancelButton = page.locator("selector-for-cancel-button")




        
    }

      async navigateTo(){


        await this.actions.navigateTo("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
      }


       async openAdminModule() {
    await this.actions.clickelement("a[href='/web/index.php/admin/viewAdminModule']" , "")
    }

 async selectFirstUser() {
    await this.firstUserCheckbox.click();
  }

  async clickDelete() {
    await this.deleteButton.click();
  }

  async cancelDelete() {
    await this.cancelButton.click();
  }

 
    
    }


   
    
