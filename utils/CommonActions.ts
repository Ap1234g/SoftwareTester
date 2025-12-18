import { expect, Locator, Page } from "playwright/test";

export class CommonActions{
   

    private page: Page;

    constructor(Page: any){

    this.page = Page;
    }

    async navigateTo(url : string){
     
    await this.page.goto(url, { waitUntil: "networkidle" })

    }


    async fillText(selector : string , text : string ): Promise<void>{

        await this.page.fill(selector , text )
    }



    async clickelement(selector :string , text :string):Promise<void>{


        await this.page.click(selector)
    }


      async selectOptionByText(selector: string, text: string): Promise<void> {
        await this.page.selectOption(selector, { label: text });
    }
    

    async selectFromDropdown(dropdownSelector: string, optionText: string): Promise<void> {

  await this.page.locator(dropdownSelector).click();

  
  await this.page.locator(`div[role='option']:has-text("${optionText}")`).click();
}


 static async waitForVisible(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
  }

  static async waitAndClick(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  static async click(locator: Locator) {
    await locator.click();
  }

  static async waitForPageLoad(page: Page) {
    await page.waitForLoadState('networkidle');
  }

  static async verifyVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  static async verifyText(locator: Locator, expectedText: string) {
    await expect(locator).toHaveText(expectedText);
  }



  static async fillText(locator: Locator, value: string) {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(value);
  }


  

  




}

