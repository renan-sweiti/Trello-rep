
const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
 e2e: {
  specPattern: "**/*.{feature,cy.js}",
  baseUrl: "https://trello.com/",

   setupNodeEvents(on, config) {
     on("file:preprocessor", cucumber());
   },
 },
 
});
