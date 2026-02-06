
import { test, expect } from '@playwright/test';
import { RegisterPage } from '../Pages/RegisterPage';
import { CommonActions } from '../utils/CommonActions';
import { Page } from '@playwright/test';
import { LoginPage } from '../Pages/loginPage';
import { AddcartPage } from '../Pages/AddcartPage';


test.describe('sauceDemo' ,  () => {



test('signup test', async ({page}) => {

    const registerPage = new RegisterPage(page);
    await registerPage.navigateToUrl();
    await registerPage.navigateToRegisterPage();
    await registerPage.fillSignUpForm("Nontlantla","nyamfu","nontlantlanyamfu2@gmail.com", "Nontlantla@123");
    await registerPage.clickCreatebtn();
     await page.locator('iframe[title="Main content of the hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Skip Challenge' }).click();
await  page.screenshot({ path: 'saucedemo/screenshots/signup.png' });

})

//test('signup test Negative', async ({page}) => {
 //   const registerPage = new RegisterPage(page);
 //   await registerPage.navigateToUrl();
  //  await registerPage.navigateToRegisterPage();
  //  await registerPage.fillSignUpForm("Nontlantla","nyamfu","nontlantla34", "Nontlantla@123");
//    await registerPage.clickCreatebtn();

//})


test('logintest ' , async  ({page}) => {

     const loginpage = new LoginPage(page);
     await loginpage.navigateToUrl();
     await loginpage.navigateTologin();
     await loginpage.filllogin("nontlantlanyamfu8@gmail.com", "Nontlantl123");
     await loginpage.clickSignInBtn();
     await page.pause();
     await page.locator('iframe[title="Main content of the hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Skip Challenge' }).click();

})

test('addcart' , async ({page}) => {


    const addcartpage = new AddcartPage(page);
    await addcartpage.navigateTo();
    await addcartpage.navigateToBlog();
    await addcartpage.sizeDropdown("M");
    await addcartpage.clickAddcartBtn();
    await page.pause()
    await addcartpage.navigateTocheckout();
await addcartpage.clickcheckout();
await addcartpage.fillcontact("ntlantlanyamfu72gnail.com");
//await addcartpage.Selectcountry("South Africa")
await addcartpage.filldelivery( "nontlantla", "nyamfu" , "geeks", "23 tuscany village", "no 15 views" , "kalimpour", "1243", '0735639872');
await addcartpage.clickcheckout();
await addcartpage.fillpayment("5674 4568 3468 3467 ", "05/35" , "453", "Miss n nyamfu", "");
await addcartpage.clickPaynowbtn();


})




});



   
