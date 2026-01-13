import {test , expect, Browser, BrowserContext, Page} from '@playwright/test';
import { chromium } from '@playwright/test';

//open browser before each test
let browser: Browser;
let context: BrowserContext;
let page: Page;

test.beforeAll( async () => {
  browser = await chromium.launch();
  console.log("Browser launched");
});

test.beforeEach( async () => {
  context = await browser.newContext();
  page = await context.newPage();
  console.log("New page opened");
//navigate to url 
   await page.goto('https://the-internet.herokuapp.com');

   await page.pause();

});


//close browser after each test
test.afterEach( async () => {
  await page.close();
  await context.close();
  console.log("Page closed");
});

//close browser after all tests
test.afterAll( async () => {
  await browser.close();
  console.log("Browser closed");
});


//sample test
test('A/B Test', async ({page}) => {
   await page.goto('https://the-internet.herokuapp.com');
await page.click('text="A/B Testing"');
const header = await page.textContent('h3')
 expect(header).toBe('A/B Test Control');
});

test('Checkbox test'  , async ({page}) => {
  await page.goto('https://the-internet.herokuapp.com');
  await page.click('text=Checkboxes');
  const checkbox = await page.isChecked('input[type="checkbox"]:nth-of-type(0)');
    expect(checkbox).toBe(false); 

});


