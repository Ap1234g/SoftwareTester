import { expect , test } from "playwright/test";
import { Page } from "playwright/test";
import { CommonActions } from "../utils/CommonActions";

export class contactpageTest {
    verifyMapIsVisible() {
        throw new Error('Method not implemented.');
    }
    verifyMapHasLocation(arg0: string) {
        throw new Error('Method not implemented.');
    }
    verifySuccess() {
        throw new Error('Method not implemented.');
    }

    private page:Page;
    private actions: CommonActions;


    constructor(page: Page) {
        this.page = page;
        this.actions = new CommonActions(page);
    }


    async navigateToContactPage() {
        await this.actions.navigateTo('http://localhost:4200/contact');
    }

    async fillName(name: string){

        await this.actions.FillText("#name", name);
    }

    async  fillLastName(lastname: string){

        await this.actions.FillText("#lastName", lastname);
    }

    async fillEmail(email: string){

        await this.actions.FillText("#email", email);
    }

    async fillMessage(message: string){

        await this.actions.FillText("#message", message);
    }
    async submitForm(name: string, email: string, message: string){

        await this.actions.ClickElement("button[type='submit']");
    }

}