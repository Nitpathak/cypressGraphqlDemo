# cypressGraphqlDemo
Cypress GraphQL End to End Automation Framework Boilerplate:

API Testing Framework using Cypress with GitHub Actions workflow for generating and publishing test report

Prerequisites:

 
    * Nodejs 
    * NPM
    * Cypress
    * Graphql APIs


    

Installation Steps:

    * Clone this repository
    * Move to the current repository
    * Setup a new npm package: npm init
    * Install cypress: npm install cypress

Design Pattern: Page Object Model


Test Execution:

    * To run the tests on your terminal: npm run cypress:run    
    * To run the tests against the Cypress Test Runner: npm run cypress:open   
    * On Cypress Test Runner:  
        * Select E2E Testing   
        * Choose a browser: Chrome or Electron
        * Click on Start E2E Testing in {browser}
        
Reporting: Mochawesome HTMl Report
    * Install mochawesome dependencies: npm i cypress-mochawesome-reporter
    
    * Add below lines in the cypress.config.js
    
        const { defineConfig } = require('cypress');
        module.exports = defineConfig({
        reporter: 'cypress-mochawesome-reporter',
        e2e: {
        setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on)
        },
     },
    })

    * Add to cypress/support/e2e.js: import 'cypress-mochawesome-reporter/register';
    

Github Actions:

    * .github/workflows/main.yml workflow would ensure the dependencies are up-to-date
    * Tests are always run on the latest dependencies
