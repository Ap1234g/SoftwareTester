import { test, expect } from '@playwright/test';
import { HomepageTest } from '../pages/homepage.test';
import{contactpageTest} from '../pages/contactpage.test';
import { LoginPageTest } from '../pages/loginpage.test';
import { Page } from '@playwright/test';
import { registerTest } from '../pages/register.test';
import { forgotpasswordpageTest } from '../pages/forgotpasswordpage.test';
import { fillformpageTest } from '../pages/fillformpage.test';

test.describe('Homepage Tests', () => {
    test('Navigate to Homepage', async ({ page }) => {
       
         const homepage = new HomepageTest(page);

         await homepage.navigateToHomepage();
           // await page.screenshot({ path: 'homepage.png' });

            await homepage.navigateToCurriculum();

            await homepage.navigateToAdmission();
    });


    test('Contact Page Form Submission', async ({ page }) => {
        const contactpage = new contactpageTest(page);
        
        await contactpage.navigateToContactPage();
            await contactpage.fillName("Nontlantla")
            await contactpage.fillLastName("Mabaso")
            await contactpage.fillEmail("nonr@gmail.com")
            await contactpage.fillMessage("I would like to know more about the school.")
            await contactpage.submitForm("Nontlantla", "nonr@gmail.com", "I would like to know more about the school.");

    });
    

 // test.describe('Contact Us – Google Map', () => {

  //test('Map is visible', async ({ page }) => {
  // const contact = new contactpageTest(page);
 //  await contact.navigateToContactPage();
 //   await contact.verifyMapIsVisible();
  //});

 // test('Map shows correct location', async ({ page }) => {
 //   const contact = new contactpageTest(page);
  // await contact.navigateToContactPage();
  //  await contact.verifyMapHasLocation('70 Corwin St, San Francisco, CA 94114');
  //});


  test.describe('Positive test ', () => {

    test('Login with correct credentials credentials', async ({ page }) => {
      const loginpage =  new LoginPageTest(page)
      await loginpage.navigateToLoginPage();
      await loginpage.fillUsername("admin@example.com");
      await loginpage.fillPassword("admin123");
      await loginpage.submitLogin();
      await page.screenshot({ path: 'login_success.png' });
    });


    test('Login with incorrect credentials', async ({ page }) => {
        const loginpage =  new LoginPageTest(page)
        await loginpage.navigateToLoginPage();
        await loginpage.fillUsername("admin@example.com");
        await loginpage.fillPassword("123wrongpassword");
        await loginpage.submitLogin();
        await page.screenshot({ path: 'login_failure.png' });
        });

test.describe('Payment Submission Test', () => {

    test.only('Positive test ', async ({page}) => {

        const loginpage = new LoginPageTest(page);
          await loginpage.navigateTopaymentSubmission();
            await loginpage.fillChildID("0112220734084");
            await loginpage.chooseFile("C:\\Users\\Geek1_PC\\Downloads\\academic report.doc");

            await loginpage.submitPayment();

 
await loginpage.verifySuccessMessage();


            await page.screenshot({ path: 'payment_submission.png' });
    });

    test ('Negative test ', async ({page}) => {
        
        const loginpage = new LoginPageTest(page);
          await loginpage.navigateTopaymentSubmission();
            await loginpage.fillChildID("975656545676");
            await loginpage.chooseFile("C:\\Users\\Geek1_PC\\Downloads\\academic report.doc");
            await loginpage.submitPayment();
            await page.screenshot({ path: 'payment_submission_failure.png' });
    });



test.describe('Learner Progress Page Test', () => {

    test('Navigate to Learner Progress Page', async ({page}) => {

        const loginpage = new LoginPageTest(page);
          await loginpage.navigateTolearnerprogress();
          await loginpage.haveTextDisplayed("Physical exercise");
          await loginpage.haveTextDisplayed("Yoga $ Stretching");

            

    
    });

});





});

});

 test.beforeAll(async () => {
        console.log('Starting Homepage Tests...');
    }
    );
    test.afterAll(async () => {
        console.log('Homepage Tests Completed.');


    });
    test.beforeEach(async () => {
        console.log('Starting a new test...');
    }
    );
    test.afterEach(async () => {
        console.log('Test completed.');

    });


    test('', async ({ page }) => {
        const registerpage = new registerTest(page);
        await registerpage.navigateToLoginPage();
        await registerpage.navigateToRegisterPage();
        await registerpage.fillRegisterForm("Nontlantla", "Mabaso", "nontlantla.mabaso@example.com", "SecurePass123!", "0123456789");
        await registerpage.submitRegister();
        await registerpage.clickloginlink();
        
        
    })
    test.afterEach(async () => {
        console.log('Registration test completed.');


    });

    test.describe('forgotpassword positive test', () => {

    test('Navigate to Forgot Password Page', async ({ page }) => {

   const forgotpasswordpage = new forgotpasswordpageTest(page);
        await forgotpasswordpage.navigateToLoginPage();
        await forgotpasswordpage.clickForgotPasswordLink();
        await forgotpasswordpage.fillnewPassword("NewSecurePass123!");
        await forgotpasswordpage.fillconfirmPassword("NewSecurePass123!");
        await forgotpasswordpage.submitresetPassword();




    });

});

    test.describe('fill form', ()=>{
    

    test('Fill Admission Form', async ({page}) => {
        
        const fillformpage = new fillformpageTest(page);
          await fillformpage.navigateTohomepage();
            await fillformpage.navigateToAdmissionForm();
            await fillformpage.fillchildInfo("Zimi Mabaso","4","Female","2019-05-15","9001015800083","123 Main St, Cityville","Mali");
             await fillformpage.fillMotherInfo("Lindiwe","Mabaso","8002025800083","Married","0823456789","456 Oak St, Cityville");
            await fillformpage.fillFatherInfo("Sibusiso","Mabaso","7503035800083","Married","0834567890");
            await fillformpage.fillHealthInfo("pork", "Yes", "Physical Disability", "Fear of heights");
            await fillformpage.checktoddlerInterest("toys","art","storytime","music");
            await fillformpage.UploadDocuments("C:\\Users\\Geek1_PC\\Downloads\\CertificateAI.pdf", "C:\\Users\\Geek1_PC\\Downloads\\academic report.doc" );

            await fillformpage.registerForm();
            await page.screenshot({ path: 'admission_form_filled.png' });


    });

});
});
