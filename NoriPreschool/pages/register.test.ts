import { Page } from "playwright";
import {CommonActions} from '../utils/CommonActions';
import {test, expect} from 'playwright/test';

export class registerTest{


    private page : Page;
    private actions : CommonActions
    constructor(page: Page) {
        this.page = page;
        this.actions = new CommonActions(page);
    }

    async navigateToLoginPage() {
        await this.actions.navigateTo('http://localhost:4200/login');
    }

    async navigateToRegisterPage() {
        await this.actions.navigateTo('http://localhost:4200/register');

    }



    async fillRegisterForm(firstname: string, lastname: string , gmail: string, password: string, cellphonenumber: string) {
        await this.actions.FillText("#firstName", firstname);
        await this.actions.FillText("#lastName", lastname);
        await this.actions.FillText("#email", gmail);
        await this.actions.FillText("#password", password);
        await this.actions.FillText("#cellphone", cellphonenumber);
    }   

    async submitRegister() {
        await this.actions.ClickElement("button[type='submit']");
    }

    async clickloginlink() {
        await this.actions.ClickElement(".text-btn");
    }

}