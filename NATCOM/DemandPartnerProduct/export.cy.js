const demandPartnerPath = '/demand-partner-products'

describe('Export ', () => {
  it('This should export', async () => {
      const response = await cy.request({
          method: 'POST',
          url: demandPartnerPath+'/export',
          body:
          {
            "filter": {
              "saleUnits": [
                "Each"
              ],
              "price": 28.90,
              
              "brandIds": [
                "b8e79b16-62ab-437e-aab2-4c6a0bd16ffb"
              ],
              "upcs": [
                "023923300309"
              ],
              "titles": [
                "Earth's Best Organic Stage 2 Baby Food, Carrots, 4 oz."
              ],
              "eans": [
                null
              ],
              "gtins": [
                "10023923300306"
              ],
              "countriesOfOrigin": [
                "UNITED STATES"
              ],
              "measureUnitIds": [
                "128a5e6c-8b15-4eb3-a36b-7638cef7285b"
              ]
          
            },
          //   "
            "exportType": "CurrentPage",
            "mappings": [
              {
                "path": "",
                "name": "EXP"
              }
            ]
          }
      })
          expect(response.status).to.eq(200)
          
   
})
})