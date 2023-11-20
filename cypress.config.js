const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // animationDistanceThreshold: 5,
    // defaultCommandTimeout: 4000,
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    downloadsFolder: 'cypress/downloads',
    // execTimeout: 60000,
    fixturesFolder: 'cypress/fixtures',
    pageLoadTimeout: 60000,
    // requestTimeout: 5000,
    // slowTestThreshold: 10000,
    viewportHeight: 660,
    viewportWidth: 1000,
    watchForFileChanges: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});



