import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',
  timeout: 30 * 1000,
  retries: 0,
  reporter: [['html', { open: 'never' }]],
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15 * 1000,
    ignoreHTTPSErrors: true,
  },
  // Run tests in parallel
  fullyParallel: false,

  // Browsers to run
  projects: [
    {
     name: 'Chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  //  {
      //name: 'Firefox',
      // use: {
        //...devices['Desktop Firefox'],
    //  },
      
      
  //  }
  ],

});



