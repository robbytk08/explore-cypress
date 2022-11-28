import * as param from "../../fixtures/agent_service/get_profile_supervisor.json"

describe("Profile Supervisor ==> /v1/agent/profile/supervisor", () =>{
    context("Positive Case - Get Profile Supervisor detail", () => {
        it("Get Profile Supervisor use valid supervisor id", () => {
            cy.request({
                method: "GET",
                headers: { 'api-secret': Cypress.env('api_secret') },
                url: 'agent/v1/agent/profile/supervisor',
                qs: param.getProfileSupervisor
            }).should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.data[0].supervisor_id).to.equal(param.getProfileSupervisor.supervisor_id)
            })
        })
    })
    context("Negative Case - Get Profile Supervisor detail", () => {
        it("Get Profile Supervisor use supervisor id not found", () => {
            cy.request({
                method: "GET",
                headers: { 'api-secret': Cypress.env('api_secret') },
                url: 'agent/v1/agent/profile/supervisor',
                qs: param.getProfileSupervisorNotFound
            }).should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.data).to.be.empty
            })
        })
        it("Get Profile Supervisor without supervisor id", () => {
            cy.request({
                method: "GET",
                headers: { 'api-secret': Cypress.env('api_secret') },
                url: 'agent/v1/agent/profile/supervisor',
                failOnStatusCode: false,
                qs: {
                    month: 10,
                    year: 2022
                  }
            }).should((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.message).to.include(`'supervisor_id' for method parameter type List is not present`)
            })
        })
        it("Get Profile Supervisor without param month", () => {
            cy.request({
                method: "GET",
                headers: { 'api-secret': Cypress.env('api_secret') },
                url: 'agent/v1/agent/profile/supervisor',
                failOnStatusCode: false,
                qs: {
                    supervisor_id : "abdul2578",
                    year: 2022
                  }
            }).should((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.message).to.include(`'month' for method parameter type int is not present`)
            })
        })
        it("Get Profile Supervisor without param year", () => {
            cy.request({
                method: "GET",
                headers: { 'api-secret': Cypress.env('api_secret') },
                url: 'agent/v1/agent/profile/supervisor',
                failOnStatusCode: false,
                qs: {
                    supervisor_id : "abdul2578",
                    month : 8,
                  }
            }).should((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.message).to.include(`'year' for method parameter type int is not present`)
            })
        })
        it("Get Profile Supervisor with invalid month", () => {
            cy.request({
                method: "GET",
                headers: { 'api-secret': Cypress.env('api_secret') },
                url: 'agent/v1/agent/profile/supervisor',
                failOnStatusCode: false,
                qs: {
                    supervisor_id : "abdul2578",
                    month : "delapan",
                    year : 2022
                  }
            }).should((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.message).to.include(`Failed to convert value of type 'java.lang.String'`)
            })
        })
        it("Get Profile Supervisor with invalid year", () => {
            cy.request({
                method: "GET",
                headers: { 'api-secret': Cypress.env('api_secret') },
                url: 'agent/v1/agent/profile/supervisor',
                failOnStatusCode: false,
                qs: {
                    supervisor_id : "abdul2578",
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