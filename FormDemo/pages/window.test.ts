import { test ,Expect } from "playwright/test";
import { CommonActions} from "../utils/CommonActions";
import { Page } from "playwright/test";


export class Window{

    private page :Page
    private actions : CommonActions


    constructor(page : any){
  this.page = page
  this.actions = new  CommonActions(page)
    }

    async navigateTo(){
     await this.actions.navigateTo("https://demoqa.com/browser-windows"); 
    }

    async ClickTabButton() {

        await this.actions.clickElement("#tabButton")
    }
}
