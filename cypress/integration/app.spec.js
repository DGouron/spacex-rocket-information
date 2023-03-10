describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="rocket/falcon1"]').click();

    // The new page should contain an h1 with "About page"
    cy.get("h2").contains("Falcon 1");
  });
});
