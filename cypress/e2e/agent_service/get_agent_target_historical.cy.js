import * as param from "../../fixtures/agent_service/get_agent_target_historical.json"

describe("Agent target historical ==> /v1/agent/target/historical", () => {
    context('Positive Case - Get agent target historical', () => {
        it('Get agent target historical use are id', () => {
            cy.request({
              method: 'GET',
              headers: { 'api-secret': Cypress.env('api_secret') },
              url: 'agent/v1/agent/target/historical',
              qs: param.getAgentHistoricalUseAreId
            }).should((response) => {
              expect(response.status).to.eq(200)
              expect(response.body.data[0].are_marketing_id).to.equal(param.getAgentHistoricalUseAreId.are_id)
              expect(response.body.data[0].month).to.equal(param.getAgentHistoricalUseAreId.month)
              expect(response.body.data[0].year).to.equal(param.getAgentHistoricalUseAreId.year)
            })
        })
        it('Get agent target historical use supervisor id', () => {
            cy.request({
              method: 'GET',
              headers: { 'api-secret': Cypress.env('api_secret') },
              url: 'agent/v1/agent/target/historical',
              qs: param.getAgentHistoricalUseSpvId
            }).should((response) => {
              expect(response.status).to.eq(200)
              expect(response.body.data[0].month).to.equal(param.getAgentHistoricalUseSpvId.month)
              expect(response.body.data[0].year).to.equal(param.getAgentHistoricalUseSpvId.year)
            })
        })
    })
    context('Negative Case - Get agent target historical', () => {
      it('Get agent target historical use are id not found', () => {
          cy.request({
            method: 'GET',
            headers: { 'api-secret': Cypress.env('api_secret') },
            url: 'agent/v1/agent/target/historical',
            qs: param.getAgentHistoricalUseAreIdNotFound
          }).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.data).to.be.empty
          })
      })
      it('Get agent target historical use supervisor id not found', () => {
        cy.request({
          method: 'GET',
          headers: { 'api-secret': Cypress.env('api_secret') },
          url: 'agent/v1/agent/target/historical',
          qs: param.getAgentHistoricalUseSpvIdNotFound
        }).should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.data).to.be.empty
        })
      })
      it('Get agent target historical without are id and spv id', () => {
        cy.request({
          method: 'GET',
          headers: { 'api-secret': Cypress.env('api_secret') },
          url: 'agent/v1/agent/target/historical',
          failOnStatusCode: false,
          qs: {
            month: 10,
            year: 2022
          }
        }).should((response) => {
          expect(response.status).to.eq(400)
          expect(response.body.message).to.equal(`Param can't be empty.`)
        })
      })
      it('Get agent target are without param month', () => {
        cy.request({
          method: 'GET',
          headers: { 'api-secret': Cypress.env('api_secret') },
          url: 'agent/v1/agent/target/historical',
          failOnStatusCode: false,
          qs: {
                year: 2022,
                are_id: "meike528"
              }
        }).should((response) => {
          expect(response.status).to.eq(400)
          expect(response.body.message).to.equal(`Required request parameter 'month' for method parameter type int is not present`)
        })
      })
      it('Get agent target are without param year', () => {
        cy.request({
          method: 'GET',
          headers: { 'api-secret': Cypress.env('api_secret') },
          url: 'agent/v1/agent/target/historical',
          failOnStatusCode: false,
          qs: {
                month: 10,
                are_id: "meike528"
              }
        }).should((response) => {
          expect(response.status).to.eq(400)
          expect(response.body.message).to.equal(`Required request parameter 'year' for method parameter type int is not present`)
        })
      })
      it('Get agent target are with invalid type param month', () => {
        cy.request({
          method: 'GET',
          headers: { 'api-secret': Cypress.env('api_secret') },
          url: 'agent/v1/agent/target/historical',
          failOnStatusCode: false,
          qs: {
                month: "Sepuluh",
                year : 2022,
                are_id: "meike528"
              }
        }).should((response) => {
          expect(response.status).to.eq(400)
          expect(response.body.message).to.include('Failed to convert value of type')
        })
      })
      it('Get agent target are with invalid type param year', () => {
        cy.request({
          method: 'GET',
          headers: { 'api-secret': Cypress.env('api_secret') },
          url: 'agent/v1/agent/target/historical',
          failOnStatusCode: false,
          qs: {
                month: 10,
                year : "dua ribu sepuluh",
                are_id: "meike528"
              }
        }).should((response) => {
          expect(response.status).to.eq(400)
          expect(response.body.message).to.include('Failed to convert value of type')
        })
      })
    })
})