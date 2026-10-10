import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 0,
  workers: 2,
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    headless: false, // Set to true if you do not want to see the browser pop up
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});