import { expect } from "playwright/test";
import { CommonActions } from "../utils/CommonActions";
import { Page } from "playwright/test";


export class admin{

    private page :Page;
    private actions : CommonActions

    constructor(page: any){

        this.page = page,
        this.actions = new CommonActions(page)
    }

    

          async openAdminModule() {
    await this.actions.clickelement("a[href='/web/index.php/admin/viewAdminModule']" , "")
    }

    async AddButton(){
        await this.actions.clickelement("button[class='oxd-button oxd-button--medium oxd-button--secondary']" , "");
    }
//async SelectUserRole(userrole: string) {
   
   // await this.page.click("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1"); 

   
 //   await this.page.click(`text=${userrole}`);
//}

async SelectUserRole(userrole: string) {
 const UserRoleDropdown = this.page.locator("div[class='oxd-grid-2 orangehrm-full-width-grid'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) i:nth-child(1)");
    await UserRoleDropdown.click();
    const userroleOption = this.page.locator(".oxd-select-text-input");
 
    await userroleOption.click();
}


    async  fillTextemplname(emplname:string){
        await this.actions.fillText("input[placeholder='Type for hints...']" , emplname);
    }


    
async SelectStatus(status: string) {
 
    const dropdown = await this.page.waitForSelector(
        "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) select"
    );

   
    await dropdown.selectOption({ label: status });
}


    async fillTextUsername(username: string){

        await this.actions.fillText("div[class='oxd-form-row'] div[class='oxd-grid-2 orangehrm-full-width-grid'] div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']", username);
    
    }

     async fillTextPassword(password: string){

        await this.actions.fillText("div[class='oxd-grid-item oxd-grid-item--gutters user-password-cell'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']", password);
    
    }

     async fillTextConfirpassword(confirpassword: string){

        await this.actions.fillText("div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']", confirpassword);
    
    }

    async SaveButton(){
        await this.actions.clickelement("button[type='submit']", "")
    }

    
}