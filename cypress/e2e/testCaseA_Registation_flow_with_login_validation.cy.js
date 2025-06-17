import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPage';

describe('Registration Flow with Login Validation', () => {
  let userData;

  before(() => {
    cy.fixture('testUser.json').then((data) => {
      userData = data;
    });
  });

  it('should register a new user and validate login', () => {
    // Visit registration page and fill the form
    RegistrationPage.visit();
    RegistrationPage.fillFirstName(userData.firstName);
    RegistrationPage.fillLastName(userData.lastName);
    RegistrationPage.fillEmail(userData.email);
    RegistrationPage.fillPassword(userData.password);
    RegistrationPage.fillConfirmPassword(userData.password);
    RegistrationPage.submit();

    // Assert registration success
    RegistrationPage.assertRegistrationSuccess();

    // Log out after registration
    RegistrationPage.logout();

    // Visit login page and login with the same credentials
    LoginPage.visit();
    LoginPage.fillEmail(userData.email);
    LoginPage.fillPassword(userData.password);
    LoginPage.submit();

    // Assert login success
    LoginPage.assertLoginSuccess();
  });
});