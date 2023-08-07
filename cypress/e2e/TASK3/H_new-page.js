import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("New page view is displayed", () => {
  cy.visit("/new-page");
  cy.get(".jumbotron")
    .should("have.css", "background-color", "rgb(233, 236, 239)")
    .and("have.css", "border-radius", "4.8px");
});

When("User is navigated to new origin", () => {
  cy.contains("Click me!").invoke("removeAttr", "target").click();
});

Then("Handle new origin", () => {
  cy.origin("https://www.wskz.pl/", () => {
    cy.url().should("eq", "https://www.wskz.pl/");
    cy.get("ul").invoke("removeAttr", "display");
    cy.get("#comp-ils2cgqy2label").trigger("pointerover");
    cy.contains("a", "Samorząd studencki")
      .invoke("show")
      .click({ force: true });
    cy.get("#comp-kz42x7wk__item1 > .font_5").should(
      "have.text",
      "Tomasz Michalik"
    );
    cy.get("#comp-kz42x7wk__item-kf51ysxt > .font_5").should(
      "have.text",
      "Dawid Małecki"
    );
    cy.get("#comp-kz42x7wk__item-kf51yt5v > .font_5").should(
      "have.text",
      "Paweł Barowicz"
    );
    cy.get("#comp-kz42x7wp__item1 > :nth-child(2)").should(
      "have.text",
      "- student II roku"
    );
    cy.get('#comp-kz42x7wp__item-kf51ysxt > .font_8').should(
      "have.text",
      "- student III roku"
    );
    cy.get(
      "#comp-kz42x7wp__item-kf51yt5v > .font_8 > .wixui-rich-text__text"
    ).should("have.text", "- student II roku");
  });
});
