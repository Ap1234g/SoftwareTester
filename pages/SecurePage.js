import { expect} from "@playwright/test";
import { CommonActions } from "../utils/CommonActions.js";

export class SecurePage {
constructor(page){
     this.page = page;
   this.actions = new CommonActions(page);
}

async getSuccessMessage(){
    return await this.actions.getText('#flash');
}

async assertLoginMessage(passedMessage){
    const message = await this.getSuccessMessage();
    expect(message).toContain(passedMessage);
}

    }