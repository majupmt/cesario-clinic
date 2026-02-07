import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

    // Timeouts
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 15000,

    // Viewport padrão (mobile-first)
    viewportWidth: 390,
    viewportHeight: 844,

    // Menos poluição no terminal
    video: false,
    screenshotOnRunFailure: true,

    // Reporter limpo
    reporter: 'spec',

    setupNodeEvents(on, config) {
      // Limpa logs repetitivos
      on('task', {
        log(message: string) {
          console.log(`  → ${message}`)
          return null
        },
      })
    },
  },
})