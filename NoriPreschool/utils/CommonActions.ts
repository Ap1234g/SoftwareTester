import { Page } from "playwright/test";

export class CommonActions {
   
   
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    // Navigate to URL
    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }
   
    // Fill text in input field
    async FillText(selector: string, text: string): Promise<void> {
        await this.page.fill(selector, text);
    }
    // Click on element
    async ClickElement(selector: string): Promise<void> {
        await this.page.click(selector);
    }

    async verifyMapIsVisible(selector: string): Promise<boolean> {
        const element = this.page.locator(selector);
        return await element.isVisible();
    }
    async verifyMapHasLocation(selector: string, expectedText: string): Promise<boolean> {
        const element = this.page.locator(selector);
        const src = await element.getAttribute('src');
        return src?.includes(expectedText) || false;
    }

    async FileUpload(selector: string, filePath: string): Promise<void> {
        const fileInput = this.page.locator(selector);
        await fileInput.setInputFiles(filePath);
    }

    async isTextDisplayed(selector: string, expectedText: string): Promise<boolean> {
        const element = this.page.locator(selector);
        const textContent = await element.textContent();
        return textContent?.includes(expectedText) || false;
    }
  async checkCheckbox(selector: string): Promise<void> {
        const checkbox = this.page.locator(selector);
        const isChecked = await checkbox.isChecked();
        if (!isChecked) {

            await checkbox.check();
        }
    }

    async dropdownSelectByValue(selector: string, value: string): Promise<void> {
        const dropdown = this.page.locator(selector);
        await dropdown.selectOption({ value });
    }
    
}