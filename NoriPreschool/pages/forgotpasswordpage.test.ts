import { Page } from "playwright";
import {CommonActions} from '../utils/CommonActions';
import {test, expect} from 'playwright/test';

export class forgotpasswordpageTest{


    private page : Page;
    private actions : CommonActions 
    constructor(page: Page) {

        this.page = page;
        this.actions = new CommonActions(page);
    }
        async navigateToLoginPage() {
            await this.actions.navigateTo('http://localhost:4200/login');
        }

    async clickForgotPasswordLink() {
        await this.actions.ClickElement("a[href='forgotyourpassword']")
    }


    async fillnewPassword(newpassword: string) {
        await this.actions.FillText(" #newPassword",newpassword);
    }

  async fillconfirmPassword(confirmpassword: string) {
        await this.actions.FillText(" #confirmPassword",
        confirmpassword);
    }   

    async submitresetPassword() {
        await this.actions.ClickElement("button[type='submit']")
    }

}