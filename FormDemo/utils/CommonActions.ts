
import { Page } from 'playwright';

export class CommonActions {
   
    private page: Page;



    constructor(page: Page) {
        this.page = page;
    }
    
    // Navigate to URL
    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    // Fill a textbox
    async fillTextBox(selector: string, text: string): Promise<void> {
        await this.page.fill(selector, text);
    }

    // Click element
    async clickElement(selector: string): Promise<void> {
        await this.page.click(selector);
        await this.page.keyboard.press('Escape');
    }

    // Check if checkbox/radio is checked
    async isChecked(selector: string): Promise<boolean> {
        return await this.page.isChecked(selector);
    }

    // Upload file
    async uploadFile(selector: string, filePath: string | string[]): Promise<void> {
        await this.page.setInputFiles(selector, filePath);
    }

    // Select dropdown option using text
    async selectOptionByText(selector: string, text: string): Promise<void> {
        await this.page.selectOption(selector, { label: text });
    }

    async waitForElement(selector: string) {
        await this.page.waitForSelector(selector);
    }
   
async acceptAlert() {
    this.page.once("dialog", async dialog => {
        await dialog.accept();
    });
}

    
}

    

   