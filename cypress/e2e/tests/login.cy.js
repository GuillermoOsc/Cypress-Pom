import { login } from "../../support/POM/Login-Page";

const loginPage = Cypress.env('endpoint').authLogin
const 

describe ('user logs in', () => {

    beforeEach(() => {
        cy.visit("/")
        cy.url().should("contain", loginPage)
    });

    it('validate login successfully', () => {

    });

});