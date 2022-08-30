const demandPartnerPath = '/addresses'


describe('PUT Address (update)', () => {
    it('should contain a list of objects with specific properties', async () => {
        const response = await cy.request({
            method: 'PUT',
            url: demandPartnerPath+'/439dce4a-0c22-4eac-8e54-8cf628ca5c2a',
            headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
            body:
            {
                "addressLine1": "string1",
                "addressLine2": "string1",
                "addressLine3": "string1",
                "city": "string1",
                "stateCode": "string1",
                "countryCode": "string1",
                "zipCode": "string1",
                "contactName": "string1",
                "companyName": "string1",
                "phone": "string1",
                "email": "string1"
              }
        })
        expect(response.status).to.eq(200)
     

  })
  })

