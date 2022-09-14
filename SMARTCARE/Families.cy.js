
describe('Families tests', () => {
    beforeEach(() => {
        cy.viewport(1280, 960)
        cy.login("testdirector1@smart.care", "passistheword")
        cy.wait(5000)
    })

    afterEach(() => {
        cy.logout()
        cy.wait(3000)
    })


    //IN AFTER WE ARCHIVE THE FAMILY THAT WE ARE CREATING
    after(() => {
        cy.viewport(1280, 960)
        cy.login("testdirector1@smart.care", "passistheword")
        cy.wait(5000)
        cy.viewport(1280, 720)
        cy.wait(5000)
        cy.get(families).should('be.visible').click()
        cy.wait(4000)
        cy.get(searchFamily).should('be.visible').type('AutomationTestAddFamily')
        cy.wait(3000)
        cy.get(familyArchive).click()
        cy.get(continueArchive).click()
        cy.logout()

    })

    it('Add new Family',  () => {

        cy.get(families).should('be.visible').click()
        cy.wait(5000)
        cy.contains('Adults')
        cy.get(addFamily).should('be.visible').click()
        // cy.get(enterFamilyName).type('AutomationTestAddFamily')
        cy.wait(2000)
        //TEST for CANCEL BUTTON
        cy.get(cancelAdd).should('be.visible').click() //see if the cancel button works
        cy.get(addFamily).should('be.visible').click()
        cy.wait(2000)
        cy.get(enterFamilyName).type('AutomationTestAddFamily')
        cy.get(add).click()
        cy.wait(2000)
    }) 

    it('Complete the family, add an adult',  () => {
        cy.viewport(1280, 960)
        cy.wait(3000)
        cy.get(families).should('be.visible').click()
        cy.wait(4000)
        cy.get(searchFamily).should('be.visible').type('AutomationTestAddFamily')
        cy.contains('AutomationTestAddFamily') // TEST FOR SEARCH BAR ASWELL; SEARCH BAR IS WORKING
        cy.wait(3000)
        cy.get(searchedFamily).click()
        // cy.get(viewFamilyDetails).click()
        cy.get(addAdult).click()
        cy.get(adultEmail).click()
        cy.get(typeEmail).type('automationtest4432430@smartcare.com') //error if the person is archived
        cy.get(continueButton).click()
        cy.get(adultFirstName).click().type('Automation')
        cy.get(adultLastName).click().type('Testing1')
        cy.get(relationship).click()
        cy.get(relationFather).click()
        cy.get(phoneAdult).click().type('0002220020')
        cy.get(phoneTypeAdult).click()
        cy.get(phoneHomeAdult).click()
        cy.get(createAdult).click()
        cy.wait(2000)
        }) 

        it('Add adult using phone number',  () => {
        cy.viewport(1280, 960)
        cy.wait(3000)
        cy.get(families).should('be.visible').click()
        cy.wait(4000)
        cy.get(searchFamily).should('be.visible').type('AutomationTestAddFamily')
        cy.wait(3000)
        cy.get(searchedFamily).click()
        cy.get(addOtherAdult).click()
        cy.get(adultPhone).click()
        cy.get(typePhoneNumber).click().type('4446244540')
        cy.get(continueButton).click()
        cy.get(adultFirst2).click().type('Test')
        cy.get(adultLast2).click().type('AdultPhone')
        cy.get(newAdultEmail).click().type('phoneAdult22223@smart.care')
        cy.get(relationship2).click()
        cy.get(relationPhoneAdult).click()
        cy.get(phoneTypeAdult2).click()
        cy.get(phoneBusiness).click()
        
        cy.get(createAdult).click()
        cy.wait(2000)
        }) 

    it('Complete the family, add a child',  () => {
        cy.viewport(1280, 960)
        cy.wait(3000)
        cy.get(families).should('be.visible').click()
        cy.wait(4000)
        cy.get(searchFamily).should('be.visible').type('AutomationTestAddFamily')
        cy.wait(3000)
        cy.get(searchedFamily).click()
        cy.get(addChild).click()
        cy.get(childFirstName).click().type('Automation')
        cy.get(childLastName).click().type('Test Child')
        cy.get(childBirthday).type('02022000')
        cy.get(selectChildGender).click()
        cy.get(genderBoy).click()
        cy.get(addChildFinish).click()
        cy.wait(3000)
    }) 

    // it('Complete the family, Choose the Parent/Legal Guardian',  () => {
    //     cy.viewport(1280, 960)
    //     cy.wait(3000)
    //     cy.get(families).should('be.visible').click()
    //     cy.wait(4000)
    //     cy.get(searchFamily).should('be.visible').type('AutomationTestAddFamily')
    //     cy.wait(3000)
    //     cy.get(searchedFamily).click()
    //     cy.get(legalGuardianCheckbox).click()
    //     cy.get(accountHolder).click()
    //     cy.wait(3000)
    // }) 

})
 //add family
