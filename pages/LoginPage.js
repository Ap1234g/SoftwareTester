import { CommonActions } from '../utils/CommonActions.js';



export class LoginPage {

    constructor(page) {
        this.page = page;
        this.actions = new CommonActions(page);
    }

    async navigate() {
        await this.actions.navigateTo('https://the-internet.herokuapp.com/login');
    }

    async login(username, password) {
        await this.actions.fill('#username', username);
        await this.actions.fill('#password', password);
        await this.actions.click('button[type="submit"]');
    }

    async getErrorMessage() {
        return await this.actions.getText('.flash.error');
    }

    async assertErrorMessage(expectedMessage) {
        const message = await this.getErrorMessage();
        if (!message.includes(expectedMessage)) {
            throw new Error(`Expected message to contain: ${expectedMessage}, but got: ${message}`);
        }   
    }
}
