const demandPartnerPath = '/demand-partner-products'

describe('Search', () => {
    it('should contain a list of objects with specific properties', async () => {
        const response = await cy.request({
            method: 'POST',
            url: demandPartnerPath + '/search',
            headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
            body:
            {
                "saleUnits": ["Each" ],
                "price": 25.28,
                "brandIds": [
                    "54a15246-6511-4f73-a3b0-40e9f14b20f5"
                  ],
                  "upcs": [
                    "string"
                  ],
                  "titles": [
                    "string"
                  ],
                  "eans": [
                    "string"
                  ],
                  "gtins": [
                    "string"
                  ],
                  "countriesOfOrigin": [
                    "string"
                  ],
                  "measureUnitIds": [
                    "3fa85f64-5717-4562-b3fc-2c963f66afa6"
                  ],
                  "page": {
                    "size": 100,
                    "number": 1
                  },
                "searchInput": "100005"
              }
        })
        expect(response.status).to.eq(200) 
  })

  it('400! Negative test-wrong measureUnitIds', async () => {
    const response = await cy.request({
        method: 'POST',
        url: demandPartnerPath + '/search',
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
        body:
        {
            "saleUnits": ["Each" ],
            "price": 25.342343228,
            "brandIds": [
                "54a15246-6511-4f73-a3b0-40e9f14b20f5"
              ],
              "upcs": [
                "string"
              ],
              "titles": [
                "string"
              ],
              "eans": [
                "string"
              ],
              "gtins": [
                "string"
              ],
              "countriesOfOrigin": [
                "string"
              ],
              "measureUnitIds": [
                "wrongId"
              ],
              "page": {
                "size": 100,
                "number": 1
              },
            "searchInput": "100005"
          }
    })
    expect(response.status).to.eq(400) 
})


it('400! Negative test-wrong brandIds', async () => {
    const response = await cy.request({
        method: 'POST',
        url: demandPartnerPath + '/search',
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
        body:
        {
            "saleUnits": ["Each" ],
            "price": 25.28,
            "brandIds": [
                "wrongId"
              ],
              "upcs": [
                "string"
              ],
              "titles": [
                "string"
              ],
              "eans": [
                "string"
              ],
              "gtins": [
                "string"
              ],
              "countriesOfOrigin": [
                "string"
              ],
              "measureUnitIds": [
                "3fa85f64-5717-4562-b3fc-2c963f66afa6"
              ],
              "page": {
                "size": 100,
                "number": 1
              },
            "searchInput": "100005"
          }
    })
    expect(response.status).to.eq(400) 
})

it('400! Negative test-wrong saleUnits', async () => {
    const response = await cy.request({
        method: 'POST',
        url: demandPartnerPath + '/search',
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
        body:
        {
            "saleUnits": ["test" ],
            "price": 25.28,
            "brandIds": [
                "54a15246-6511-4f73-a3b0-40e9f14b20f5"
              ],
              "upcs": [
                "string"
              ],
              "titles": [
                "string"
              ],
              "eans": [
                "string"
              ],
              "gtins": [
                "string"
              ],
              "countriesOfOrigin": [
                "string"
              ],
              "measureUnitIds": [
                "3fa85f64-5717-4562-b3fc-2c963f66afa6"
              ],
              "page": {
                "size": 100,
                "number": 1
              },
            "searchInput": "100005"
          }
    })
    expect(response.status).to.eq(400) 
})

it('500! Wrong Sorting', async () => {
    const response = await cy.request({
        method: 'POST',
        url: demandPartnerPath + '/search',
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
        body:
        {
            "saleUnits": ["Each" ],
            "price": 25.28,
            "brandIds": [
                "54a15246-6511-4f73-a3b0-40e9f14b20f5"
              ],
              "upcs": [
                "string"
              ],
              "titles": [
                "string"
              ],
              "eans": [
                "string"
              ],
              "gtins": [
                "string"
              ],
              "countriesOfOrigin": [
                "string"
              ],
              "measureUnitIds": [
                "3fa85f64-5717-4562-b3fc-2c963f66afa6"
              ],
              "page": {
                "size": 100,
                "number": 1
              },
              "sorting": [
                {
                  "property": "string",
                  "direction": "Asc"
                }
            ],
            "searchInput": "100005"
          }
    })
    expect(response.status).to.eq(500) 
})


it('404! Wrong Address', async () => {
    const response = await cy.request({
        method: 'POST',
        url: 'wrongAddress' + '/search',
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
        body:
        {
            "saleUnits": ["Each" ],
            "price": 25.28,
            "brandIds": [
                "54a15246-6511-4f73-a3b0-40e9f14b20f5"
              ],
              "upcs": [
                "string"
              ],
              "titles": [
                "string"
              ],
              "eans": [
                "string"
              ],
              "gtins": [
                "string"
              ],
              "countriesOfOrigin": [
                "string"
              ],
              "measureUnitIds": [
                "3fa85f64-5717-4562-b3fc-2c963f66afa6"
              ],
              "page": {
                "size": 100,
                "number": 1
              },
            "searchInput": "100005"
          }
    })
    expect(response.status).to.eq(404) 
})

})
  
