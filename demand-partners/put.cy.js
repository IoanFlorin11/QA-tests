const demandPartnerPath = '/demand-partners'



describe('PUT Demand Partner', () => {
    it('should contain a list of objects with specific properties', async () => {
        const response = await cy.request({
            method: 'PUT',
            url: demandPartnerPath+'/36b616b9-e49c-4591-811d-d360b5e7800a',
            body:
            {
                "name": "Positive case1332wqewq",
                "prefix": "automation762122121rww",
                "daysOfWaitingForFulfillment": 152
              }
        })
        expect(response.status).to.eq(200)
        // expect(response.body).has.property('name', 'Positive case1')
  })

  it('404! negative case- if we do not introduce something in body we should get an error', async () => {
    const response = await cy.request({
        method: 'PUT',
        url: demandPartnerPath+'/36b616b9-e49c-4591-811d-d360b5e7800a',
        failOnStatusCode: false,

        body:
        {
            // "name": "neg test",
            // "prefix": "automation2",
            // "daysOfWaitingForFulfillment": 20
          }
    })
    expect(response.status).to.eq(400)
})

it('500! negative case- we can not introduce a name that already exist or we should get an error', async () => {
    const response = await cy.request({
        method: 'PUT',
        url: demandPartnerPath+'/36b616b9-e49c-4591-811d-d360b5e7800a',
        failOnStatusCode: false,
        body:
        {
            "name": "NegativeTest16",
            "prefix": "automation2",
            "daysOfWaitingForFulfillment": 1565
          }
    })
    expect(response.status).to.eq(500)
})

it('500! negative case- we can not introduce a prefix tha already exist or we should get an error', async () => {
    const response = await cy.request({
        method: 'PUT',
        url: demandPartnerPath+'/36b616b9-e49c-4591-811d-d360b5e7800a',
        failOnStatusCode: false,
        body:
        {
            "name": "NegativeTest same prefix",
            "prefix": "automation",
            "daysOfWaitingForFulfillment": 1565
          }
    })
    expect(response.status).to.eq(500)
})


it('404! negative case- Incorrect id, no content found', async () => {
    const response = await cy.request({
        method: 'PUT',
        url: demandPartnerPath+'/incorrectId',
        failOnStatusCode: false,
        body:
        {
            "name": "NegativeTest same prefixe",
            "prefix": "automation-test323212dd",
            "daysOfWaitingForFulfillment": 1565
          }
    })
    expect(response.status).to.eq(404)
})

it('404! Negative test- incorrect address', async () => {
    const response = await cy.request({
        method: 'PUT',
        url: 'wrongaddress'+'/incorrectId',
        failOnStatusCode: false,
        body:
        {
            "name": "NegativeTest same prefixe",
            "prefix": "automation-test323212dd",
            "daysOfWaitingForFulfillment": 1565
          }
    })
    expect(response.status).to.eq(404)
})
})

