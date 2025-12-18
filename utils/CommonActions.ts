import { Page } from "playwright/test";

export class CommonActions{


    private page : Page;

    constructor(page : Page){

        this.page = page ;
    }

    

    async navigateTo(url :string ): Promise< void>{
    await this.page.goto(url)

    }



    async clickelement( selector:string , text :string) : Promise<void>{


        await this.page.click(selector);
    }


async fillText(selector :string, text :string): Promise<void>{


    await this.page.fill(selector , text);
}

async CountinueButton(selector :string , text :string) : Promise<void>{
    await this.page.click(selector) ;
}
  async loginButton(selector :string , text :string) : Promise<void>{
    await this.page.click(selector) ;
  }

}