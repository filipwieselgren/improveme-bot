/// <reference types="cypress" />

describe("renders the bot and fill in data for feature request", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("renders correctly", () => {
    cy.get(".main-wrapper").should("exist");
  });
  it("close welcome message", () => {
    cy.get(".close-btn").click();
  });
  it("open bot and complete feature request", () => {
    cy.get(".logo-wrapper")
      .click()
      .get("#f-errend")
      .click()
      .get("#text1")
      .type("Test")
      .get("#step1")
      .click()
      .get("#text2")
      .type("Test")
      .get("#step2")
      .click();
  });
});
