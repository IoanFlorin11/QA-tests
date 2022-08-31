const demandPartnerPath = '/measure-units'

describe('POST ', () => {
    it('should contain a list of objects with specific properties', async () => {
        const response = await cy.request({
            method: 'POST',
            url: demandPartnerPath,
            headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
            body:
            {
                "code": "CaseOf777737217312",
                "quantity": 1,
                "type": "Each"
              }
        })
        expect(response.status).to.eq(201)

  })
  })
