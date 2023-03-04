 import {LoginPage2} from "./loginPage.po";
//  buzz ---cy.get(':nth-child(11) > .oxd-main-menu-item')
//  see and find ---cy.get('.oxd-buzz-post-input')
//  post btn ---cy.get('.oxd-buzz-post-slot > .oxd-button')
//  created post ---cy.get('.oxd-grid-1 > :nth-child(1) > .oxd-sheet')
//  text of created post --- cy.get(':nth-child(1) > .oxd-sheet > :nth-child(2) > .orangehrm-buzz-post-body > .orangehrm-buzz-post-body-text')
//  likeBtn --- cy.get('#heart-svg')
//  quantityOfLike ---cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-buzz-post-footer > .orangehrm-buzz-stats > :nth-child(1) > .oxd-text')
 


 class LoginPage {

// loginPage = new LoginPage2 ()

// visitLoginPage() {
//    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
// }
// enterLoginPage() {
// this.loginPage.enterUserName('Admin'),
// this.loginPage.enterUserPassword('admin123'),
// this.loginPage.clickLoginbtn()
// }


private readonly url: string = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
private readonly usernameInput: string = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
private readonly passwordInput: string = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';
private readonly loginButton: string = '.oxd-button';

public visit(): void {
  cy.visit(this.url);
}

public login(username: string, password: string): void {
  cy.get(this.usernameInput).type(username);
  cy.get(this.passwordInput).type(password);
  cy.get(this.loginButton).click();
}
 
public assertAPI() {
  const baseUrl = 'https://opensource-demo.orangehrmlive.com';
  const username = 'Admin';
  const password = 'admin123';
  const body = { txtUsername: username, txtPassword: password };
  cy.request({
    method: 'GET',
     url: baseUrl
  }).then((response) => {
    expect(response.status).to.equal(200);
  });
}






}
export default new LoginPage();