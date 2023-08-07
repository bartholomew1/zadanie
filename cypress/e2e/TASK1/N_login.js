import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("Login view opened", () => {
  cy.visit("/");
});
When("Provide invalid credentials", () => {
  cy.get("#username").type("someUsername");
  cy.get("#password").type("somePassword");
  cy.contains('Login').click()
});
Then("Handle error message", () => {
  cy.get("body").should("have.text", "Incorrect Username and/or Password!");
});
