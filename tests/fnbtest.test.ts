import { test, expect } from "@playwright/test";
import { Applynow } from "../pages/applynow.tests";
import { login } from "../pages/login.tests";


test.describe("FNB Automation", () => {

  test("fnb_Automation", async ({ page }) => {

    const fnbAutomation = new Applynow(page);

    await fnbAutomation.navigateTo();
    await fnbAutomation.navigateTo();
await fnbAutomation.acceptCookies();
await fnbAutomation.clickApply();

    await fnbAutomation.clickApply();

    await fnbAutomation.fillTextID("0112220734084");
    await fnbAutomation.fillTextCell("0810033763");
    await fnbAutomation.ContinueButton();

    await page.screenshot({ path: "fnb.png" });
  });


  test.afterEach(async (page) => {
  
    //await page.close();

  })

  test.only("login" , async ({page}) =>{


    const fnb_Automation =new login(page);
    await fnb_Automation.navigateTo();
    await fnb_Automation.fillTextUsername("nontlantlanyamfu8@gmail.com");
    await fnb_Automation.fillTextPassword("Nori@123");
    await fnb_Automation.loginButton();
    await page.screenshot({path:"login.png"})
    await page.pause();


});

});

