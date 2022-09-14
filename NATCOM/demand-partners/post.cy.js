const demandPartnerPath = '/demand-partners'


describe('POST Products', () => {
    it('should post', async() => {
        const response = await cy.request({
            method: 'POST',
            url: demandPartnerPath,
            body:
            {
                "name": "Automation Test Positive3",
                "prefix": "automation-test3232122",
                "daysOfWaitingForFulfillment": 0
            }
        })
        expect(response.status).to.eq(201)

    })
    it('400! We should not be able to post with no name introduced ', async() => {
        const response = await cy.request({
            method: 'POST',
            url: demandPartnerPath,
            failOnStatusCode: false,
            body:
            {
                "name": "",
                "prefix": "negative-test-no-name",
                "daysOfWaitingForFulfillment": 0
            }
        }) 

        expect(response.status).to.eq(400)
        // expect(response.body).has.property('name', 'Automation Test1')
    })
    it('400! We should not be able to post with no name property ', async() => {
        const response = await cy.request({
            method: 'POST',
            url: demandPartnerPath,
            failOnStatusCode: false,
            body:
            {
                // "name": "",
                "prefix": "neg-test-no-prop-name",
                "daysOfWaitingForFulfillment": 0
            }
        }) 

        expect(response.status).to.eq(400)
})
    it('500! We should not be able to post with the same prefix ', async() => {
        const response = await cy.request({
            method: 'POST',
            url: demandPartnerPath,
            failOnStatusCode: false,
            body:
            {
                "name": "Negative case same prefix",
                "prefix": "neg-test-no-prop-name",
                "daysOfWaitingForFulfillment": 0
            }
        }) 

        expect(response.status).to.eq(500)
})
    it('500! We should not be able to post with the same name ', async() => {
        const response = await cy.request({
            method: 'POST',
            url: demandPartnerPath,
            failOnStatusCode: false,
            body:
            {
                "name": "Us Foods",
                "prefix": "neg-test-no-prop-name",
                "daysOfWaitingForFulfillment": 0
            }
        }) 

        expect(response.status).to.eq(500)
})

it('404! We should not be able to post with the same name ', async() => {
    const response = await cy.request({
        method: 'POST',
        url: 'wrongaddress',
        failOnStatusCode: false,
        body:
        {
            "name": "Test for wrong address",
            "prefix": "negtest1212",
            "daysOfWaitingForFulfillment": 0
        }
    }) 

    expect(response.status).to.eq(404)
})
})
