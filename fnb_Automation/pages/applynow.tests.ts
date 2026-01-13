import { Page } from "@playwright/test";
import { CommonActions } from "../utils/CommonActions";

export class Applynow {

  private page: Page;
  private actions: CommonActions;

  constructor(page: Page) {
    this.page = page;
    this.actions = new CommonActions(page);
  }

  async navigateTo() {
    await this.actions.navigateTo("https://www.fnb.co.za/for-you/borrow/credit-cards/private-clients.html?gclsrc=aw.ds&gad_source=1&gad_campaignid=20511257699&gbraid=0AAAAADcOygic1E1Xc0G4JbEyoBWD54JRa&gclid=Cj0KCQiAgP_JBhD-ARIsANpEMxwTATvq8qzet2hPO98RYTsgpEXUqmyK5CZUk0ko-WBYiZSBj8SWcd0aAsXREALw_wcB");
  }

  async clickApply() {
    await this.actions.clickelement("div:nth-child(1) div:nth-child(3) div:nth-child(2) div:nth-child(1) button:nth-child(1) span:nth-child(1)", ""); // class selector needs dot
  }

  async fillTextID(idNumber: string) {
    await this.actions.fillText("#idNumber", idNumber);
  }

  async fillTextCell(cell: string) {
    await this.actions.fillText("#cellphoneNumber", cell);
  }

  async ContinueButton() {
    await this.actions.clickelement("button[id='submitButton'] span[class='btn--text']", "");
  }

  async acceptCookies() {
  const cookieBanner = this.page.locator("#cookieBanner");
  const acceptButton = this.page.locator("text=Accept");

  if (await cookieBanner.isVisible()) {
    await acceptButton.click();
  }
}

}
