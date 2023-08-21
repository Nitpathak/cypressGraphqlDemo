const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: false,
    reportPageTitle: "Project API Detail Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    //saveAllAttempts: false,
  },
  e2e: {
    baseUrl: "https://spacex-production.up.railway.app/",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      // implement node event listeners here
    },
  },
});
