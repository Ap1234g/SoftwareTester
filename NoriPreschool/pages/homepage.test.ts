import  {test, expect } from '@playwright/test';
import { Page } from '@playwright/test';
import {CommonActions} from '../utils/CommonActions';


export class HomepageTest {


private page : Page;
private actions : CommonActions;

constructor(page: Page) {
    this.page = page;
    this.actions = new CommonActions(page);
}

    async navigateToHomepage() {
        await this.actions.navigateTo('http://localhost:4200/home');
    } 
    
    async navigateToCurriculum() {
        await this.actions.navigateTo('http://localhost:4200/curriculum');
    }   

    async navigateToAdmission() {
        await this.actions.navigateTo('http://localhost:4200/admission');
    }   

}



