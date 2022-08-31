// const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    baseUrl: 'https://natcom-api-development.azurewebsites.net'
  },
  video: false,
  screenshotOnRunFailure: false
};