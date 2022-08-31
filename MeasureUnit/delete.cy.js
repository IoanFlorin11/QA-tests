const demandPartnerPath = '/measure-units'

describe('DELETE ', () => {
  it('This should delete an address', async () => {
      const response = await cy.request({
          method: 'POST',
          url: demandPartnerPath+'/delete',
          body:
            [
                '47cd86ac-da24-4a9e-9e8f-e8445cdafe62'
            ]
      })
          expect(response.status).to.eq(200)
          
   
})
})