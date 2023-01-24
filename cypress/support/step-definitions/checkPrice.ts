import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import MainPage from '../../pageobjects/main.po';

Given('I am on main page', () => {
  MainPage.visitHomePage()
}); 

When('I click on catalog button', () => {
  MainPage.clickCatalogButton ();
});

Then('I should see catalog page', () => {
  MainPage.expectCatalogNavigationBarVisible ();
});


When('I click Computers and Networks button', () => {
  MainPage.clickComputersAndNetwoks();
});

Then('I should see Computers and Networks dropdown menu', () => {
  MainPage.expectComputersAndNetworksNavigationBarVisible ();
});

When('I click on accessories', () => {
 MainPage.clickAccessoriesBtn();
});

Then('I should see accessories options page', () => {
  MainPage.expectAccessoriesOptionsBarVisible ();
});

When('I click on video cards button', () => {
 MainPage.clickVideocardBtn ();
});

Then('I should see video cards catalog', () => {
 MainPage.expectVideoCardsCatalogVisible ();
});

When('I click filters button', () => {
  MainPage.clickFilterBtn ();
});

  Then('I should see filters dropdown', () => {
   MainPage.expectFiltersDropdownMenuVisible();
  });
  
  
  When('I choose the most expencive option', () => {
    MainPage.clickExpensiveOption ();
  });

  Then('I should see the page is loaded', () => {
    MainPage.expectFilterDropdownMenuContainMostExpencive()
  });

  Then('I check that the highest video card price is higher than 35000', () => {
    MainPage.expectTheHighestPriceVideoCards(); 
  });














