

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { PomManager } from '../pages/PomManager.js';
import { Checkboxes } from '../pages/Checkboxes.js';

let pm;

test.beforeEach(async ({ page }) => {
    pm = new PomManager(page);
});

test.describe('Login Tests', () => {

    test('Valid Login Test', async ({ page }) => {
        const loginPage = pm.loginPage;
        await loginPage.navigate();
        await loginPage.login('tomsmith', 'SuperSecretPassword!');
        await pm.securePage.assertLoginMessage('You logged into a secure area!');
        await page.pause();
    });

    test('Invalid Login Test', async ({ page }) => {
        const loginPage = pm.loginPage;
        await loginPage.navigate();
        await loginPage.login('invalidUser', 'invalidPass');

        const errorMessage = await page.textContent('#flash');
        expect(errorMessage).toContain('Your username is invalid!');
    });
});

test.describe('Checkbox Tests', () => {

    test.beforeEach(async ({ page }) => {
        await pm.checkboxes.navigate();
    });

    test.only('Check First Checkbox Test', async ({ page }) => {
        const checkboxes = pm.checkboxes;
        await checkboxes.checkCheckbox(1);
        await checkboxes.assertCheckboxChecked(1, true);
    });

});


