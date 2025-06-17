class WishlistPage {
  visit() {
    cy.visit('/wishlist/');
    return this;
  }

  // Move a product from wishlist to cart by product name
  moveToCart(productName) {
    cy.contains('.product-item-info', productName)
      .find('button[title="Add to Cart"]')
      .click();
    return this;
  }

  // Go to cart from wishlist page
  goToCart() {
    cy.get('a.action.viewcart').click();
    return this;
  }

  // Proceed to checkout from cart
  proceedToCheckout() {
    cy.get('button[title="Proceed to Checkout"]').click();
    return this;
  }

  // Assert product is in wishlist
  assertProductInWishlist(productName) {
    cy.contains('.product-item-info', productName).should('be.visible');
    return this;
  }
}

export default new WishlistPage();