import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://www.onliner.by/',
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