const demandPartnerPath = '/addresses'

describe('POST address', () => {
    it('should contain a list of objects with specific properties', async () => {
        const response = await cy.request({
            method: 'POST',
            url: demandPartnerPath,
            headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
            body:
            {
                "addressLine1": "automationTest12",
                "addressLine2": "string25",
                "addressLine3": "string26",
                "city": "string27",
                "stateCode": "string29",
                "countryCode": "string332",
                "zipCode": "string222",
                "contactName": "string662",
                "companyName": "string882",
                "phone": "string929",
                "email": "string00"
            }
        })
        expect(response.status).to.eq(201)

  })

  it('Negative case- Neither of  addressLine1, city, zipCode, stateCode, contactName, countryCode can  null; phone can not be null or empty', async () => {
    const response = await cy.request({
        method: 'POST',
        url: demandPartnerPath,
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
        body:
        {
            // "addressLine1": "automationTest",
            "addressLine2": "string35",
            "addressLine3": "string63",
            // "city": "string73",
            // "stateCode": "string93",
            // "countryCode": "string333",
            // "zipCode": "string232",
            // "contactName": "string663",
            // "companyName": "string883",
            // "phone": "string993",
            // "email": "string003"
        }
    })
    expect(response.status).to.eq(400)
})
})

