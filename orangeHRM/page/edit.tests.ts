import { Locator, Page } from "playwright/test";
import { expect } from "playwright/test";
import { CommonActions } from "../utils/CommonActions";


export class edit{

    private page: Page
    private actions : CommonActions

  readonly closeButton: Locator;
  readonly addButton: Locator;
  readonly usernameTextbox: Locator;
  readonly saveButton: Locator;

    constructor(page :any ){

        this.page = page
        this.actions= new CommonActions(page)
    
  this.closeButton = page.getByRole('button', { name: '×' });

    // Icon-only add button (from codegen)
    this.addButton = page.getByRole('button').nth(4);

    this.usernameTextbox = page.getByRole('textbox').nth(2);

    this.saveButton = page.getByRole('button', { name: 'Save' });
  }


  async navigateTo(){


        await this.actions.navigateTo("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
      }


       async openAdminModule() {
    await this.actions.clickelement("a[href='/web/index.php/admin/viewAdminModule']" , "")
    }

  async closePopupIfPresent() {
    await CommonActions.waitAndClick(this.closeButton);
  }

  async clickAdd() {
    await CommonActions.waitAndClick(this.addButton);
  }

  async enterUsername(username: string) {
    await CommonActions.fillText(this.usernameTextbox, username);
  }

  async saveUser() {
    await CommonActions.waitAndClick(this.saveButton);
  }
}


