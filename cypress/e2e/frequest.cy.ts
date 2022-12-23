describe("renders the bot", () => {
  it("renders correctly", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".main-wrapper").should("exist");
  });
});
