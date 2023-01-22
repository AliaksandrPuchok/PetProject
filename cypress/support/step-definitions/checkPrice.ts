import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import MainPage from '../../pageobjects/main.po';

Given('I am on main page', () => {
  MainPage.visitHomePage()
}); 

When('I click on catalog button', () => {
  MainPage.clickCatalogButton ();
});