const demandPartnerPath = '/demand-partner-products'

describe('GET demand-partner-products', () => {
  it('should contain a list of objects with specific properties', async () => {
      const response = await cy.request({
          method: 'GET',
          url: demandPartnerPath + '/154c79ba-ad92-4d5d-9bb9-1e93aa3c07e8',
          headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
      })
          expect(response.status).to.eq(200)
//           expect(response.body[0]).to.have.keys('availableQuantity', 'createdAt', 'externalId', 'id', 'modifiedAt', 'price', 'product', 'saleUnit', 'sku', 'supplierName')
//           expect(response.body[0]).to.have.property('saleUnit', 'Each')      
})

it('404! Wrong id', async () => {
    const response = await cy.request({
        method: 'GET',
        url: demandPartnerPath + '/wrongId',
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
    })
        expect(response.status).to.eq(404)    
})

it('404! Wrong address', async () => {
    const response = await cy.request({
        method: 'GET',
        url: 'wrongAddress' + '/154c79ba-ad92-4d5d-9bb9-1e93aa3c07e8',
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
    })
        expect(response.status).to.eq(404)    
})
})