const families = ('body > sc-app-root > sc-center > sc-app-layout > div > aside > div > sc-nav-item:nth-child(4) > div > span.icon.ng-star-inserted')
const addFamily = ('[icon="d"] > button > .icon')
const enterFamilyName = ('#mat-input-9')
const cancelAdd = (' sc-add-family > mat-dialog-actions > sc-button.secondary > button')
const add = (' sc-add-family > mat-dialog-actions > sc-button:nth-child(2) > button')

//complete family
const searchFamily = ('.mat-form-field-prefix > .icon')
const searchedFamily = (':nth-child(1) > .cdk-column-family > .accent')
const viewFamilyDetails = ('body > sc-app-root > sc-center > sc-app-layout > div > section > sc-families > sc-families-list > sc-side-panel > sc-family-summary > div.side-panel-actions.ng-star-inserted > sc-button > button')
const addAdult = ('button > .icon')
const adultEmail = ('#mat-radio-10')
const typeEmail = ('#mat-input-8')
const continueButton = ('#mat-dialog-0 > sc-adult-lookup-check > mat-dialog-actions > sc-button:nth-child(2) > button')
const adultFirstName = ('#mat-input-9')
const adultLastName = ('.mat-form-field.ng-tns-c64-48 > .mat-form-field-wrapper > .mat-form-field-flex')
const relationship = ('#mat-select-0 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow')
const relationFather = ('#mat-option-1 > .mat-option-text')
const phoneAdult = ('#mat-input-12')
const phoneTypeAdult = ('#mat-select-2 > .mat-select-trigger > .mat-select-arrow-wrapper')
const phoneHomeAdult = ('#mat-option-18 > .mat-option-text')
const createAdult = (':nth-child(2) > button')

//add adult with phone
const adultPhone = ('#mat-radio-13 > .mat-radio-label')
const typePhoneNumber = ('#mat-input-10')
const adultFirst2 = ('.mat-focused > .mat-form-field-wrapper > .mat-form-field-flex')
const adultLast2 = ('.mat-form-field.ng-tns-c64-52 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
const newAdultEmail = ('.mat-form-field.ng-tns-c64-53 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
const relationPhoneAdult = ('#mat-option-18 > .mat-option-text')
const addOtherAdult = ('sc-add-adult > .secondary > button')
const continueAgain = (':nth-child(2) > button')
const relationship2 = ('.mat-form-field.ng-tns-c64-54 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
const phoneTypeAdult2 = ('.mat-form-field.ng-tns-c64-57 > .mat-form-field-wrapper > .mat-form-field-flex')
const phoneBusiness = ('#mat-option-23 > .mat-option-text')

//after
const familyArchive = ('body > sc-app-root > sc-center > sc-app-layout > div > section > sc-families > sc-families-list > sc-table-wrapper > table > tbody > tr:nth-child(1) > td.mat-cell.cdk-cell.cdk-column-actions.mat-column-actions.ng-star-inserted > sc-actions-cell > sc-button > button > span:nth-child(2)')
const continueArchive = ('.mat-dialog-actions > :nth-child(2) > button')

//add child
const addChild = ('.always-visible > .secondary > button')
const childFirstName = ('#mat-input-9')
const childLastName = ('#mat-input-10')
const childBirthday = ('#mat-input-11')
const selectChildGender = ('#mat-dialog-0 > sc-add-child-dialog > mat-dialog-content > form > mat-form-field.mat-form-field.ng-tns-c64-53.mat-primary.mat-form-field-type-mat-select.mat-form-field-appearance-standard.mat-form-field-can-float.ng-untouched.ng-pristine.ng-invalid.ng-star-inserted > div > div.mat-form-field-flex.ng-tns-c64-53')
const genderBoy = ('#mat-option-13 > span')
const addChildFinish = ('#mat-dialog-0 > sc-add-child-dialog > mat-dialog-actions > sc-button > button')

//PARENT/LEGAL GUARDIAN
const legalGuardianCheckbox = ('body > div:nth-child(7) > div:nth-child(4)')

//ACCOUNT HOLDER
const accountHolder = ('#mat-radio-12 > label > span.mat-radio-container > span.mat-radio-outer-circle')