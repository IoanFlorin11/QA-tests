const demandPartnerPath = '/demand-partner-products'

describe('POST demand-partner-products', () => {
    it('is should post a list of objects', async () => {
        const response = await cy.request({
            method: 'POST',
            url: demandPartnerPath,
            headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e', },
            body:
            {
                "productId": "89b9b2e7-4c9a-4c9e-95ee-bc95a1152eb2",
                "externalId": "automationTest123111",
                "sku": "string",
                "saleUnit": "Each",
                "price": 0
              }
        })
        expect(response.status).to.eq(201)
        // expect(response.body).has.property('externalId', 'automationTest1')  
  })
   it('negative case - If we introduce an incorrect id we should get an error-there is no product with this id', async () => {
    const response = await cy.request({
        method: 'POST',
        url: demandPartnerPath,
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e', },
        body:
        {
            "productId": "incorrectid",
            "externalId": "NegativeCase000",
            "sku": "incorrectid1",
            "saleUnit": "Each",
            "price": 5
          }
    })
    expect(response.status).to.eq(400)
    // expect(response.body).has.property('externalId', 'automationTest1')  
})

 it('negative case - If we introduce an existing externalId we should get an error', async () => {
     const response = await cy.request({
         method: 'POST',
         url: demandPartnerPath,
         failOnStatusCode: false,
         headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e', },
         body:
         {
             "productId": "89b9b2e7-4c9a-4c9e-95ee-bc95a1152eb2",
             "externalId": "100144",
             "sku": "externalId-that-exists",
             "saleUnit": "Each",
             "price": 5
           }
     })
     expect(response.status).to.eq(500)
})



it('negative case - If productId is deleted  or is empty we should get an error', async () => {
    const response = await cy.request({
        method: 'POST',
        url: demandPartnerPath,
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e', },
        body:
        {
            "productId": "",
            "externalId": "productID can not be empty",
            "sku": "externalId-that-exists",
            "saleUnit": "Each",
            "price": 100
          }
    })
    expect(response.status).to.eq(400)
})

it('negative case - If externalId is null, empty or deleted we should get an error', async () => {
    const response = await cy.request({
        method: 'POST',
        url: demandPartnerPath,
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e', },
        body:
        {
            "productId": "89b9b2e7-4c9a-4c9e-95ee-bc95a1152eb2",
            "externalId": null,
            "sku": "externalId-that-exists",
            "saleUnit": "Each",
            "price": 100
          }
    })
    expect(response.status).to.eq(400)
})
})
