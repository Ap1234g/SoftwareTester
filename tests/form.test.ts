import { test, expect } from '@playwright/test';
import { Practice } from '../pages/practice.test';
import { CommonActions } from '../utils/CommonActions';
import {Window} from '../pages/window.test';

test.beforeEach(async ({ page }) => {
  // setup before each test (if needed), page is provided by Playwright fixtures
});

test.describe('FormReg', () => {

  test('Form', async ({ page }) => {
    // instantiate the page object for the form (assumes Practice accepts page in constructor)
    const practice = new Practice(page);
    await practice.navigateToPracticePage();
    await practice.fillFirstName('Nontlantla');
    await practice.fillLastName('Nyamfu');
    await practice.fillEmail('nontlantlanyamfu5@gmail.com');
    await practice.fillNumber('0847327595');
    await practice.dateOfBirth('22 Dec 2025')
    await practice.fillSubject('Maths');
    await practice.checkHobbies(2);
    await practice.uploadPicture("C:/Users/Geek1_PC/Downloads/CertificateAI.pdf");
    await practice.fillAddress('213 zone 4 katlehong');
    await practice.selectState('Rajasthan');
    await page.screenshot({ path: 'form.png' });
    await practice.selectCity('Jaipur ');
    await practice.submitForm();
    await page.pause();
    
  });


  test.afterEach(async ({page}) => {
     await page.close();

  });




 test('tab', async ({page}) =>{

 
const window = new Window(page);

  await window.navigateTo();

 
  const [newTab] = await Promise.all([
    page.context().waitForEvent("page"),   
   await window.ClickTabButton()
   
  ]);

  await newTab.waitForLoadState();

  console.log("New tab URL:", newTab.url());
  
await newTab.screenshot({ path: "screenshots/newtab.png" });

  await page.pause();


 })

 test.only("Handle Alerts", async ({ page }) => {

 
  page.once("dialog", async dialog => {
    console.log(dialog.message());
    await dialog.accept();
  });


  // Confirm Alert
  page.once("dialog", async dialog => {
    await dialog.accept();   // or dialog.dismiss()
  });
  await page.click("#confirmButton");


  });

});


