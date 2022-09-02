const demandPartnerPath = '/measure-units'

describe('List measure unit', () => {
  it('list', async () => {
      const response = await cy.request({
          method: 'POST',
          url: demandPartnerPath + '/list',
          headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
          body:{
            "page": {
                "size": 100,
                "number": 1
              },
              "searchInput": "Case Of 10"
          }
      })
          expect(response.status).to.eq(200)   
})

it('500! Wrong "Sort"', async () => {
    const response = await cy.request({
        method: 'POST',
        url: demandPartnerPath + '/list',
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
        body:{
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
              "searchInput": "Case of 10"
        }
    })
        expect(response.status).to.eq(500)   
})

it('500! Wrong Address', async () => {
    const response = await cy.request({
        method: 'POST',
        url: 'wrongAddress' + '/list',
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
        body:{
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
              "searchInput": ""
        }
    })
        expect(response.status).to.eq(404)   
})

it('500! Wrong Address', async () => {
    const response = await cy.request({
        method: 'POST',
        url: 'wrongAddress' + '/listtt',
        failOnStatusCode: false,
        headers: {DemandPartnerId: '3fad6e81-d602-46b2-8c50-a7515f6a0b4e'},
        body:{
            "page": {
                "size": 100,
                "number": 1
              },
              "searchInput": ""
        }
    })
        expect(response.status).to.eq(404)   
})
})