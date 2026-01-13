import {  test ,expect } from "playwright/test"
import { login } from "../page/login.tests";
import { admin } from "../page/admin.tests";
import { crud } from "../page/crud.tests";
import { edit } from "../page/edit.tests";
import { report } from "../page/report.tests";
 

test.describe("OrangeHRM", () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new login(page);

    await loginPage.navigateTo();
    await loginPage.fillTextUsername("Admin");
    await loginPage.fillTextPassword("admin123");
    await loginPage.loginButton();

    
  });

  test("should login", async ({ page }) => {
    await expect(page).toHaveURL(/dashboard/);
    await page.screenshot({ path: "login.png" });
  });

  test("Add user", async ({ page }) => {
    const adminPage = new admin(page);

    await adminPage.openAdminModule();
    await adminPage.AddButton();
   await adminPage.SelectUserRole("ESS");
    await adminPage.fillTextemplname("nontlantla");
   await adminPage.SelectStatus("Enabled");
    await adminPage.fillTextUsername("nontlantlanyamfu8@gmail.com");
    await adminPage.fillTextPassword("nori@344");
    await adminPage.fillTextConfirpassword("nori@344");
    await adminPage.SaveButton();

    await page.screenshot({ path: "admin.png" });
  });

  test ("crud" , async ({page}) =>{
// delete
  const crudPage = new crud(page);


  await crudPage.navigateTo()
  await crudPage.openAdminModule();
 await page.getByRole('link', { name: 'Admin' }).click();
  await page.locator('.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').first().click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
  await page.getByRole('button', { name: ' Yes, Delete' }).click();


  })
 
//edit

test('edit', async ({ page }) => {


  const editPage = new edit(page);

  await editPage.navigateTo()
  await editPage.openAdminModule();

   await page.locator('div:nth-child(4) > .oxd-table-row > div:nth-child(6) > .oxd-table-cell-actions > button:nth-child(2)').click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('Nontlanta');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: '×' }).click();
  
});
   test.only('report' , async ({page}) =>{

const reportPage = new report(page);

await reportPage.navigateTo()
  await reportPage.openAdminModule();





   })


})


