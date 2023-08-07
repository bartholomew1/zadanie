import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("Login view opened", () => {
  cy.visit("/");
  cy.get("h1").should("exist").and("have.text", "TASK 1");
  cy.get('.fa-user').should('exist')
  cy.get('.fa-lock').should('exist')
  cy.get('#username').should('have.attr', 'placeholder', 'Username')
  cy.get('#password').should('have.attr', 'placeholder', 'Password')
});

When("Sign in to the application", () => {
  cy.login(Cypress.env('username'), Cypress.env('password'))
  cy.contains('Login').click()
})

Then("Welcome user message is displayed", () => {
  cy.get('body').should('have.text', 'Welcome back, jan.testowy@wskz.pl!')
})


