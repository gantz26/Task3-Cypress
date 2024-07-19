const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gfv5am',
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://conduit.realworld.how/',
  },
});
