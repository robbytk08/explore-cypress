import * as param from "../../fixtures/agent_service/get_profile_are.json"

describe("Profile are id ==> /v1/agent/profile/are", () =>{
    context("Positive Case - Get Profile are id detail", () => {
        it("Get Profile are id use valid are id id", () => {
            cy.request({
                method: "GET",
                headers: { 'api-secret': Cypress.env('api_secret') },
                url: 'agent/v1/agent/profile/are',
                qs: param.getProfileAre
            }).should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.data[0].are_marketing_id).to.equal(param.getProfileAre.are_id)
            })
        })
    })
    context("Negative Case - Get Profile are id detail", () => {
        it("Get Profile are id use are id id not found", () => {
            cy.request({
                method: "GET",
                headers: { 'api-secret': Cypress.env('api_secret') },
                url: 'agent/v1/agent/profile/are',
                qs: param.getProfileAreIdNotFound
            }).should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.data).to.be.empty
            })
        })
        it("Get Profile are id without are id", () => {
            cy.request({
                method: "GET",
                headers: { 'api-secret': Cypress.env('api_secret') },
                url: 'agent/v1/agent/profile/are',
                failOnStatusCode: false,
                qs: {
                    month: 10,
                    year: 2022
                  }
            }).should((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.message).to.include(`Param can't be empty.`)
            })
        })
        it("Get Profile are id without param month", () => {
            cy.request({
                method: "GET",
                headers: { 'api-secret': Cypress.env('api_secret') },
                url: 'agent/v1/agent/profile/are',
                failOnStatusCode: false,
                qs: {
                    are_id : "abdul2578",
                    year: 2022
                  }
            }).should((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.message).to.include(`'month' for method parameter type int is not present`)
            })
        })
        it("Get Profile are id without param year", () => {
            cy.request({
                method: "GET",
                headers: { 'api-secret': Cypress.env('api_secret') },
                url: 'agent/v1/agent/profile/are',
                failOnStatusCode: false,
                qs: {
                    are_id : "abdul2578",
                    month : 8,
                  }
            }).should((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.message).to.include(`'year' for method parameter type int is not present`)
            })
        })
        it("Get Profile are id with invalid month", () => {
            cy.request({
                method: "GET",
                headers: { 'api-secret': Cypress.env('api_secret') },
                url: 'agent/v1/agent/profile/are',
                failOnStatusCode: false,
                qs: {
                    are_id : "abdul2578",
                    month : "delapan",
                    year : 2022
                  }
            }).should((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.message).to.include(`Failed to convert value of type 'java.lang.String'`)
            })
        })
        it("Get Profile are id with invalid year", () => {
            cy.request({
                method: "GET",
                headers: { 'api-secret': Cypress.env('api_secret') },
                url: 'agent/v1/agent/profile/are',
                failOnStatusCode: false,
                qs: {
                    are_id : "abdul2578",
                    month : 8,
                    year : "dua ribu dua dua"
                  }
            }).should((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.message).to.include(`Failed to convert value of type 'java.lang.String'`)
            })
        })
    })
})