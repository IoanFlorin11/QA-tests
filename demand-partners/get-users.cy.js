const demandPartnerPath = '/demand-partners'


describe('GET Demand Partner', () => {
  it('should contain a list of objects with specific properties', async () => {
      const response = await cy.request({
          method: 'GET',
          url: demandPartnerPath+'/05d9a3f7-bbfd-48c1-ac4e-99a743c8e317/users'
      })
          expect(response.status).to.eq(200)
})
})