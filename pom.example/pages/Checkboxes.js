import { expect } from "@playwright/test";
import { CommonActions } from "../utils/CommonActions.js";

export class Checkboxes {
    constructor(page) {
        this.page = page;
        this.actions = new CommonActions(page);
    }

    async navigate() {




        const url = 'https://the-internet.herokuapp.com/checkboxes';
        console.log('Navigating to:', url);
    await this.actions.navigateTo(url);
    }

    async checkCheckbox(index) {
        await this.actions.click(`input[type="checkbox"]:nth-of-type(${index})`);
    }
    
    async isItChecked(index) {
        return await this.actions.isChecked(`input[type="checkbox"]:nth-of-type(${index})`);
    }

    async assertCheckboxChecked(index, expectedState) {
        const isChecked = await this.isItChecked(index);
        expect(isChecked).toBe(expectedState);
    }
}
