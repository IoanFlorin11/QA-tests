const demandPartnerPath = '/demand-partner-products'



describe('PUT Demand Partner-Products', () => {
    it('upgrade objectives', async () => {
        const response = await cy.request({
            method: 'PUT',
            url: demandPartnerPath+'/6ce0a07b-2b94-4312-9c5e-961534638f16',
            headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
            body:
            {
               "productId": "7d37119b-a71c-443b-8525-43e8d8f4d0e6",
               "externalId": "TestPUT",
               "sku": "string22e24212342",
               "saleUnit": "Each",
               "price": 344
             }
        })
        expect(response.status).to.eq(200)
  })
    it('404! Negative case-wrong id', async () => {
        const response = await cy.request({
            method: 'PUT',
            url: demandPartnerPath+'/eadaeda',
            failOnStatusCode: false,
            headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e0'},
            body:
            {
                "productId": "7d37119b-a71c-443b-8525-43e8d8f4d0e6",
                "externalId": "NegativeCase",
                "sku": "automation",
                "saleUnit": "Each",
                "price": 1202
            }
        })
        expect(response.status).to.eq(404)
})

it('500! Negative case-wrong productId', async () => {
    const response = await cy.request({
        method: 'PUT',
        url: demandPartnerPath+'/6ce0a07b-2b94-4312-9c5e-961534638f16',
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e0'},
        body:
        {
            "productId": "wrong",
            "externalId": "NegativeTest",
            "sku": "automation",
            "saleUnit": "Each",
            "price": 1202
        }
    })
    expect(response.status).to.eq(500)
})

it('400! One value of an object needs to be changed.', async () => {
    const response = await cy.request({
        method: 'PUT',
        url: demandPartnerPath+'/6ce0a07b-2b94-4312-9c5e-961534638f16',
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e0'},
        body:
        {
            // "productId": "6ce0a07b-2b94-4312-9c5e-961534638f16",
            // "externalId": "NegativeTest",
            // "sku": "automation",
            // "saleUnit": "Each",
            // "price": 1202
        }
    })
    expect(response.status).to.eq(400)
})

it('404! Wrong address.', async () => {
    const response = await cy.request({
        method: 'PUT',
        url: 'wrongAddress'+'/6ce0a07b-2b94-4312-9c5e-961534638f16',
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e0'},
        body:
        {
            "productId": "6ce0a07b-2b94-4312-9c5e-961534638f16",
            "externalId": "NegativeTest",
            "sku": "automation",
            "saleUnit": "Each",
            "price": 1202
        }
    })
    expect(response.status).to.eq(404)
})
})

