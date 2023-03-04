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

Then("I verify that the highest video card price is above 35000", () => {
  MainPage.expectTheHighestPriceVideoCards();
});

When("I click on the Filters button again", () => {
  MainPage.clickFilterBtn ();
});

When('I choose the most cheap option', () => {
  MainPage.clickCheapestOption();
});


Then('I check that the cheapest video card price is lower than 35000', () => {
  MainPage.expectTheLowestPriceVideoCards();
});


Then('I want to find out the price difference between cheaperPrice and highestPrice', () => {
 MainPage.expectdifferenceBetweenHighestAndLowestPrices()
});




  //second test

  Given('I am on page', () => {
  MainPage.visitHomePage()
  }); 

  When('I click on Catalog button', () => {
  MainPage.clickCatalogButton ();
  });
            
  Then('I should see Catalog page', () => {
  MainPage.expectCatalogNavigationBarVisible ();
  });

  When('I click Electronics', () => {
  MainPage.clickElectronic();
  });

  Then('I should see Electronics dropdown menu', () => {
  MainPage.expectElectroicNavigationBarVisible();
  });

  When('I click on Mobile phones and accessories', () => { 
  MainPage.clickMobilephonesAndAccessories();
  });
  
  Then('I should Mobile phones and see accessories options page',() => {
  MainPage.expectMobilephonesAndAccessoriesBarVisible();
  }); 
  
  When('I click on Smartphones button', () => {
  MainPage.clickSmartphoneBtn();
  });
  
  Then('I should see Smartphones catalog', () => {
  MainPage.expectSmartphoneCatalogVisible()
  });

  When('I choose a manufacturer in the filter', () => {
  MainPage.chooseApple();
  });
  
  When('I click filter button', () => {
  MainPage.clickFilterBtn ();
  });
  
  Then('I should see filter dropdown', () => {
  MainPage.expectFiltersDropdownMenuVisible();
  });
    
    
  When('I choose Most expencive option', () => {
  MainPage.clickMostExpensiveOption ();
  });

  Then('I check that the highest Apple smartphone price is higher than 5000', () => {
  MainPage.expectMaximumPrice()
  });                
  
  
  












