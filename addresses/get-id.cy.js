const demandPartnerPath = '/addresses'

describe('GET by id', () => {
  it('should contain a list of objects with specific properties', async () => {
      const response = await cy.request({
          method: 'GET',
          url: demandPartnerPath + '/439dce4a-0c22-4eac-8e54-8cf628ca5c2a',
          headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
      })
          expect(response.status).to.eq(200)
        //   expect(response.body[0]).to.have.keys('addressLine1', 'addressLine2', 'addressLine3', 'city', 'stateCode', 'countryCode', 'zipCode', 'contactName', 'companyName', 'phone', 'email', 'id', 'createdAt', 'modifiedAt')
        //   expect(response.body[0]).to.have.property('city', 'MIAMI')
   
})
})