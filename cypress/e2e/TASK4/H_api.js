import {
  Given,
  When,
  Then,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
Before(() => {
  cy.request("DELETE", "/api/customers/4");
  cy.request("PUT", "/api/customers/1", { name: "Jan Testowy" });
});
Given("Api requests", () => {
  const customers = [
    { id: 1, name: "Jan Testowy" },
    { id: 2, name: "Paweł Testowy" },
    { id: 3, name: "Wojtek Testowy" },
  ];
  cy.request("/api/customers").then((resp) => {
    expect(resp.body).to.deep.equal([
      { id: 1, name: "Jan Testowy" },
      { id: 2, name: "Paweł Testowy" },
      { id: 3, name: "Wojtek Testowy" },
    ]);
    expect(resp.status).to.eq(200);
    expect(resp.headers).to.have.all.keys(
      "connection",
      "content-length",
      "content-type",
      "date",
      "etag",
      "keep-alive",
      "x-powered-by"
    );
  });
  for (let i = 0; i < customers.length; i++) {
    cy.request("/api/customers/" + (i + 1)).then((resp) => {
      expect(resp.body).to.deep.equal(customers[i]);
      expect(resp.status).to.eq(200);
      expect(resp.headers).to.have.all.keys(
        "connection",
        "content-length",
        "content-type",
        "date",
        "etag",
        "keep-alive",
        "x-powered-by"
      );
    });
  }
  cy.request("POST", "/api/customers", { name: "Bartek" }).then((resp) => {
    expect(resp.status).to.eq(200);
    expect(resp.body).to.eq("Dodano klienta");
    expect(resp.status).to.eq(200);
    expect(resp.headers).to.have.all.keys(
      "connection",
      "content-length",
      "content-type",
      "date",
      "etag",
      "keep-alive",
      "x-powered-by"
    );
  });
  cy.request("PUT", "/api/customers/1", { name: "Bartek Testowy" }).then(
    (resp) => {
      expect(resp.status).to.eq(200);
      expect(resp.body).to.eq("Zaktualizowano klienta");
      expect(resp.status).to.eq(200);
      expect(resp.headers).to.have.all.keys(
        "connection",
        "content-length",
        "content-type",
        "date",
        "etag",
        "keep-alive",
        "x-powered-by"
      );
    }
  );
  cy.request("DELETE", "/api/customers/4").then((resp) => {
    expect(resp.status).to.eq(200);
    expect(resp.body).to.eq("Usunięto klienta");
    expect(resp.status).to.eq(200);
    expect(resp.headers).to.have.all.keys(
      "connection",
      "content-length",
      "content-type",
      "date",
      "etag",
      "keep-alive",
      "x-powered-by"
    );
  });
});
