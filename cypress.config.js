import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  projectId: 'ioceso',
  screenshotOnRunFailure: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/report',
    charts: true,
    reportPageTitle: 'Demo Report',
    embeddedScreenshots: true,
  },
  env: {
    db: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'cypress_test',
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',

    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  },

  env: {
    AdminUser:{

        username: "Admin",
        password: "admin23"
      },

      endpoint: {
        authLogin: "/auth/login",
        dashboardIndex: "/dashboard/index"
      }
   }
})
