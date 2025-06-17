class SearchPage {
  // Assert that the search results page is visible
  assertSearchResultsPageVisible() {
    cy.get('.search.results').should('be.visible');
    cy.get('.page-title').should('contain.text', 'Search');
    return this;
  }

  // Get all product result elements
  getResults() {
    return cy.get('.products-grid .product-item');
  }

  // Optionally, get product names from results
  getProductNames() {
    return cy.get('.products-grid .product-item .product-item-link');
  }
}

export default new SearchPage();