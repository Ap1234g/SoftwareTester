import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',
  timeout: 30 * 1000,
  retries: 0,
  reporter: [['list']],
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15 * 1000,
    ignoreHTTPSErrors: true,
  },
});
