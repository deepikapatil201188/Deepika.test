import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import LoginPage from '../pages/LoginPage';

describe('Place order with multiple products and price calculation checks', () => {
  let userData, products;

  before(() => {
    cy.fixture('testUser.json').then((data) => {
      userData = data;
    });
    cy.fixture('products.json').then((data) => {
      products = data;
    });
  });

  it('should login, add multiple products to cart, verify price, and place order', () => {
    // Login first
    LoginPage.visit();
    LoginPage.fillEmail(userData.email);
    LoginPage.fillPassword(userData.password);
    LoginPage.submit();
    LoginPage.assertLoginSuccess();

    // Add multiple products to cart
    let expectedTotal = 0;
    products.forEach((product) => {
      HomePage.visit();
      HomePage.searchProduct(product.name);
      ProductPage.selectProductFromResults(product.name);
      ProductPage.selectSize(product.size);
      ProductPage.selectColor(product.color);
      ProductPage.setQuantity(product.quantity);
      ProductPage.addToCart();
      ProductPage.getProductPrice().then((price) => {
        expectedTotal += price * product.quantity;
      });
    });

    // Go to cart and verify total price
    CartPage.visit();
    CartPage.getCartTotal().then((cartTotal) => {
      expect(cartTotal).to.eq(expectedTotal);
    });

    // Proceed to checkout and place order
    CartPage.proceedToCheckout();
    CheckoutPage.fillShippingDetails(userData);
    CheckoutPage.selectShippingMethod();
    CheckoutPage.placeOrder();

    // Assert order confirmation
    CheckoutPage.assertOrderSuccess();
  });
});