const demandPartnerPath = '/demand-partner-products'



describe('PUT Demand Partner-Products', () => {
    it('upgrade objectives', async () => {
        const response = await cy.request({
            method: 'PUT',
            url: demandPartnerPath+'/8733fb9a-a32f-40bc-88b3-829b72491fab',
            headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
            body:
            {
               "productId": "c726edd4-06fe-4cfe-91f4-f1f73a426073",
               "externalId": "string11dtaawq",
               "sku": "string22e42123",
               "saleUnit": "Case",
               "price": 30
             }
        })
        expect(response.status).to.eq(200)
  })
    it('Negative case-no id', async () => {
        const response = await cy.request({
            method: 'PUT',
            url: demandPartnerPath+'/8733fb9a-a32f-40bc-88b3-829b72491fab',
            failOnStatusCode: false,
            headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e0'},
            body:
            {
            "productId": "c726edd4-06fe-4cfe-91f4-f1f73a426073",
            "externalId": "string111223724681471821",
            "sku": "string222",
            "saleUnit": "Each",
            "price": 33
            }
        })
        expect(response.status).to.eq(500)
})
})

