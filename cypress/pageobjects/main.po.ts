class MainPage {

  catalogueBtnLocator= 'div.b-top-menu a[href="https://catalog.onliner.by"]';

  getCatalogueBtn = () => cy.get(this.catalogueBtnLocator);

  visitHomePage() {
    cy.visit('/');
  }

  clickCatalogButton() {
    this.getCatalogueBtn().click();
  }

}

export default new MainPage();