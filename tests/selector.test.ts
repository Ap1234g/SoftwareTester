import {test , expect} from '@playwright/test';

test("selector", async ({page})=>{
  //navaigate to click me page
  await page.goto("http://127.0.0.1:5500/clickme.html");

  //selectbyID
  await page.locator('#clickButton').click();

  // add pause
    await page.pause();


    // selecting by Class
    await page.locator('.button-style').click();

    //selecting tag name and Class
    await page.locator('button.button-style').click();

    //attribute value
    await page.locator('[data-action="increment"]').click();

    //selecting by partial attribute value
    await page.locator('[data-action^="inc"]').click();

});
