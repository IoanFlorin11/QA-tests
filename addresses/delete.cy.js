const demandPartnerPath = '/addresses'

describe('DELETE ', () => {
  it('This should delete an address', async () => {
      const response = await cy.request({
          method: 'POST',
          url: demandPartnerPath+'/delete',
          headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
          body:
            [
                'a0f8724b-19cc-4980-b039-960e9c890071'
            ]
      })
          expect(response.status).to.eq(200)
          
   
})
})