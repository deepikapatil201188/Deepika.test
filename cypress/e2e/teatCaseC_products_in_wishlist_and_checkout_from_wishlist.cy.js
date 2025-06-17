import HomePage from '../pages/home-page';
import ProductPage from '../pages/product-page';
import WishlistPage from '../pages/wishlist-Page';
import LoginPage from '../pages/login-page';
import CheckoutPage from '../pages/checkout-page';

describe('Add products to Wishlist and checkout from Wishlist', () => {
  let userData, products;

  before(() => {
    cy.fixture('testUser.json').then((data) => {
      userData = data;
    });
    cy.fixture('products.json').then((data) => {
      products = data;
    });
  });

  it('should add products to wishlist and checkout from wishlist', () => {
    // Login
    LoginPage.visit();
    LoginPage.fillEmail(userData.email);
    LoginPage.fillPassword(userData.password);
    LoginPage.submit();
    LoginPage.assertLoginSuccess();

    // Add products to wishlist
    products.forEach((product) => {
      HomePage.visit();
      HomePage.searchProduct(product.name);
      ProductPage.selectProductFromResults(product.name);
      ProductPage.addToWishlist();
      ProductPage.assertWishlistSuccess();
    });

    // Go to Wishlist and move products to cart
    WishlistPage.visit();
    products.forEach((product) => {
      WishlistPage.moveToCart(product.name);
    });

    // Proceed to checkout
    WishlistPage.goToCart();
    WishlistPage.proceedToCheckout();
    CheckoutPage.fillShippingDetails(userData);
    CheckoutPage.selectShippingMethod();
    CheckoutPage.placeOrder();

    // Assert order confirmation
    CheckoutPage.assertOrderSuccess();
  });
});