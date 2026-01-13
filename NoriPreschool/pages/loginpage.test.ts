import { Page, Locator } from "playwright";
import {CommonActions} from '../utils/CommonActions';
import {test, expect} from 'playwright/test';

export class LoginPageTest {

    private page : Page;
    private actions : CommonActions;
    private successMessage: Locator;
    private failureMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.actions = new CommonActions(page);
        this.successMessage = this.page.locator('text=Submitted successfully');
        this.failureMessage = this.page.locator('text=Submission not successful');
    }

    async navigateToLoginPage() {
        await this.actions.navigateTo('http://localhost:4200/login');
    }

    async fillUsername(username: string) {
        await this.actions.FillText("input[name='email']", username);
    }

    async fillPassword(password: string) {
        await this.actions.FillText("input[name='password']", password);
    }
    async submitLogin() {
        await this.actions.ClickElement("button[type='submit']");
    }

    async navigateTopaymentSubmission() {
        await this.actions.navigateTo('http://localhost:4200/payment-submission');
    }

    async fillChildID(childID: string) {
        await this.actions.FillText("#referenceID", childID);
    }

    async chooseFile(filePath: string) {
        const fileInput = this.page.locator("#document");
        await fileInput.setInputFiles(filePath);
    }
    async submitPayment() {
        await this.actions.ClickElement("button[type='submit']");
    }

    async verifySuccessMessage(): Promise<boolean> {
        return await this.successMessage.isVisible();
    }

    async verifyFailureMessage(): Promise<boolean> {
        return await this.failureMessage.isVisible();
    }           

    async navigateTolearnerprogress() {
        await this.actions.navigateTo('http://localhost:4200/learner-progress');
    }

    async haveTextDisplayed(expectedText: string): Promise<boolean> {
        const locator = this.page.locator(`text=${expectedText}`);
        return await locator.isVisible();
    }

   
    


}