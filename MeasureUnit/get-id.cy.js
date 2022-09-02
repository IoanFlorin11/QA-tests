const demandPartnerPath = '/measure-units'

describe('GET id  measure units', () => {
  it('should contain a list of objects with specific properties', async () => {
      const response = await cy.request({
          method: 'GET',
          url: demandPartnerPath + '/a8150ae0-32e4-4d0c-9093-77ef27ce0630',
          headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
      })
          expect(response.status).to.eq(200)
        //   expect(response.body[0]).to.have.keys('code', 'quantity', 'type', 'id',  'createdAt', 'modifiedAt')
        //   expect(response.body[0]).to.have.property('code', 'Each')      
})

it('404! Incorrect address', async () => {
  const response = await cy.request({
      method: 'GET',
      url: 'wrongAddress' + '/a8150ae0-32e4-4d0c-9093-77ef27ce0630',
      failOnStatusCode: false,
      headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
  })
      expect(response.status).to.eq(404)
    //   expect(response.body[0]).to.have.keys('code', 'quantity', 'type', 'id',  'createdAt', 'modifiedAt')
    //   expect(response.body[0]).to.have.property('code', 'Each')      
})

it('404! Incorrect id', async () => {
  const response = await cy.request({
      method: 'GET',
      url: demandPartnerPath + '/wrongId',
      failOnStatusCode: false,
      headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
  })
      expect(response.status).to.eq(404)
    //   expect(response.body[0]).to.have.keys('code', 'quantity', 'type', 'id',  'createdAt', 'modifiedAt')
    //   expect(response.body[0]).to.have.property('code', 'Each')      
})
})