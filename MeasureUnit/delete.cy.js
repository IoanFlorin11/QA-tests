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

it('405! Method not allowed', async () => {
    const response = await cy.request({
        method: 'POST',
        url: demandPartnerPath+'/deleteee',
        failOnStatusCode: false,
        body:
          [
              '47cd86ac-da24-4a9e-9e8f-e8445cdafe62'
          ]
    })
        expect(response.status).to.eq(405)
})

it('404! Wrong address', async () => {
    const response = await cy.request({
        method: 'POST',
        url: 'wrongAddress'+'/delete',
        failOnStatusCode: false,
        body:
          [
              '47cd86ac-da24-4a9e-9e8f-e8445cdafe62'
          ]
    })
        expect(response.status).to.eq(404)
})

it('400! Wrong id', async () => {
    const response = await cy.request({
        method: 'POST',
        url: demandPartnerPath+'/delete',
        failOnStatusCode: false,
        body:
          [
              'wrongId'
          ]
    })
        expect(response.status).to.eq(400)
})
})