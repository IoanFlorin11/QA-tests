const demandPartnerPath = '/measure-units'


describe('PUT measure-units)', () => {
    it('update', async () => {
        const response = await cy.request({
            method: 'PUT',
            url: demandPartnerPath+'/d83a3e7c-b60f-42db-b631-72bdbe5a5f2a',
            headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
            body:
            {
                "code": "CaseOf7777372144347312",
                "quantity": 21,
                "type": "Case"
              }
        })
        expect(response.status).to.eq(200)
  })

  it('404! Wrong address', async () => {
    const response = await cy.request({
        method: 'PUT',
        url: 'wrongAddress'+'/d83a3e7c-b60f-42db-b631-72bdbe5a5f2a',
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
        body:
        {
            "code": "CaseOf7777372144347312",
            "quantity": 21,
            "type": "Case"
          }
    })
    expect(response.status).to.eq(404)
})

it('404! Wrong id', async () => {
    const response = await cy.request({
        method: 'PUT',
        url: demandPartnerPath+'/wrongId',
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
        body:
        {
            "code": "CaseOf7777372144347312",
            "quantity": 21,
            "type": "Case"
          }
    })
    expect(response.status).to.eq(404)
})

it('404! Wrong id', async () => {
    const response = await cy.request({
        method: 'PUT',
        url: demandPartnerPath+'/wrongId',
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
        body:
        {
            "code": "CaseOf7777372144347312",
            "quantity": 21,
            "type": "Case"
          }
    })
    expect(response.status).to.eq(404)
})

it('400! A valuea must be changed. the fields can not be empty', async () => {
    const response = await cy.request({
        method: 'PUT',
        url: demandPartnerPath+'/d83a3e7c-b60f-42db-b631-72bdbe5a5f2a',
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
        body:
        {
            // "code": "CaseOf7777372144347312",
            // "quantity": 21,
            // "type": "Case"
          }
    })
    expect(response.status).to.eq(400)
})


})

