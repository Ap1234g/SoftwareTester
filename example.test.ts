import { test, expect } from '@playwright/test';

test('open example.com', async ({ page }) => {
  await page.goto('https://shenclothing.com/');
 await page.waitForTimeout(5000); 
  await expect(page).toHaveTitle(/Shenclothing/);
  await page.screenshot({ path: 'shein.png' });
});
