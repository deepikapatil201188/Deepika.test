import LoginPage from '../support/pages/LoginPage';
import userData from '../../data/users.json';

describe('User Registration and Login', () => {
  it('should register and login successfully', () => {
    cy.visit('/customer/account/create/');
    cy.get('#firstname').type(userData.firstName);
    cy.get('#lastname').type(userData.lastName);
    cy.get('#email_address').type(userData.email);
    cy.get('#password').type(userData.password);
    cy.get('#password-confirmation').type(userData.password);
    cy.get('button[title="Create an Account"]').click();

    // Validate account creation
    cy.contains('Thank you for registering with Main Website Store.').should('be.visible');

    // Logout then login
    cy.get('.logout-link').click();
    LoginPage.visit();
    LoginPage.fillEmail(userData.email);
    LoginPage.fillPassword(userData.password);
    LoginPage.submit();
    LoginPage.assertLoginSuccess();
  });
});
