// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('login', (email, password) => {
//     cy.visit('https://ui-naturalcommerce-dev.azurewebsites.net/')
//     cy.get('[id=email]',{timeout: 1000}).type(email)
//     cy.get('[id=password]').type(password)
//     cy.get('[id=next]').should('be.visible').click({ force: true })
// })

// Cypress.Commands.add("logout", () => {
//         cy.get('svg.text-gray-700').click()
//         cy.get('.text-left').click( { force: true})
//         cy.wait(5000)
//   })
  
//LOGIN FOR SMARTCARE 
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://stable-my.smartcare.com/index.html#/login')
    cy.get('[id=email]',{timeout: 1000}).type(email)
    cy.get('[id=password]').type(password)
    cy.get('.text-center > .font').should('be.visible').click({ force: true })
})

Cypress.Commands.add("logout", () => {
        // cy.get('.toggle-container > .item > .icon').click()
        cy.get('.mat-menu-trigger > .icon').click()
        cy.get('.mat-menu-content > :nth-child(3)').click()
  })
