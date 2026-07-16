const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8dth5z',
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
