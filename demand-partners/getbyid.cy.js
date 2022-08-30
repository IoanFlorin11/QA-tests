const demandPartnerPath = '/demand-partners'

describe('GET Demand Partner', () => {
  it('should contain a list of objects with specific properties', async () => {
      const response = await cy.request({
          method: 'GET',
          url: demandPartnerPath+'/05d9a3f7-bbfd-48c1-ac4e-99a743c8e317'
      })
          expect(response.status).to.eq(200)
        //   expect(response.body[0]).to.have.keys('name', 'prefix', 'daysOfWaitingForFulfillment', 'id', 'createdAt', 'modifiedAt')
        //   expect(response.body[0]).to.have.property('name', 'US Foods')
        //   expect(response.body[1]).to.have.property('prefix', null)
        //   expect(response.body[2]).to.have.property('daysOfWaitingForFulfillment', null)
        //   expect(response.body[0]).to.have.property('id', '05d9a3f7-bbfd-48c1-ac4e-99a743c8e317')
   
})
})
