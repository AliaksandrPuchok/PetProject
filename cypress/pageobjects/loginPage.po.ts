 export class LoginPage2 {



    getLoginFieldLoc = () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    getPasswordFieldLoc = () => cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    getLoginBtnLoc = () => cy.get('.oxd-button')
    


    enterUserName(username) {
        this.getLoginFieldLoc().type(username)
    }
    
    enterUserPassword(password) {
        this.getPasswordFieldLoc().type(password)
    }
    
    clickLoginbtn() {
        this.getLoginBtnLoc().click()
    }

    
 }