const demandPartnerPath = '/demand-partners'

describe('DELETE ', () => {
  it('This should delete an address', async () => {
      const response = await cy.request({
          method: 'POST',
          url: demandPartnerPath+'/delete',
          body:
            [
                '1bc56f52-362c-4f71-8b6d-6c826c201f52'
            ]
      })
          expect(response.status).to.eq(200)
          
   
})
})