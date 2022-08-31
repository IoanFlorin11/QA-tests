const demandPartnerPath = '/measure-units'

describe('GET measure-unit', () => {
  it('should contain a list of objects with specific properties', async () => {
      const response = await cy.request({
          method: 'GET',
          url: demandPartnerPath,
          headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
      })
          expect(response.status).to.eq(200)
          expect(response.body[0]).to.have.keys('code', 'quantity', 'type', 'id',  'createdAt', 'modifiedAt')
          expect(response.body[0]).to.have.property('code', 'Each')
   
})
})