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

it('405! Method not allowed-negative tets', async () => {
    const response = await cy.request({
        method: 'POST',
        url: demandPartnerPath+'/deleteee',
        failOnStatusCode: false,
        body:
          [
              '7dcc38b7-0190-472e-bc00-b74f2d70cbe8'
          ]
    })
        expect(response.status).to.eq(405)
})

it('404! Wrong address-negative test', async () => {
    const response = await cy.request({
        method: 'POST',
        url: 'wrongAddress'+'/delete',
        failOnStatusCode: false,
        body:
          [
              '7dcc38b7-0190-472e-bc00-b74f2d70cbe8'
          ]
    })
        expect(response.status).to.eq(404)
})

it('400! Wrong id-negative test', async () => {
    const response = await cy.request({
        method: 'POST',
        url: demandPartnerPath+'/delete',
        failOnStatusCode: false,
        body:
          [
              'wrongTest'
          ]
    })
        expect(response.status).to.eq(400)
})
})