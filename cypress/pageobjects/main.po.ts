import { TimeoutError } from 'cypress/types/bluebird';
import Page from './page'

class MainPage extends Page {

  my_value = 35000.00;

  catalogueBtnLocator= 'div.b-top-menu a[href="https://catalog.onliner.by"]';
  ComputersandNetworksBtn= ':nth-child(4) > [data-id="2"]';
  AccessoriesBtn= 'div.catalog-navigation-list__aside-title'; 
  VideocardBtN= '.catalog-navigation-list__aside-item_active > .catalog-navigation-list__dropdown > .catalog-navigation-list__dropdown-list > [href="https://catalog.onliner.by/videocard"]';
  FilterBtn= '.schema-order__link';
  ExpenciveParam= 'div.schema-order__item';
  MostExpencivePrice= '.schema-product__price > .schema-product__price-value > span';   //.schema-product__price-value  //  //div.schema-product__price-value_primary span'
  CatalogNavigationBar= 'ul.catalog-navigation-classifier';
  ComputersAndNetworksNavigationBar= 'div.catalog-navigation-list__aside';
  AccessoriesOptionsBar= 'span.catalog-navigation-list__dropdown-title';
  VideoCardsCatalog= '#schema-order';
  FiltersDropdownMenu= 'div.schema-order__list';
    DesiredPhoneonPage= 'div.schema-product__title:nth-child(1)';


  getCatalogueBtn = () => cy.get(this.catalogueBtnLocator);
  getComputersandNetworksBtn = () => cy.get(this.ComputersandNetworksBtn);
  getAccesoriesBtn = () => cy.get (this.AccessoriesBtn);
  getVideocardBtn = () => cy.get(this.VideocardBtN) ;
  getFilterBtn = () => cy.get(this.FilterBtn);
  getExpensiveParam = () => cy.get(this.ExpenciveParam);
  getMostExpencivePrice= () => cy.get(this.MostExpencivePrice);
  getCatalogNavigationBar= () => cy.get(this.CatalogNavigationBar).first();
  getComputersAndNetworksNavigationBar= () => cy.get(this.ComputersAndNetworksNavigationBar);
  getAccessoriesOptionsBar= () => cy.get(this.AccessoriesBtn);
  getVideoCardsCatalog= () => cy.get(this.VideoCardsCatalog);
  getFiltersDropdownMenu= () => cy.get(this.FiltersDropdownMenu);
    getDesiredPhonePage= () => cy.get(this.DesiredPhoneonPage);



  
  visitHomePage() {
    cy.visit('/');
  }

  clickCatalogButton() {
    this.getCatalogueBtn().click();
  }
  
    
  expectCatalogNavigationBarVisible() {
    this.getCatalogNavigationBar()
     .should('be.visible')
    
  
  }

  
  clickComputersAndNetwoks() {
    this.getComputersandNetworksBtn().click();
  }


  expectComputersAndNetworksNavigationBarVisible() {
    this.getComputersAndNetworksNavigationBar()
    .should('be.visible') 
  }

  clickAccessoriesBtn() {
    this.getAccesoriesBtn().contains('Комплектующие').scrollIntoView().click();
  }

  expectAccessoriesOptionsBarVisible() {
    this.getAccessoriesOptionsBar ()
    cy.scrollTo(500, 0)
    .contains('Видеокарты')
  }

clickVideocardBtn() {
  this.getVideocardBtn().click();
}

expectVideoCardsCatalogVisible() {
  this.getVideoCardsCatalog()
  .should('be.visible')
}

clickFilterBtn() {
  this.getFilterBtn().click();
}

expectFiltersDropdownMenuVisible() {
  this.getFiltersDropdownMenu()
  .should('be.visible')
}


clickExpensiveOption() {
  cy.intercept('GET','https://catalog.onliner.by/sdapi/catalog.api/search/videocard?order=price:desc').as('waitExpensive')
  this.getExpensiveParam()
  .contains('Дорогие')
  .click()
  cy.wait('@waitExpensive');
}

expectFilterDropdownMenuContainMostExpencive() {
  this.getFilterBtn()
  .should('be.visible', )
}

expectTheHighestPriceVideoCards() {
 // const elementText = this.getElementText(this.getMostExpencivePrice());

  this.getMostExpencivePrice()
  .first()
  .then(($el) => {
    const num = //$el.text()  
    parseFloat($el.text().replace(/[^0-9\.,]/g, "").replace(",", "."))
    expect(num).be.gte(this.my_value)
  
    //cy.log(`${parseFloat(num.replace(/[^0-9\.,]/g, "").replace(",", "."))}`)
   })


 

}











value = 1000.00

visitPhonePage() {
 cy.visit('https://catalog.onliner.by/mobile');

}




expectTheCostOfThePhone() {
 cy.get('div.schema-product__price:nth-child(1)')
 .first

}




}
export default new MainPage(); 