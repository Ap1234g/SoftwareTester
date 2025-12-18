import {expect} from '@playwright/test';
import { CommonActions } from '../utils/CommonActions.ts';
import { Page } from '@playwright/test';
import { escape } from 'querystring';

export class Practice {

 private page: Page;
    private actions: CommonActions;


constructor(page : any){
    this.page= page;
    this.actions=new CommonActions(page); 
}



async navigateToPracticePage(){
    await this.actions.navigateTo('https://demoqa.com/automation-practice-form');

}


async scrollToElement(selector: string): Promise<void> {
    const element = this.page.locator(selector);
    await element.scrollIntoViewIfNeeded();
}




 async fillFirstName(firstName: string) {
        await this.actions.fillTextBox("#firstName", firstName);
    }

    async fillLastName(lastName: string) {
        await this.actions.fillTextBox("#lastName", lastName);
    }

    async fillEmail(Email :string){
        await this.actions.fillTextBox("#userEmail" , Email)
    }


  // async checkGender(Gender :string){

       // await this.actions.clickElement('label:has-text("${gender}")')
    //}
    async fillNumber(number: string) {
        await this.actions.fillTextBox("#userNumber", number);
    }

    async dateOfBirth(date: string) {
        await this.actions.fillTextBox("#dateOfBirthInput", date);
        await this.page.keyboard.press('Escape');
    }

    async fillSubject(subject: string) {
        await this.actions.fillTextBox("#subjectsInput", subject);
    }

    async checkHobbies(hobby: number) {
        await this.actions.clickElement(`label[for='hobbies-checkbox-2']`);
    }

    async uploadPicture(picturePath: string) {
        await this.actions.uploadFile("#uploadPicture", picturePath);
    }

    async fillAddress(address: string) {
        await this.actions.fillTextBox("#currentAddress", address);
    }

   // async selectState(state: string) {
       // await this.actions.clickElement("#state");
        //await this.actions.clickElement(`text=${state}`);
   // }

async selectState(state: string) {
    const stateDropdown = this.page.locator("#state");
    await stateDropdown.click();
    // Wait for the option to appear and click it
    const stateOption = this.page.locator(`text=${state}`);
    await stateOption.waitFor({ state: "visible" });
    await stateOption.click();
}


async selectCity(city: string) {
    const cityDropdown = this.page.locator("#city");
    await cityDropdown.click();
    const cityOption = this.page.locator(`text=${city}`);
    await cityOption.waitFor({ state: "visible" });
    await cityOption.click();
}




 //   async selectCity(city: string) {
  //      await this.actions.clickElement("#city");
   //     await this.actions.clickElement(`text=${city}`);
  //  }

    async submitForm() {
        await this.actions.clickElement("#submit");
    }

}
