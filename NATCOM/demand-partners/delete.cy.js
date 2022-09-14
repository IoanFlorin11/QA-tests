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

it('404! Negative test- wrong address, error', async () => {
    const response = await cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url: 'wrongAddress'+'/delete',
        body:
          [
              '1bc56f52-362c-4f71-8b6d-6c826c201f52'
          ]
    })
        expect(response.status).to.eq(404)
})

it('400! Negative test- wrong id, error', async () => {
    const response = await cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url: demandPartnerPath+'/delete',
        body:
          [
              'wrongId'
          ]
    })
        expect(response.status).to.eq(400)
})

it('405! Method not allowed', async () => {
    const response = await cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url: demandPartnerPath+'/deleteeee',
        body:
          [
              '1bc56f52-362c-4f71-8b6d-6c826c201f52'
          ]
    })
        expect(response.status).to.eq(405)
})
})