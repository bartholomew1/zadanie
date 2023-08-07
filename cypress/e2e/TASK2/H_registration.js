import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Registration from "../../app/behaviour/registration";



Given("Registration view opened", () => {
  cy.visit("/registration");
  cy.get("h1").should("exist").and("have.text", "TASK 2");
  const formLabels = [
    "Email address",
    "Password",
    "Country",
    "Hobby",
    "Photo",
    "Additional info.",
    "\n\t\t\t\tConditions of Use and Privacy Notice 1.\n\t\t\t",
    "\n\t\t\t\tConditions of Use and Privacy Notice 2.\n\t\t\t",
    "\n\t\t\t\tConditions of Use and Privacy Notice 3.\n\t\t\t",
  ];
  let i = 0;
  cy.get("label").each((item) => {
    cy.wrap(item).should("have.text", formLabels[i]);
    i++;
  });
  cy.get('[data-cy="username"]').should(
    "have.attr",
    "placeholder",
    "name@example.com"
  );
  cy.get('[data-cy="password"]').should("have.attr", "placeholder", "password");
  cy.get('[data-cy="country"]').should(
    "have.text",
    "\n\t\t\tSelect...\n\t\t\tUK\n\t\t\tPoland\n\t\t\tUkraine\n\t\t\tGermany\n\t\t\tItaly\n\t\t  "
  );
  cy.get('[data-cy="hobby"]').should(
    "have.text",
    "\n\t\t\tBooks\n\t\t\tMovies, Music & Games\n\t\t\tElectronics & Computers\n\t\t\tHome, Garden & Tools\n\t\t\tHealth & Beauty\n\t\t\tToys, Kids & Baby\n\t\t\tClothing & Jewelry\n\t\t\tSports & Outdoors\n\t\t  "
  );
  cy.get('[data-cy="registration-consent"]').should("have.length", 3);
  cy.contains("Save").should("exist");
  cy.get(".jumbotron")
    .should("have.css", "background-color", "rgb(233, 236, 239)")
    .and("have.css", "border-radius", "4.8px");
});

When("Fill the form", () => {
  const registration = new Registration();
  const countries = [
    "Select...",
    "UK",
    "Poland",
    "Ukraine",
    "Germany",
    "Italy",
  ];
  const hobbies = [
    "Books",
    "Movies, Music & Games",
    "Electronics & Computers",
    "Home, Garden & Tools",
    "Health & Beauty",
    "Toysm Kids & Baby",
    "Clothing & Jewelry",
    "Sports & Outdoors",
  ];
  registration.fillRegistrationForm(
    "exampleUser@test.com",
    "examplePassword",
    countries[1],
    hobbies[1],
    "cypress/fixtures/photo.jpeg",
    "loremIpsum".repeat(40)
  );
  cy.contains("Save").click();
});

Then("Handle success message", () => {
  cy.get("body").should("have.text", "Account created for: exampleUser@test.com");
});
