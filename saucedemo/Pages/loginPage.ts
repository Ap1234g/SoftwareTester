
import { Page } from "playwright/test";
import { expect  , test } from "playwright/test";
import { CommonActions } from "../utils/CommonActions";

export class LoginPage{

   private page: Page;
    private commonActions: CommonActions;

    constructor(page: Page) {
        this.page = page;
        this.commonActions = new CommonActions(page);
    }

    async navigateToUrl(){
    await this.commonActions.navigateTo('https://sauce-demo.myshopify.com');
}

async navigateTologin(){

    await this.commonActions.navigateTo('https://sauce-demo.myshopify.com/account/login')
}

async filllogin(emailaddress:string , password:string){
    await this.commonActions.fillText("#customer_email",emailaddress)
    await this.commonActions.fillText("#customer_password",password)
}


async clickSignInBtn(){
  await this.commonActions.clickElement("input[value='Sign In']")

}


}