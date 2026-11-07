import { defineConfig, devices } from "@playwright/test";

// Set this to a Cloudflare preview URL to test an already deployed build.
const baseURL = process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:4173";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
  // Next.js exports static HTML, so `next start` cannot serve this build.
  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : {
        command: "serve out --listen tcp://127.0.0.1:4173 --no-clipboard",
        url: baseURL,
        reuseExistingServer: false,
      },
});
