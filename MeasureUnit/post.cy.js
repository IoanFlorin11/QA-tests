const demandPartnerPath = '/measure-units'

describe('POST ', () => {
    it('should contain a list of objects with specific properties', async () => {
        const response = await cy.request({
            method: 'POST',
            url: demandPartnerPath,
            headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
            body:
            {
                "code": "CaseOfTest",
                "quantity": 1,
                "type": "Each"
              }
        })
        expect(response.status).to.eq(201)
  })

  it('404! Wrong address!', async () => {
    const response = await cy.request({
        method: 'POST',
        url: 'wrongAddress',
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
        body:
        {
            "code": "CaseOf777737217312",
            "quantity": 1,
            "type": "Each"
          }
    })
    expect(response.status).to.eq(404)
})

it('500! Can not post a name with a code that already exists', async () => {
    const response = await cy.request({
        method: 'POST',
        url: demandPartnerPath,
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
        body:
        {
            "code": "Each",
            "quantity": 12213,
            "type": "Each"
          }
    })
    expect(response.status).to.eq(500)
})

it('400! "Code" can not be empty or null', async () => {
    const response = await cy.request({
        method: 'POST',
        url: demandPartnerPath,
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
        body:
        {
            // "code": "Each",
            "quantity": 12213,
            "type": "Each"
          }
    })
    expect(response.status).to.eq(400)
})

it('400! "quantity"  must be greater than or equal to 1', async () => {
    const response = await cy.request({
        method: 'POST',
        url: demandPartnerPath,
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
        body:
        {
            "code": "NegativeTest1",
            // "quantity": 12213,
            "type": "Each"
          }
    })
    expect(response.status).to.eq(400)
})

it('404! Wrong address', async () => {
    const response = await cy.request({
        method: 'POST',
        url: 'wrongAddress',
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
        body:
        {
            "code": "NegativeTest12",
            "quantity": 12213,
            "type": "Each"
          }
    })
    expect(response.status).to.eq(404)
})
})
