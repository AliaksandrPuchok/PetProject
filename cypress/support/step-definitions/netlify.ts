import { Given, Then, When, } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the form page1', () => {
  cy.visit('https://trytestingthis.netlify.app/');
});

When('I fill in the Text Box1', () => {
  cy.get('#fname').type('John'),
  cy.get('#lname').type('Doe');
});

When('I select the Check Box1', () => {
  cy.get('#moption').last().check().should('be.checked');
});

When('I select the Radio Button1', () => {
  cy.get('#male').check().should('be.checked');
});

When('I select date', () => {
  cy.get('#day').type('1999-05-21'); //{enter}
});

When('I select a color from the Color Picker1', () => {
  cy.get('input#favcolor').type('#00ced1',{ force: true })//.should('have.value', '#00ced1');
});

When('I move the Range Slider1', () => {
  cy.get('#a').invoke('val', 75).trigger('change').should('have.value', '75');
});

When('I fill in the Number Input1', () => {
  cy.get('#quantity').clear().type('42').should('have.value', '42');
});

When('I submit the form1', () => {
  cy.get('form').submit();
});

Then('the form should be submitted successfully1', () => {
  cy.get('#submittedMessage').should('have.text', 'Form submitted successfully!');
});
