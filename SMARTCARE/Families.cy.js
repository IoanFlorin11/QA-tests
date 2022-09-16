
describe('Families tests', () => {
    beforeEach(() => {
        cy.viewport(1280, 960)
        cy.login("testdirector1@smart.care", "passistheword")
        cy.wait(3000)
    })

    afterEach(() => {
        cy.logout({ multiple: true})
        cy.wait(1500)
    })


    //IN AFTER WE ARCHIVE THE FAMILY THAT WE ARE CREATING
    after(() => {
        cy.viewport(1280, 960)
        cy.login("testdirector1@smart.care", "passistheword")
        cy.wait(3000)
        cy.viewport(1280, 720)
        // cy.wait(5000)
        cy.get(families).should('be.visible').click()
        cy.wait(3000)
        cy.get(searchFamily).should('be.visible').type('AutomationTestAddFamily')
        cy.wait(3000)
        cy.get(familyArchive).click()
        cy.get(continueArchive).click()
        cy.logout()

    })

    it('Add new Family',  () => {

        cy.get(families).should('be.visible').click()
        cy.wait(3000)
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
        cy.wait(2500)
        cy.get(searchFamily).should('be.visible').type('AutomationTestAddFamily')
        cy.contains('AutomationTestAddFamily') // TEST FOR SEARCH BAR ASWELL; SEARCH BAR IS WORKING
        cy.wait(3000)
        cy.get(searchedFamily).click()
        // cy.get(viewFamilyDetails).click()
        cy.get(addAdult).click()
        cy.get(adultEmail).click()
        cy.get(typeEmail).type('EmailTestHasTodBeChanged12121@smartcare.com') //error if the person is archived
        cy.get(continueButton).click()
        cy.get(adultFirstName).click().type('Automation')
        cy.get(adultLastName).click().type('Testing1')
        cy.get(relationship).click()
        cy.get(relationFather).click()
        cy.get(phoneAdult).click().type('0002020020')
        cy.get(phoneTypeAdult).click()
        cy.get(phoneHomeAdult).click()
        cy.get(createAdult).click()
        cy.wait(2000)
        }) 

        it('Add adult using phone number',  () => {
        cy.viewport(1280, 960)
        cy.wait(3000)
        cy.get(families).should('be.visible').click()
        cy.wait(2500)
        cy.get(searchFamily).should('be.visible').type('AutomationTestAddFamily')
        cy.wait(3000)
        cy.get(searchedFamily).click()
        cy.get(addOtherAdult).click()
        cy.get(adultPhone).click()
        cy.get(typePhoneNumber).click().type('1111009009')
        cy.get(continueButton).click()
        cy.get(adultFirst2).click().type('Test')
        cy.get(adultLast2).click().type('AdultPhone')
        cy.get(newAdultEmail).click().type('1NeedsToBeChannged1@smart.care')
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
        cy.wait(2500)
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

    it('Complete the family, Choose the Parent/Legal Guardian',  () => {
        cy.viewport(1280, 960)
        cy.wait(3000)
        cy.get(families).should('be.visible').click()
        cy.wait(2500)
        cy.get(searchFamily).should('be.visible').type('AutomationTestAddFamily')
        cy.wait(3000)
        cy.get(searchedFamily).click()
        cy.get(legalGuardianCheckbox).click()
        cy.wait(2000)
        cy.get(accountHolder).click()
        cy.wait(3000)
    }) 

    it('Complete the family, Choose an Emergency Contact and a Pick-Up Person for the child',  () => {
        cy.viewport(1280, 960)
        cy.wait(3000)
        cy.get(families).should('be.visible').click()
        cy.wait(2500)
        cy.get(searchFamily).should('be.visible').type('AutomationTestAddFamily')
        cy.wait(3000)
        cy.get(searchedFamily).click()
        cy.get(managePeople).click()
        cy.contains('Authorized Adults for')
        cy.get(emergencyContact).click()
        cy.get(pickupPerson).click()
        cy.wait(4000)
        cy.get(families).should('be.visible').click()
    }) 

    it('View family details',  () => {
        cy.viewport(1280, 960)
        cy.wait(3000)
        cy.get(families).should('be.visible').click()
        cy.wait(2000)
        cy.get(randomFamily).click()
        cy.get(viewDetails).click()
        cy.contains('Additional Info')
    }) 

    
    it('Edit family - Medical, add doctor',  () => {
        cy.viewport(1280, 960)
        cy.wait(3000)
        cy.get(families).should('be.visible').click()
        cy.wait(4000)
        cy.get(searchFamily).should('be.visible').type('AutomationTestAddFamily')
        cy.wait(3000)
        cy.get(':nth-child(1) > .cdk-column-adults > span').click()
        cy.get(viewDetails).click()
        cy.contains('Additional Info')
        cy.get(familyMedical).click()
        if(cy.contains('There are no medical providers configured yet').should('be.visible')){
            cy.get(addDoctor).click()
            cy.get(doctorName).click().type('DoctorTest')
            cy.get(doctorPhone).click().type('3333333333')
            cy.get(doctorAddress).click().type('Test Address')
            cy.get(doctorInsurance).click().type('Test Insurance')
            cy.get(doctorPolicy).click().type('Test Policy')
            cy.get(doctorType).click()
            cy.get(doctorDentist).click()
            cy.get(doctorSave).click()
            cy.wait(3000)
            cy.get(families).should('be.visible').click()
        }else {
            cy.get(families).should('be.visible').click()
        }
    }) 

    it('Edit family - Documents',  () => {
        cy.viewport(1280, 960)
        cy.wait(3000)
        cy.get(families).should('be.visible').click()
        cy.wait(4000)
        cy.get(searchFamily).should('be.visible').type('AutomationTestAddFamily')
        cy.wait(3000)
        cy.get(':nth-child(1) > .cdk-column-adults > span').click()
        cy.get(viewDetails).click()
        cy.contains('Additional Info')
        cy.get(familyDocuments).click()
        if(cy.contains('There are no documents').should('be.visible')){
            cy.get(addDocument).click()
            cy.wait(2000)
        }else {
            cy.get(families).should('be.visible').click()
        }
    }) 

    it('Edit family - Additional Info',  () => { //we can not press the buttons from the AdditionalInfo Section
        cy.viewport(1280, 960)
        cy.wait(3000)
        cy.get(families).should('be.visible').click()
        cy.wait(4000)
        cy.get(searchFamily).should('be.visible').type('AutomationTestAddFamily')
        cy.wait(3000)
        cy.get(':nth-child(1) > .cdk-column-adults > span').click()
        cy.get(viewDetails).click()
        cy.contains('Additional Info')
        cy.get(additionalInfo).click()
        cy.contains('Tags')
    }) 

    it('Edit family - Notes',  () => {
        cy.viewport(1280, 960)
        cy.wait(3000)
        cy.get(families).should('be.visible').click()
        cy.wait(4000)
        cy.get(searchFamily).should('be.visible').type('AutomationTestAddFamily')
        cy.wait(3000)
        cy.get(':nth-child(1) > .cdk-column-adults > span').click()
        cy.get(viewDetails).click()
        cy.contains('Additional Info')
        cy.get(familyNotes).click()
        if(cy.contains('There are no notes').should('be.visible')){
            cy.get(addFamilyNotes).click()
            cy.get(noteContent).click().type('Test Content')
            cy.get(noteSave).click()
            cy.wait(2000)
        }else {
            cy.get(families).should('be.visible').click()
        }
    }) 

    it('FILTER&SORT- BY FAMILY NAME: A-Z',  () => {
        cy.viewport(1280, 960)
        cy.wait(3000)
        cy.get(families).should('be.visible').click()
        cy.wait(2000)
        cy.get(filter).click()
        cy.get(sortByFamilyName).click()
        cy.get(aZ).click()
        cy.get(sortViewResults).click()
        cy.wait(1500)

    }) 

    it('FILTER&SORT- BY FAMILY NAME: Z-A',  () => {
        cy.viewport(1280, 960)
        cy.wait(3000)
        cy.get(families).should('be.visible').click()
        cy.wait(2000)
        cy.get(filter).click()
        cy.get(sortByFamilyName).click()
        cy.get(zA).click()
        cy.get(sortViewResults).click()
        cy.wait(1500)
    }) 

    it('FILTER&SORT- INCOMPLETE FAMILIES',  () => {
        cy.viewport(1280, 960)
        cy.wait(3000)
        cy.get(families).should('be.visible').click()
        cy.wait(2000)
        cy.get(filter).click()
        cy.get(sortByIncomplete).click()
        cy.get(sortNoGuardian).click()
        cy.get(sortNoEmergency).click()
        cy.get(sortNoEmergency).click()
        cy.get(sortNoPickup).click()
        cy.get(sortViewResults).click()
        cy.wait(1500)
    }) 

})
 //add family
const families = ('body > sc-app-root > sc-center > sc-app-layout > div > aside > div > sc-nav-item:nth-child(4) > div > span.icon.ng-star-inserted')
const addFamily = ('[icon="d"] > button > .icon')
const enterFamilyName = ('#mat-input-9')
const cancelAdd = (' sc-add-family > mat-dialog-actions > sc-button.secondary > button')
const add = (' sc-add-family > mat-dialog-actions > sc-button:nth-child(2) > button')
const randomFamily = (':nth-child(3) > .cdk-column-family')

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
const legalGuardianCheckbox = ('tbody > :nth-child(1) > .cdk-column-parent-guardian')

//ACCOUNT HOLDER
const accountHolder = (':nth-child(1) > .cdk-column-family-account-holder > .mat-radio-group')


//FAMILIES->CHILDREN->MANAGE PEOPLE->EMERGENCY CONTACT AND PICK-UP PEOPLE
const managePeople = ('[icon="*"] > button > :nth-child(2)')
const emergencyContact = ('#mat-checkbox-55 > .mat-checkbox-layout > .mat-checkbox-inner-container')
const pickupPerson = ('#mat-checkbox-59 > .mat-checkbox-layout > .mat-checkbox-inner-container')

//family details
const viewDetails = ('body > sc-app-root > sc-center > sc-app-layout > div > section > sc-families > sc-families-list > sc-side-panel > sc-family-summary > div.side-panel-actions.ng-star-inserted > sc-button > button')

//edit family
const familyMedical = ('sc-nav-group.hide-in-full-screen > :nth-child(2) > .item')
const addDoctor = ('body > sc-app-root > sc-center > sc-app-layout > div > section > sc-families > sc-family-details > sc-family-medical > sc-table-wrapper > div > div > sc-button > button')
const doctorName = ('.mat-focused > .mat-form-field-wrapper > .mat-form-field-flex')
const doctorPhone = ('.mat-form-field.ng-tns-c64-54 > .mat-form-field-wrapper > .mat-form-field-flex')
const doctorAddress = ('.double-span > .mat-form-field-wrapper > .mat-form-field-flex')
const doctorInsurance = ('.mat-form-field.ng-tns-c64-56 > .mat-form-field-wrapper > .mat-form-field-flex')
const doctorPolicy = ('.mat-form-field.ng-tns-c64-57 > .mat-form-field-wrapper > .mat-form-field-flex')
const doctorType = ('.mat-select-arrow-wrapper')
const doctorDentist = ('#mat-option-14 > span')
const doctorSave = (':nth-child(2) > button')

const familyNotes = ('sc-nav-group.hide-in-full-screen > :nth-child(4) > .item')
const addFamilyNotes = ('body > sc-app-root > sc-center > sc-app-layout > div > section > sc-families > sc-family-details > sc-family-notes > sc-notes-list > sc-table-wrapper > div > div > sc-button > button')
const noteContent = ('.mat-form-field.ng-tns-c64-53 > .mat-form-field-wrapper > .mat-form-field-flex')
const noteDate = ('.mat-form-field-should-float > .mat-form-field-wrapper > .mat-form-field-flex')
const noteSave = (':nth-child(2) > button')

const additionalInfo = ('sc-nav-group.hide-in-full-screen > :nth-child(3) > .item')

const familyDocuments = ('sc-nav-group.hide-in-full-screen > :nth-child(5) > .item')
const addDocument =('body > sc-app-root > sc-center > sc-app-layout > div > section > sc-families > sc-family-details > sc-family-documents > sc-documents-list > sc-table-wrapper > div > div > sc-button > button')

//FILTER&SORT

const filter = ('[icon=">"] > button')
const sortByFamilyName =('#mat-expansion-panel-header-14')
const aZ = ('#mat-radio-7 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle')
const zA = ('#mat-radio-8 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle')
const sortViewResults = ('.side-panel-actions > :nth-child(2) > button')

const clearSearch = ('.mat-form-field-suffix > .icon')

const sortByIncomplete = ('#mat-expansion-panel-header-15')
const sortNoGuardian = ('#mat-checkbox-47 > .mat-checkbox-layout > .mat-checkbox-inner-container')
const sortNoPickup =('#mat-checkbox-49 > .mat-checkbox-layout > .mat-checkbox-inner-container')
const sortNoEmergency = ('#mat-checkbox-48 > .mat-checkbox-layout')