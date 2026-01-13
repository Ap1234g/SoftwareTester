import { Page } from "playwright/test";
import { CommonActions } from "../utils/CommonActions";
import { expect , test  } from "playwright/test";
import { Locator } from "playwright";

export class gmapsTest {

    private page:Page;
    private actions: CommonActions;
    readonly mapIframe: Locator;
    constructor(page: Page) {

        this.page = page;

       this.mapIframe = page.locator('iframe[src*="google.com/maps"]');
        this.actions = new CommonActions(page);
    }


    async navigateToContactPage() {

        await this.actions.navigateTo('http://localhost:4200/contact');

    }

     async verifyMapIsVisible() {
    await expect(this.mapIframe).toBeVisible();
  }

  async verifyMapHasLocation(expectedText: string) {
    const src = await this.mapIframe.getAttribute('src');
    expect(src).toContain(expectedText);
  }
}

