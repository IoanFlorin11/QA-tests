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
  })

