
describe('Setting', () => {
    beforeEach(() => {
        cy.login("natcom3@yopmail.com", "123456789")
        cy.wait(5000)
       if(cy.get('.pick-partner-button').contains('Boxed')){
            cy.get('.pick-partner-button', {timeout:10000}).click()
            cy.get('.primary > .btn-content', {timeout:10000}).click()
       }else{
            cy.get('.pick-partner-button', {timeout:10000}).click()
            cy.get('#headlessui-dialog-33 > div > div.relative.inline-block.align-bottom.bg-white.p-6.rounded-lg.text-left.shadow-xl.transform.transition-all.sm\:my-8.sm\:align-middle > div > div > div.flex.mt-12 > button.button.primary.ml-auto.h-9').click()
       }
    })


    afterEach(() => {
        cy.logout()
    })

    it('report',  () => {
        cy.get(reports).click( { force: true})     
        cy.get(finalInvoices).click()
        cy.wait(5000)
        cy.get(closeFinalInvoices).should('be.visible')
        cy.get(xButtonInvoices).click()
    }) 

    it('settings',  () => {
        cy.get(settings, {timeout: 1000}).click( { force: true})   
        cy.get(tenantDetails).click()
        cy.wait(3000)
        
    }) 

    it('Orders',  () => {
        cy.get(sales).click()
        //ORDERS
        cy.get(orders).click()
        cy.wait(3000)
        //REFRESH
        cy.get(ordersRefresh).click()
        cy.wait(8000)

        cy.get(firstOrder).click()
        cy.wait(1500)
        cy.get(orderEdit).click()
        //no editable tickets
        cy.get(cancelEdit).click()
        cy.get(orderDetails).click()
        // cy.get(closeOrderDetails).click()

        //REFUNDS
        cy.get(refunds).click()
        cy.wait(3000)

    }) 

    it('Inventory',  () => {
        cy.get(inventory).click()

        //BOXED PRODUTS+
        cy.get(boxedProducts).click()
        // cy.wait(3000)
        // cy.get(refreshBoxedProducts).click()
        // cy.wait(3000)
        if(cy.get(firstBoxedProduct).should('be.visible')){
            cy.get(firstBoxedProduct).click()
        }else{
            cy.get(refreshBoxedProducts).click()
            cy.wait(3000)
            cy.get(firstBoxedProduct).click()
        }

        //SYSTEM PRODUCTS
    }) 

})





const reports = ('#root > div > div.side-menu > div:nth-child(6) > div.side-menu-button.null > div')
const finalInvoices = ('#root > div > div.main-container.flex > div > div > div > div.card.products-list-card > div > div.table-grid-container > div > div:nth-child(1) > div:nth-child(1) > span')
const closeFinalInvoices = ('.secondary')
const xButtonInvoices = ('.relative > .icon-btn')

const settings = (':nth-child(7) > .side-menu-button > .side-menu-button-group')
const tenantDetails = ('#root > div > div.main-container.flex > div > div > div > div.settings-page-grid > div.card.tenant-information-card > div.tenant-info-table-container > div > div.table-grid-container > div > div:nth-child(1) > div.grid-cell.false > span > button')

const sales = ('#root > div > div.side-menu > div:nth-child(3) > div.side-menu-button.undefined')
const orders = (':nth-child(1) > .side-menu-button')
const ordersRefresh = ('#root > div > div.main-container.flex > div > div > div > div.title-bar > div.ml-auto.flex.items-end.justify-end > button:nth-child(3)')
const refunds = ('.bg-gray-50 > :nth-child(2) > .side-menu-button')
const firstOrder = ('#root > div > div.main-container.flex > div > div > div > div.card.orders-list-card > div > div.table-grid-container > div > div:nth-child(1) > div:nth-child(2)')
const orderEdit = ('#root > div > div.main-container.flex > div > div > div > div.title-bar.mb-3 > div.ml-auto.flex.items-end.justify-end > button:nth-child(2)')
const cancelEdit = ('.edit-order-container > .flex > .button')
const orderDetails = ('.grid-row > :nth-child(4)')
const closeOrderDetails = ('.btn-content > svg')

//INVENTORY
const inventory = ('#root > div > div.side-menu > div:nth-child(4) > div.side-menu-button.undefined')
const boxedProducts = (':nth-child(1) > .side-menu-button')
const refreshBoxedProducts = ('#root > div > div.main-container.flex > div > div > div > div.title-bar > div.ml-auto.flex.items-end.justify-end > button:nth-child(3)')
const firstBoxedProduct = ('#root > div > div.main-container.flex > div > div > div > div.card.products-list-card > div > div.table-grid-container > div > div:nth-child(1) > div:nth-child(2) > span > div')