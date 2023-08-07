const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
module.exports = defineConfig({
  retries: 0,
  viewportWidth: 1440,
  viewportHeight: 900,
  video: false,
  pageLoadTimeout: 10000,
  e2e: {
    env: {
      username: 'jan.testowy@wskz.pl',
      password: 'aqLrvDJ348'
    },
    baseUrl: "http://localhost:3000",
    specPattern: ["**/*.feature"],
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );
      return config;
    },
  },
});
