import { Given, Then, When, } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pageobjects/newDemo.po';
import { LoginPage2 } from 'pageobjects/loginPage.po';

// Given('I am on Login page', () => {
//     NewDemo.visitLoginPage();
// });

// When('I fill login and password', () => {
//     NewDemo.enterLoginPage()
// });


Given('I am on the login page', () => {
    LoginPage.visit();
  });
  
  When('I enter valid username and password and click the Login button', () => {
    LoginPage.login('Admin', 'admin123');
  });
  
  Then('I should be logged in', () => {
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text')
    .should('be.visible');
  });
  Then('the API should return a success status code', () => {
    LoginPage.assertAPI()
  });
  
  When('I enter invalid username and password and click the Login button', () => {
    LoginPage.login('invalid', 'invalid');
  });

  Then('I should see an error message', () => {
    cy.get('.oxd-alert-content > .oxd-text').should('be.visible').and('contain.text', 'Invalid credentials');
  });
