import {test ,expect } from "playwright/test";
import { Page } from "playwright/test";
import { CommonActions } from "../utils/CommonActions";

export class report{


 private page: Page
    private actions : CommonActions



constructor(page :any ){

        this.page = page
        this.actions= new CommonActions(page)

}

async navigateTo(){


        await this.actions.navigateTo("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
      }


       async openAdminModule() {
    await this.actions.clickelement("a[href='/web/index.php/admin/viewAdminModule']" , "")
    }

    



}