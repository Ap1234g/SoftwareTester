import { Page } from "playwright/test";
import {test , expect} from "@playwright/test";
import {CommonActions} from "../utils/CommonActions";


export class RegisterPage {

    private page: Page;
    private commonActions: CommonActions;

    constructor(page: Page) {
        this.page = page;
        this.commonActions = new CommonActions(page);
    }

    async navigateToUrl(){
        await this.commonActions.navigateTo('https://sauce-demo.myshopify.com');
    }
    async navigateToRegisterPage(){
        await this.commonActions.navigateTo('https://sauce-demo.myshopify.com/account/register');
    }

    async fillSignUpForm(firstname: string, lastname: string, emailAddress: string , password: string){
        await this.commonActions.fillText("body > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(4) > input:nth-child(2)", firstname);
        await this.commonActions.fillText("body > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(5) > input:nth-child(2)", lastname);
        await this.commonActions.fillText("body > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(6) > input:nth-child(2)", emailAddress);
        await this.commonActions.fillText("body > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(7) > input:nth-child(2)", password);
    }

    async clickCreatebtn(){
        await this.commonActions.clickElement("input[value='Create']");
    }

}