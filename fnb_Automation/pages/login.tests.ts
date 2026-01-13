import { expect } from "playwright/test";
import { CommonActions } from "../utils/CommonActions";
import { Page } from "playwright/test";

export class login{

    private page : Page;
    private actions : CommonActions;

constructor(Page :any){

    this.page = Page;
    this.actions = new CommonActions(Page);
}

async navigateTo(){
    await this.actions.navigateTo("https://www.online.fnb.co.za/banking/main.jsp");
}

async fillTextUsername(username: string){
await this.actions.fillText("#user" , username);
}

async fillTextPassword(password: string){

    await this.actions.fillText("#pass" , password);
}

 async loginButton() {
    await this.actions.clickelement("#OBSubmit" , "");
  }

}