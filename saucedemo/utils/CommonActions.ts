import { Page } from "playwright";
import {test , expect} from "@playwright/test";


export class CommonActions {

    private page: Page;
    constructor(page: Page) {

        this.page = page;

    }
    async navigateTo(url: string) : Promise<void> {
        await this.page.goto(url);
    }
    async clickElement(selector: string): Promise<void> {
        await this.page.click(selector);
    }
    async fillText(selector: string, value: string): Promise<void> {

        await this.page.fill(selector, value);
    }

    async Select(selector: string , value:string): Promise<void>{
        await this.page.click(selector)
    }



       async CheckBox(selector: string , value:string): Promise<void>{
        await this.page.click(selector)
    }
    
}