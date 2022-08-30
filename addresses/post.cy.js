const demandPartnerPath = '/addresses'

describe('POST address', () => {
    it('should contain a list of objects with specific properties', async () => {
        const response = await cy.request({
            method: 'POST',
            url: demandPartnerPath,
            headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
            body:
            {
                "addressLine1": "string441",
                "addressLine2": "string5",
                "addressLine3": "string6",
                "city": "string7",
                "stateCode": "string9",
                "countryCode": "string33",
                "zipCode": "string22",
                "contactName": "string66",
                "companyName": "string88",
                "phone": "string99",
                "email": "string00"
            }
        })
        expect(response.status).to.eq(201)
        // expect(response.body).has.property('city', 'string7')
  })
  })
