const demandPartnerPath = '/demand-partner-products'

describe('POST address', () => {
    it('should contain a list of objects with specific properties', async () => {
        const response = await cy.request({
            method: 'POST',
            url: demandPartnerPath + '/search',
            headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
            body:
            {
                "saleUnits": ["Each" ],
                "searchInput": "string"
              }
        })
        expect(response.status).to.eq(200)
        
  })
  })
