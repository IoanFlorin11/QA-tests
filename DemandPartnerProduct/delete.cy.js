const demandPartnerPath = '/demand-partner-products'

describe('DELETE ', () => {
  it('This should delete', async () => {
      const response = await cy.request({
          method: 'POST',
          url: demandPartnerPath+'/delete',
          body:
            [
                '7dcc38b7-0190-472e-bc00-b74f2d70cbe8'
            ]
      })
          expect(response.status).to.eq(200)
          
   
})
})