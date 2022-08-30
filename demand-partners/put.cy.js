const demandPartnerPath = '/demand-partners'



describe('PUT Demand Partner', () => {
    it('should contain a list of objects with specific properties', async () => {
        const response = await cy.request({
            method: 'PUT',
            url: demandPartnerPath+'/1c21beb7-e997-42e2-9b71-d6f39c47e162',
            body:
            {
                "name": "mytest123",
                "prefix": "automation",
                "daysOfWaitingForFulfillment": 0
              }
        })
        expect(response.status).to.eq(200)
        expect(response.body).has.property('name', 'mytest123')
  })
  })

