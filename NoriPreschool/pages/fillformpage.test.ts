import { Page } from "playwright";
import {CommonActions} from '../utils/CommonActions';
import {test, expect} from 'playwright/test';


export class fillformpageTest {


    private page : Page;    
    private actions : CommonActions;

    constructor(page: Page) {
        this.page = page;
        this.actions = new CommonActions(page);
    }
        async navigateTohomepage() {
            await this.actions.navigateTo('http://localhost:4200/home');
        }

        async navigateToAdmissionForm() {
            await this.actions.navigateTo('http://localhost:4200/admission-form');
            
        
        }

        async fillchildInfo(fullname :string, age:string, gender:string, dateofbirth:string, identitynumber:string , physicaladdress:string, preschool : string ){



            await this.actions.FillText("#FullName", fullname);

            await this.actions.FillText("#Age", age);


    await this.actions.ClickElement("#Gender");
          if (gender) {
    const genderDropdown = this.page.locator("#Gender");
    await genderDropdown.click();
    // Wait for the option to appear and click it

 await this.page.locator('#Gender').selectOption('Female');
            

            await this.actions.FillText("#DOB", dateofbirth);
        await this.page.keyboard.press('Escape');



            await this.actions.FillText("#IdentityNumber", identitynumber);

            await this.actions.FillText("#PhysicalAddress", physicaladdress);


          await this.actions.ClickElement("#Preschool");
          if (preschool) {
    const preschoolDropdown = this.page.locator("#Preschool");
    await preschoolDropdown.click();
    // Wait for the option to appear and click it
  
 await this.page.locator('#Preschool').selectOption('Nori Mali');

   
    
}
        

    
}

}

        async fillMotherInfo(name: string , Surname: string, Identitynumber : string, maritalstatus: string, contactNumber : string, homeAddress : string ){

            await this.actions.FillText("#MotherName", name);

            await this.actions.FillText("#MotherSurname", Surname);

            await this.actions.FillText("#MotherID", Identitynumber);

           

await this.actions.ClickElement("#MotherMaritalStatus");
          if (maritalstatus) {
    const maritalStatusDropdown = this.page.locator("#MotherMaritalStatus");
    await maritalStatusDropdown.click();
    // Wait for the option to appear and click it

 await this.page.locator('#MotherMaritalStatus').selectOption('Married');



}

            await this.actions.FillText("#MotherContactNumber", contactNumber);

            await this.actions.FillText("#MotherHomeAddress", homeAddress);
        }

        async fillFatherInfo(name: string , Surname: string, Identitynumber : string, maritalStatus: string, contactNumber : string ){

            await this.actions.FillText("#fatherName", name);   

            await this.actions.FillText("#fatherSurname", Surname);

            await this.actions.FillText("#FatherID", Identitynumber);
         
await this.actions.ClickElement("#FatherMaritalStatus");
          if (maritalStatus) {
    const maritalStatusDropdown = this.page.locator("#FatherMaritalStatus");
    await maritalStatusDropdown.click();
    // Wait for the option to appear and click it

 await this.page.locator('#FatherMaritalStatus').selectOption('Married');


    
}


            await this.actions.FillText("#fatherContactNumber", contactNumber);

           

        }

        async fillHealthInfo(allergies :string , disable:string,typeofdisability:string, phobia:string){

            await this.actions.FillText("#Allergies", allergies);

    await this.actions.ClickElement("#disable");
          if (disable) {
    const disableDropdown = this.page.locator("#disable");
    await disableDropdown.click();
    // Wait for the option to appear and click it

 await this.page.locator('#disable').selectOption('Yes');

 await this.actions.ClickElement("#disability");
          if (typeofdisability) {
    const typeOfDisabilityDropdown = this.page.locator("#disability");
    await typeOfDisabilityDropdown.click();
    // Wait for the option to appear and click it

 await this.page.locator('#disability').selectOption('Physical Disability');
}


    
}



            await this.actions.FillText("input[id='medical condition']", phobia);
        }


       async checktoddlerInterest(ToysandPlay :string, artandcreativivty:string,storytime:string,musicanddancing:string){

            await this.actions.ClickElement("input[value='toys']");
            await this.actions.ClickElement("input[value='art']");
            await this.actions.ClickElement("input[value='books']");
            await this.actions.ClickElement("input[value='music']");
            
          
        }

        async UploadDocuments(childbirthcertificatepath:string, cliniccardpath:string ){
  

            const [fileChooser1] = await Promise.all([
                this.page.waitForEvent('filechooser'),
                this.actions.ClickElement("#document"), // Button that triggers file selection
            ]);  await fileChooser1.setFiles(childbirthcertificatepath);

            const [fileChooser2] = await Promise.all([
                this.page.waitForEvent('filechooser'),
                this.actions.ClickElement("input[id='Clinic card']"), // Button that triggers file selection    

            ]);await fileChooser2.setFiles(cliniccardpath);


          //  const [fileChooser3] = await Promise.all([
             //   this.page.waitForEvent('filechooser'),
              //  this.actions.ClickElement("input[id='Mom Id']"), // Button that triggers file selection     
   // ]);      //      await fileChooser3.setFiles(momidpath);      


         //   const [fileChooser4] = await Promise.all([
            //    this.page.waitForEvent('filechooser'),
             //   this.actions.ClickElement("input[id='Dad Id']"), // Button that triggers file selection          
          //  ]);    //        await fileChooser4.setFiles(dadid); 

          //  const [fileChooser5] = await Promise.all([      
            //    this.page.waitForEvent('filechooser'),      
            //    this.actions.ClickElement("input[id='proof of resisdence']"), // Button that triggers file selection
  //]);       //     await fileChooser5.setFiles(proofofresidencepath);
                      


        }


        async registerForm(){
            await this.actions.ClickElement('input[value="Register Now"]');
        }
    }