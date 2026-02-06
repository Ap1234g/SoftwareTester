import { Page } from "playwright/test";
import { expect , test  } from "playwright/test";
import { CommonActions } from "../utils/CommonActions";

export class AddcartPage{

   private page : Page;
   private commonActions : CommonActions

   constructor(page :Page){

    this.page =  page ;
    this.commonActions = new CommonActions(page);

   }
    async navigateTo(){

        await this.commonActions.navigateTo('https://sauce-demo.myshopify.com/collections/all')
    }

  async navigateToBlog(){

    await this.commonActions.navigateTo('https://sauce-demo.myshopify.com/products/flower-print-jeans')
  }


  async sizeDropdown(p0: string){
    await this.commonActions.clickElement("#product-select-option-0")
    const sizeDropdown = this.page.locator("#product-select-option-0");
    await sizeDropdown.click();
}

async clickAddcartBtn(){

    await this.commonActions.clickElement("#add")
}

async navigateTocheckout(){

    await this.commonActions.navigateTo('https://sauce-demo.myshopify.com/cart')
}


   async clickcheckout(){

    await this.commonActions.clickElement("#checkout");
   }

   async fillcontact(contact :string){

    await this.commonActions.fillText("#email" , contact)

   }

  async Selectcountry(counrt:string){
 await this.commonActions.clickElement("#Select0")
     const Selectcountry = this.page.locator("#Select0")
  await Selectcountry.click();

 }

       async filldelivery(firstname: string, lastname: string, company: string, address: string, apartment: string, city: string, postalcode: string, phone: string){

      
                    await this.commonActions.fillText("#TextField0",firstname)
                    await this.commonActions.fillText("#TextField1",lastname)
                    await this.commonActions.fillText("#TextField2",company)
                    await this.commonActions.fillText("#TextField3",address)
                    await this.commonActions.fillText("#TextField4",apartment)
                    await this.commonActions.fillText("#TextField5",city)
                    await this.commonActions.fillText("#TextField6",postalcode)
                    await this.commonActions.fillText("#TextField7",phone)
       }

       async saveCheckBox(save:Selection){
  

        await this.commonActions.clickElement("label[for='save_shipping_information']")

       }

      async fillpayment( cardnumber:string, expirationdate: string,code:string , name :string , use:string){

             await this.commonActions.fillText("#number",cardnumber)
             await this.commonActions.fillText("#expiry",expirationdate)
             await this.commonActions.fillText("#name",code)
             await this.commonActions.fillText("body",name)
             await this.commonActions.clickElement("#billingAddressCheckbox")

      }


      async clickPaynowbtn(){


        await this.commonActions.clickElement("#checkout-pay-button")
      }


}





