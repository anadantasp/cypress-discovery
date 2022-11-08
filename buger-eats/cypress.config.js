const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  e2e: {
    baseUrl: 'https://buger-eats.vercel.app/',
    reporter: 'mochawesome',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'bugereats',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: true,
      reportFilename: 'customReportFilename',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // mochawesome
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
