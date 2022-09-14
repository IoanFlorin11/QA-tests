// const cypress = require("cypress")

describe('Login&Logout', () => {
    it('LOGIN',  () => {
        cy.visit('https://ui-naturalcommerce-dev.azurewebsites.net/')
        cy.get('[id=email]',{timeout: 10000}).type('natcom3@yopmail.com')
        cy.get('[id=password]').type('123456789')
        cy.get('[id=next]').should('be.visible').click({ force: true })
  })
    it('Logout',  () => {
      cy.get('#headlessui-menu-button-1 > div').click()
      cy.get('#headlessui-menu-item-4').click()
})
})

