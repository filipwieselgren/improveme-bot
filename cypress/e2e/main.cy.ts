describe("renders the home page and close bot", () => {
  it("renders correctly", () => {
    cy.visit("http://localhost:3000");
    cy.get(".main-wrapper").should("exist");
  });

  it("close bot", () => {
    cy.visit("http://localhost:3000");
    cy.get(".close-btn").click();
  });
});

describe("open bot and fill in data", () => {
  it("opens bot and click on feature request", () => {
    cy.visit("http://localhost:3000");
    cy.get(".logo-wrapper").click();
    cy.get("f-errend").click();
  });
});
