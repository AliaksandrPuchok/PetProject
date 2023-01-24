import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import MainPage from '../../pageobjects/main.po';


Given('I am on smartphone page', () => {
    MainPage.visitPhonePage ();
  }); 
  
When('I choose the one i want', () => {
    MainPage.expectDesiredPhoneonPage ();

  });

  Then('I wanna check will I have enough for my phone 1000', () => {
    MainPage.expectTheCostOfThePhone ();
  });