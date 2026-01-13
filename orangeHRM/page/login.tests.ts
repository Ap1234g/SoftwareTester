import { expect } from "playwright/test";
import { CommonActions } from "../utils/CommonActions";
import { Page } from "playwright/test";

export class login{

    private page:Page;
    private actions: CommonActions

    constructor(Page: Page){

        this.page = Page;
        this.actions =new CommonActions(Page);

    }


    async navigateTo(){
    await    this.actions.navigateTo("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }


    async fillTextUsername(username: string){

        await this.actions.fillText("input[placeholder='Username']", username)
    }


    async fillTextPassword(password: string){

        await this.actions.fillText("input[placeholder='Password']", password)
    }

    async loginButton(){

      await  this.actions.clickelement("button[type='submit']" , "")
    }
}
