import {test , expect} from '@playwright/test';


test("assertion",
   async ({page})=>{ 

 

    await page.goto("https://the-internet.herokuapp.com");

//assertion for url and title
    await expect(page).toHaveURL("https://the-internet.herokuapp.com");

    await expect(page).toHaveTitle("The Internet");


    await page.pause();


//assertion for visible element

await expect(page.locator("h1")).toBeVisible();


await page.pause();

//assertion for text content

await expect(page.locator("h2")).toHaveText("Available Examples");

 await page.pause();


 //assertion for contains text

   await expect(page.locator("body")).toContainText("Checkboxes");

    //assertion for count
   await expect(page.locator("li")).toHaveCount(44);

   await page.pause();

   //element to checked is enabled or disabled
   await page.goto("https://the-internet.herokuapp.com/checkboxes");

   await page.getByRole('checkbox').first().check();
   await page.getByRole('checkbox').nth(1).uncheck();

   await page.pause();

   //verify text store in variable
   await page.goto("https://the-internet.herokuapp.com");
   const headrerText = await page.locator("h1");
   await expect(headrerText).toBe('Welcome to the Internet');


    });
