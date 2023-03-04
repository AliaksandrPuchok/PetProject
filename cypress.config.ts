import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
  pageLoadTimeout: 120000,
  defaultCommandTimeout: 10000,
  viewportWidth: 1280,
  viewportHeight: 800,
  chromeWebSecurity: false,
  watchForFileChanges: false,
  e2e: {
    baseUrl:'https://www.onliner.by/',
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    specPattern: ['cypress/integration/**/*.{feature, features}'],
    excludeSpecPattern: [
      '**/plugins/**.js',
      '**/support/**',
      '**/tsconfig.json'
    ],
  },
});