import {  test ,Expect } from "playwright/test";
import { CommonActions } from "../utils/CommonActions";
import { Page } from "playwright/test";

export class Alerts{

private page:Page
private actions : CommonActions

constructor(page : any){

    this.page =page
    this.actions = new CommonActions(page)
}

async navigateTo(){
    await this.actions.navigateTo("https://demoqa.com/alerts")
}

async ClickMe(){
    await this.actions.clickElement("#alertButton")
}

async AcceptAlert(){

    await this.actions.clickElement("OK")
}

}