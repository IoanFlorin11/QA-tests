const demandPartnerPath = '/demand-partner-products'



describe('PUT Demand Partner-Products', () => {
    it('upgrade objectives', async () => {
        const response = await cy.request({
            method: 'PUT',
            url: demandPartnerPath+'/8733fb9a-a32f-40bc-88b3-829b72491fab',
            body:
            {
                "productId": "fee25a59-ede8-42a6-8629-4a5d098fee92",
               "externalId": "string11122372468147182",
               "sku": "string22",
               "saleUnit": "Each",
               "price": 33
             }
        })
        expect(response.status).to.eq(204)
        expect(response.body).has.property("supplierName", null)
  })
  })

