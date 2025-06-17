import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';

describe('Search and validate results', () => {
  let searchData;

  before(() => {
    cy.fixture('searchTerms.json').then((data) => {
      searchData = data;
    });
  });

  it('should search for a product and validate the results', () => {
    HomePage.visit();
    HomePage.searchProduct(searchData.term);

    // Assert that the search results page is displayed
    SearchPage.assertSearchResultsPageVisible();

    // Assert that at least one result contains the search term
    SearchPage.getResults().should('exist');
    SearchPage.getResults().each(($el) => {
      cy.wrap($el)
        .invoke('text')
        .should('match', new RegExp(searchData.term, 'i'));
    });
  });
});