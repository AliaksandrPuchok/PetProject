
import Page from './page'

class MainPage extends Page {

  my_value = 35000.00; phone_value = 5000;
  catalogueBtnLocator = 'div.b-top-menu a[href="https://catalog.onliner.by"]';
  computersAndNetworksBtn = ':nth-child(4) > [data-id="2"]';
  accessoriesBtn = 'div.catalog-navigation-list__aside-title';
  videocardBtN = '.catalog-navigation-list__aside-item_active > .catalog-navigation-list__dropdown > .catalog-navigation-list__dropdown-list > [href="https://catalog.onliner.by/videocard"]';
  filterBtn = '.schema-order__link';
  expensiveParam = 'div.schema-order__item';
  mostExpensivePrice = '.schema-product__price > .schema-product__price-value > span';
  catalogNavigationBar = 'ul.catalog-navigation-classifier';
  computersAndNetworksNavigationBar = 'div.catalog-navigation-list__aside';
  accessoriesOptionsBar = 'span.catalog-navigation-list__dropdown-title';
  videocardsCatalog = '#schema-order';
  filtersDropdownMenu = 'div.schema-order__list';
  electronicsBtn = ':nth-child(4) > [data-id="1"]';
  electroicNavigationBar = '[data-id="1"] > .catalog-navigation-list__aside';
  smartphoneBtn = '.catalog-navigation-list__dropdown-list > [href="https://catalog.onliner.by/mobile"]';
  mobilephonesAndAccessoriesBtn = '[data-id="1"] > .catalog-navigation-list__aside > .catalog-navigation-list__aside-list > :nth-child(1) > .catalog-navigation-list__aside-title' 
  chooseManufacturer = 'ul.schema-filter__list > li > label.schema-filter__checkbox-item > span.i-checkbox > [type="checkbox"]';
  
  
  
  
  
  
  getCatalogueBtn = () => cy.get(this.catalogueBtnLocator);

  getComputersAndNetworksBtn = () => cy.get(this.computersAndNetworksBtn);

  getAccessoriesBtn = () => cy.get (this.accessoriesBtn);

  getVideocardBtn = () => cy.get(this.videocardBtN) ;

  getFilterBtn = () => cy.get(this.filterBtn);

  getExpensiveParam = () => cy.get(this.expensiveParam);

  getMostExpensivePrice = () => cy.get(this.mostExpensivePrice);

  getCatalogNavigationBar = () => cy.get(this.catalogNavigationBar).first();

  getComputersAndNetworksNavigationBar = () => cy.get(this.computersAndNetworksNavigationBar);

  getAccessoriesOptionsBar = () => cy.get(this.accessoriesOptionsBar);

  getVideoCardsCatalog = () => cy.get(this.videocardsCatalog);

  getFiltersDropdownMenu = () => cy.get(this.filtersDropdownMenu);
  
  getElectronicBtn = () => cy.get(this.electronicsBtn) ;
  
  getElectroicNavigationBar = () => cy.get(this.electroicNavigationBar);

  getSmartphoneBtn = () => cy.get(this.smartphoneBtn);
  
  getMobilePhonesAndAccessoriesBtn = () => cy.get(this.mobilephonesAndAccessoriesBtn);
  
  getAppleManufacturer = () => cy.get(this.chooseManufacturer);
  
  
  
  
  
  visitHomePage() {
    cy.visit('/');
  }

  clickCatalogButton() {
    this.getCatalogueBtn().click();
  }

  expectCatalogNavigationBarVisible() {
    this.getCatalogNavigationBar().should('be.visible');
  }

  clickComputersAndNetwoks() {
    this.getComputersAndNetworksBtn().click();  
  }


  expectComputersAndNetworksNavigationBarVisible() {
    this.getComputersAndNetworksNavigationBar().should('be.visible');
  }

  clickAccessoriesBtn() {
    this.getAccessoriesBtn().contains('Комплектующие').scrollIntoView().click();
  }

  expectAccessoriesOptionsBarVisible() {
    this.getAccessoriesOptionsBar ()
    cy.scrollTo(500, 0).contains('Видеокарты');
  }

  clickVideocardBtn() {
    this.getVideocardBtn().click();
  }

  expectVideoCardsCatalogVisible() {
    this.getFilterBtn().should('be.visible');
  }

  clickFilterBtn() {
    this.getFilterBtn().click();
  }

  expectFiltersDropdownMenuVisible() {
    this.getFiltersDropdownMenu().should('be.visible');
  }

  clickExpensiveOption() {
    cy.intercept('GET','https://catalog.onliner.by/sdapi/catalog.api/search/videocard?order=price:desc').as('waitExpensive');
    this.getExpensiveParam().contains('Дорогие').click();
    cy.wait('@waitExpensive');
  }

  expectTheHighestPriceVideoCards() {
    this.getMostExpensivePrice().first().then(($el) => {
    const num = parseFloat($el.text().replace(/[^0-9\.,]/g, "").replace(",", "."));
    expect(num).be.gte(this.my_value);
    });
  }

  clickElectronic() {
    this.getElectronicBtn().click();  
  }


  expectElectroicNavigationBarVisible() {
    this.getElectroicNavigationBar().should('be.visible');
  }

  clickMobilephonesAndAccessories() {
    this.getMobilePhonesAndAccessoriesBtn().first()
    .click();
  }

  expectMobilephonesAndAccessoriesBarVisible() {
  this.getAccessoriesOptionsBar ()
  cy.scrollTo(500, 0);
  }

clickSmartphoneBtn() {
  this.getSmartphoneBtn()
  .click();
}

expectSmartphoneCatalogVisible() {
  this.getFilterBtn().should('be.visible');
}

chooseApple() {
  this.getAppleManufacturer()
  .first()
  .check({force:true})
}


clickMostExpensiveOption() {
  cy.intercept('GET','https://catalog.onliner.by/sdapi/catalog.api/search/mobile?mfr[0]=apple&group=0&order=price:desc').as('Expensive');
  this.getExpensiveParam().contains('Дорогие').click();
  cy.wait('@Expensive');
}

expectMaximumPrice() {
  this.getMostExpensivePrice().first().then(($el) => {
  const num = parseFloat($el.text().replace(/[^0-9\.,]/g, "").replace(",", "."));
  parseFloat($el.text().replace(/[^0-9\.,]/g, "").replace(",", "."));
  expect(num).be.gt(this.phone_value);
  });
}




}
export default new MainPage(); 