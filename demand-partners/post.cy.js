const demandPartnerPath = '/demand-partners'


describe('POST Products', () => {
    it('should post', async() => {
        const response = await cy.request({
            method: 'POST',
            url: demandPartnerPath,
            body:
            {
                "name": "test for post.2",
                "prefix": "test.post.3",
                "daysOfWaitingForFulfillment": 0
            }
        })
        expect(response.status).to.eq(201)
        expect(response.body).has.property('name', 'test for post.2')
      


    })
})