describe('Search Functionality', () => {
  it('verifies search bar is displayed', () => {
    // Visit the website
    cy.visit('https://billease.ph/shops/')
    // Add assertions : verifies search bar is displayed
    cy.get('input[placeholder="Search shop"]').should('be.visible')
  })
  it('verifies search results for valid term', () => {
    // Visit the website
    cy.visit('https://billease.ph/shops/')
    // Type in the search box and press Enter
    cy.get('input[placeholder="Search shop"]').type('samsung{enter}');
    // Add assertions : verifies search results for valid term
    cy.get('div[class*="grid"]')
      .find('div[class*="flex"]')
      .each(($el) => {
        cy.wrap($el).should('have.css', 'display', 'flex');
        cy.wrap($el).find('img')
          .should('have.attr', 'src').and('include', 'samsung');
      });
  })
  it('verifies empty results for non-existent term', () => {
    // Visit the website
    cy.visit('https://billease.ph/shops/')
    // Type in the search box and press Enter
    cy.get('input[placeholder="Search shop"]').type('xyz{enter}');
    // Add assertions : verifies empty results for non-existent term
    cy.get('div[class*="flex"] > span:first-child')
      .should('be.visible').contains('No result found.');
  })
})
