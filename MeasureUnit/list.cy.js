const demandPartnerPath = '/measure-units'

describe('List measure unit', () => {
  it('list', async () => {
      const response = await cy.request({
          method: 'POST',
          url: demandPartnerPath + '/list',
          headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
          body:{
           
              "searchInput": "Case Of 10"
          }
      })
          expect(response.status).to.eq(200)
   
         
})
})