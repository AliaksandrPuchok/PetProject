export default class Page {

    getElementText(element) {
      let elementText = element.then($el => {
        let elText = $el.text();
        cy.log('Внутри then')
        cy.log(elText)
        return elText;
      });
      cy.log('Перед ретерном')
      cy.log(elementText)
      return elementText;
    }

  }