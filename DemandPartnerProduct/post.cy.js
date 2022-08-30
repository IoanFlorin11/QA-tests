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
                "externalId": "string2121212121",
                "sku": "string",
                "saleUnit": "Each",
                "price": 0
              }
        })
        expect(response.status).to.eq(201)
       
  })
  })
