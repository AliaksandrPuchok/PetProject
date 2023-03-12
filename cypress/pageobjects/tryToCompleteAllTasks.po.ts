import { TASK_CREATE_STRING_ATTACHMENT } from "@badeball/cypress-cucumber-preprocessor/lib/constants";
import { random } from "cypress/types/lodash";

class Tasks {

 getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

testPerson = {
  firstName:'Test', 
  secondName:'Test2',
  email:'Test@gmail.com', 
  currAddres: 'Test 999 str', 
  permAddres: 'Test 11 str',
  salary :'123456789',
  age: 99,
  department: 'TestDpt',
  phoneNumber: '1234567890',
};


elementBtnLoc= ':nth-child(1) > .group-header > .header-wrapper';
checkMainPageLoc = 'div.category-cards';
mainElementBtnLoc = 'div.card.mt-4.top-card:nth-child(1) > div > div.card-up:nth-child(1)';
elementPageLoc ='div.element-group:nth-child(1) > div.element-list.collapse.show:nth-child(2) ';
textBtnLoc = 'div.element-list.collapse.show:nth-child(2) > ul.menu-list > li#item-0.btn.btn-light:nth-child(1)';
textBtnPageLoc = 'div.text-field-container';
userNameFieldLoc = '#userName';
userEmailLoc = '#userEmail';
userCurrentAddresLoc = '#currentAddress';
userPermanentAddresLoc = '#permanentAddress';
submitBtnLoc = '#submit';

expectUserName = '#name';
expectUserEmail = '#email';
expectUserCurrentAddres = '.border > #currentAddress';
expectUserPermanentAddres = '.border > #permanentAddress';

confirmationTableLoc = 'div.border.col-md-12.col-sm-12';
checkBoxBtnLoc = 'div.element-list.collapse.show:nth-child(2) > ul.menu-list > li#item-1.btn';
checkBoxBtnPageLoc = 'div.check-box-tree-wrapper';
checkBoxExpandAllBtn = '[title="Expand all"]';
checkResultOnBoxExpandAllBtn = ':nth-child(3) > ol > :nth-child(2) > .rct-text'; //#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2)
firstCheckBoxBtnPageLoc = 'li.rct-node.rct-node-leaf:nth-child(1) > span.rct-text > label:nth-child(2) > span.rct-checkbox:nth-child(2)';
secondCheckBoxBtnPageLoc = 'li.rct-node.rct-node-leaf:nth-child(4) > span.rct-text > label:nth-child(2) > span.rct-checkbox:nth-child(2)';
thirdCheckBoxBtnPageLoc = 'li.rct-node.rct-node-leaf:nth-child(2) > span.rct-text > label:nth-child(2) > span.rct-checkbox:nth-child(2)';
firstResultCheckBoxBtnPageLoc = 'span.text-success:nth-child(2)';
secondResultCheckBoxBtnPageLoc = 'span.text-success:nth-child(3)';
thirdResultCheckBoxBtnPageLoc = 'span.text-success:nth-child(4)';
radioButtonBtnLoc = 'div.element-list.collapse.show:nth-child(2) > ul.menu-list > li#item-2.btn';
radioButtonBtnPageLoc = 'div.mb-3';
firstBtnRadioButtonBtnPageLoc = '#yesRadio';
notifyOnRadioButtonBtnPageLoc = 'span.text-success';
secondRadioButtonBtnPageLoc = ' #impressiveRadio';
webTablesBtnLoc = 'div.element-list.collapse.show:nth-child(2) > ul.menu-list > li#item-3.btn';
webTablesBtnPageLoc = 'div.web-tables-wrapper';
addBtnLoc = '#addNewRecordButton';
registrationFormLoc = '#registration-form-modal';
firstNameLoc = '#firstName';
lastNameLoc = '#lastName';
emailLoc = '#userEmail';
ageLoc = '#age';
salaryLoc = '#salary';
departmentLoc = '#department';
formSubmitBtnLoc = 'button#submit.btn.btn-primary';
searchFieldLoc = '#searchBox';
editBtnLoc = '#edit-record-4';
closeBtnLoc = 'button.close:nth-child(2) > span:nth-child(1)';
deleteBtndLoc = '#delete-record-4';
buttonsBtnLoc = 'div.element-list.collapse.show:nth-child(2) > ul.menu-list > li#item-4.btn'
buttonsBtnPageLoc = '#doubleClickBtn';
doubleClickNotifyOnButtonsPage = ' #doubleClickMessage';
rightClickBtnOnButtonsPage = '#rightClickBtn';
rightClickNotifyOnButtonsPage = '#rightClickMessage';
simpleClickBtnOnButtonsPage = 'div.mt-4:nth-child(3) > button';
simpleClickNotifyOnButtonsPage = 'div.col-12.mt-4.col-md-6:nth-child(2) > div:nth-child(2) > p:nth-child(6)';

practiceFormLoc = ':nth-child(2) > .element-list > .menu-list > #item-0';
formsDropdownMenuLoc = ':nth-child(2) > .group-header > .header-wrapper';
formFirstNameLoc = '#firstName';
formLastNameLoc = '#lastName';
formUserEmailLoc = '#userEmail';
formGenderLoc = '#gender-radio-1'
formUserPhoneNumberLoc = '#userNumber';
formBirthDateLoc = '#dateOfBirthInput';
formBirthDateYearLoc = '.react-datepicker__year-select';
formBirthDateMonthLoc = '.react-datepicker__month-select';
formBirthDateDayLoc ='.react-datepicker__day--021';
formSubjectsDropdownMenuLoc = '#subjectsInput';
formCurrentAddresLoc = '#currentAddress';
formHobbiesReadingCheckboxLoc = '#hobbies-checkbox-2';
formStateLoc = '#state';
formCityLoc = '#city';
formSubmitBtn = '#submit';

expectFilledForm = '.modal-body'
filledStudentFullNameLoc = 'tr:nth-child(1) >td:nth-child(2)'
filledStudentEmailLoc = 'tr:nth-child(2) >td:nth-child(2)'
filledGenderLoc = 'tr:nth-child(3) >td:nth-child(2)' 
filledPhoneLoc = 'tr:nth-child(4) >td:nth-child(2)' 
expectBirthDateLoc = 'tr:nth-child(5) >td:nth-child(2)'
filledSubjectLoc = 'tr:nth-child(6) >td:nth-child(2)'
filledHobbiesLoc = 'tr:nth-child(7) >td:nth-child(2)' 
filledAddresLoc = 'tr:nth-child(9) >td:nth-child(2)'
filledStateAndCity = 'tr:nth-child(10) >td:nth-child(2)'


getElementBtn = () => cy.get(this.elementBtnLoc);

getMainPageLoc = () => cy.get(this.checkMainPageLoc); 

getElementBtnLoc = () => cy.get(this.mainElementBtnLoc);

getElementPageLoc = () => cy.get(this.elementPageLoc);

getTextBtnLoc = () => cy.get(this.textBtnLoc);

getTextBtnPageLoc = () => cy.get(this.textBtnPageLoc);

getUserNameFieldLoc = () => cy.get(this.userNameFieldLoc);

getUserEmailLoc = () => cy.get(this.userEmailLoc);  

getUserCurrentAddresLoc = () => cy.get(this.userCurrentAddresLoc);  

getUserPermanentAddresLoc = () => cy.get(this.userPermanentAddresLoc); 

getSubmitBtnLoc = () => cy.get(this.submitBtnLoc); 

expectUserNameFilled = () => cy.get(this.expectUserName); 

expectUserEmailFilled= () => cy.get(this.expectUserEmail);

expectUserCurrentAddresFilled = () => cy.get(this.expectUserCurrentAddres);

expectUserPermanentAddresFilled = () => cy.get(this.expectUserPermanentAddres);

getConfirmationTableLoc = () => cy.get(this.confirmationTableLoc); 

getCheckBoxBtnLoc = () => cy.get(this.checkBoxBtnLoc);

getCheckBoxBtnPageLoc = () => cy.get(this.checkBoxBtnPageLoc);

getCheckboxExpandallBtn = () => cy.get(this.checkBoxExpandAllBtn);

getChekResultOnBoxExpandAllBtn = () => cy.get(this.checkResultOnBoxExpandAllBtn);

getFirstCheckBoxBtnPageLoc = () => cy.get(this.firstCheckBoxBtnPageLoc).first();

getSecondCheckBoxBtnPageLoc = () => cy.get(this.secondCheckBoxBtnPageLoc);

getThirdCheckBoxBtnPageLoc = () => cy.get(this.thirdCheckBoxBtnPageLoc).last();

getFirstResultCheckBoxBtnPageLoc = () => cy.get(this.firstResultCheckBoxBtnPageLoc);

getSecondResultCheckBoxBtnPageLoc = () => cy.get(this.secondResultCheckBoxBtnPageLoc);

getThirdResultCheckBoxBtnPageLoc = () => cy.get(this.thirdResultCheckBoxBtnPageLoc);

getRadioButtonBtnLoc = () => cy.get(this.radioButtonBtnLoc);

getRadioButtonBtnPageLoc = () => cy.get(this.radioButtonBtnPageLoc);

getFirstBtnRadioButtonBtnPageLoc = () => cy.get(this.firstBtnRadioButtonBtnPageLoc);

getNotifyOnRadioButtonBtnPageLoc = () => cy.get(this.notifyOnRadioButtonBtnPageLoc);

getSecondRadioButtonBtnPageLoc = () => cy.get(this.secondRadioButtonBtnPageLoc);

getWebTablesBtnLoc = () => cy.get(this.webTablesBtnLoc);

getWebTablesBtnPageLoc = () => cy.get(this.webTablesBtnPageLoc);

getAddBtnLoc = () => cy.get(this.addBtnLoc);

getRegistrationFormLoc = () => cy.get(this.registrationFormLoc);

getFirstNameLoc = () => cy.get(this.firstNameLoc);

getLastNameLoc = () => cy.get(this.lastNameLoc);

getEmailLoc = () => cy.get(this.emailLoc);

getAgeLoc = () => cy.get(this.ageLoc);

getSalaryLoc = () => cy.get(this.salaryLoc);

getDepartmentLoc = () => cy.get(this.departmentLoc);

getFormSubmitBtnLoc = () => cy.get(this.formSubmitBtnLoc);

getSearchFieldLoc = () => cy.get(this.searchFieldLoc);

getEditBtnLoc = () => cy.get(this.editBtnLoc);

getDeleteBtndLoc = () => cy.get(this.deleteBtndLoc);

getCloseBtnLoc = () => cy.get(this.closeBtnLoc);

getButtonsBtnLoc = () => cy.get(this.buttonsBtnLoc);

getButtonsBtnPageLoc = () => cy.get(this.buttonsBtnPageLoc);

getDoubleClickBtnOnButtonsPage = () => cy.get(this.buttonsBtnPageLoc); 

getDoubleClickNotifyOnButtonsPage = () => cy.get(this.doubleClickNotifyOnButtonsPage); 

getRightClickBtnOnButtonsPage = () => cy.get(this.rightClickBtnOnButtonsPage); 

getRightClickNotifyOnButtonsPage = () => cy.get(this.rightClickNotifyOnButtonsPage); 

getSimpleClickBtnOnButtonsPage = () => cy.get(this.simpleClickBtnOnButtonsPage); 

getSimpleClickNotifyOnButtonsPage = () => cy.get(this.simpleClickNotifyOnButtonsPage); 

getPracticeFormLoc = () => cy.get(this.practiceFormLoc);      

getFormsDropdownMenuLoc = () =>   cy.get(this.formsDropdownMenuLoc);

getFormFirstNameLoc = () => cy.get(this.formFirstNameLoc);

getFormLastNameLoc = () => cy.get(this.formLastNameLoc);

getFormUserEmailLoc = () => cy.get(this.formUserEmailLoc);

getFormGenderLoc = () => cy.get(this.formGenderLoc);

getFormUserPhoneNumberLoc = () => cy.get(this.formUserPhoneNumberLoc);

getBirthDateFieldLoc = () => cy.get(this.formBirthDateLoc);

getBirthDateYearLoc = () => cy.get(this.formBirthDateYearLoc);

getBirthDateMonthLoc = () => cy.get(this.formBirthDateMonthLoc);

getBirthDateDayLoc = () => cy.get(this.formBirthDateDayLoc);

getFormCurrentAddresLoc = () => cy.get(this.formCurrentAddresLoc);

getFormSubjectsDropdownMenuLoc = () => cy.get(this.formSubjectsDropdownMenuLoc);

getFormCityLoc = () => cy.get(this.formCityLoc);

getFormStateLoc = () => cy.get(this.formStateLoc);

getFormHobbiesReadingCheckboxLoc = () => cy.get(this.formHobbiesReadingCheckboxLoc);

getFormSubmitBtn = () => cy.get(this.formSubmitBtn);

getExpectFilledForm = () => cy.get(this.expectFilledForm);

getFilledPhoneLoc = () => cy.get(this.filledPhoneLoc);

getFilledStudentFullNameLoc= () => cy.get(this.filledStudentFullNameLoc);

getFilledStudentEmailLoc = () => cy.get(this.filledStudentEmailLoc);

getFilledGenderLoc = () => cy.get(this.filledGenderLoc);

getExpectBirthDateLoc= () => cy.get(this.expectBirthDateLoc)

getFilledSubjectLoc = () => cy.get(this.filledSubjectLoc);

getFilledHobbiesLoc = () => cy.get(this.filledHobbiesLoc);

getFilledAddresLoc = () => cy.get(this.filledAddresLoc);

getFilledStateAndCity = () => cy.get(this.filledStateAndCity);


typeInField(subject: Cypress.Chainable<JQuery<HTMLElement>>, value: any): void {
  subject.type(value);
}

expectText(subject: Cypress.Chainable<JQuery<HTMLElement>>, expectedText: string): void {
  subject.should('have.text', expectedText);
}

expectValue(subject: Cypress.Chainable<JQuery<HTMLElement>>, expectedValue: string): void {
  subject.should('have.value', expectedValue);
}

expectVisible(subject: Cypress.Chainable<JQuery<HTMLElement>>): void {
  subject.should('be.visible');
}


visitMainPage() {
  cy.visit('https://demoqa.com/');
}

expectMainPage() {
  this.expectVisible(this.getMainPageLoc());   
}

clickElementBtn() {
  this.getElementBtnLoc().click();    
}

expectElementPage() {
  this.expectVisible(this.getElementPageLoc());   
}

clickTextBtn() {
  this.getTextBtnLoc().click();    
}
    

expectTextBtnPage() {
  this.expectVisible(this.getTextBtnPageLoc());
}

clickUserNameFieldLoc() {
  this.typeInField(this.getUserNameFieldLoc(),this.testPerson.firstName);
  this.typeInField(this.getUserEmailLoc(),this.testPerson.email);
  this.typeInField(this.getUserCurrentAddresLoc(),this.testPerson.currAddres);
  this.typeInField(this.getUserPermanentAddresLoc(),this.testPerson.permAddres);   
}

clickSubmitBtnLoc() {
  this.getSubmitBtnLoc().click();
}

expectConfirmationTableFilled() {
  this.expectVisible(this.getConfirmationTableLoc());
  this.expectText(this.expectUserNameFilled(),'Name:'+this.testPerson.firstName); 
  this.expectText(this.expectUserEmailFilled(),'Email:'+this.testPerson.email);
  this.expectUserCurrentAddresFilled().invoke('text').then(actualText => {
  const trimmedActualText = actualText.replace(/\s$/,'');
  expect(trimmedActualText).to.equal('Current Address :'+this.testPerson.currAddres);
  });
  // this.expectText(this.expectUserCurrentAddresFilled(),'Current Address :Test 999 str ');
  this.expectText(this.expectUserPermanentAddresFilled(),'Permananet Address :'+this.testPerson.permAddres);


  // this.getConfirmationTableLoc().should('be.visible')
}


clickCheckBoxBtn() {
  this.getCheckBoxBtnLoc().click();    
}
    
expectCheckBoxBtnPage() {
  this.expectVisible(this.getCheckBoxBtnPageLoc());

  // this.getCheckBoxBtnPageLoc().should('be.visible');    
}

clickCheckBoxExpandAllBtn() {
  this.getCheckboxExpandallBtn().click();
}

expectCheckBoxExpandAllPage() {
  this.expectVisible(this.getChekResultOnBoxExpandAllBtn());

  // this.getChekResultOnBoxExpandAllBtn().should('be.visible'); 
}

clickFirstCheckBoxBtnPage() {
  this.getFirstCheckBoxBtnPageLoc().click({force:true});
  this.getSecondCheckBoxBtnPageLoc().click({force:true});
  this.getThirdCheckBoxBtnPageLoc().click({force:true});
}

expectFirstResultCheckBoxBtnPage () {
  this.getFirstResultCheckBoxBtnPageLoc().contains('notes');
  this.getSecondResultCheckBoxBtnPageLoc().contains('general');
  this.getThirdResultCheckBoxBtnPageLoc().contains('excelFile');
}

clickRadioButtonBtn() {
  this.getRadioButtonBtnLoc().click();    
}
    
expectRadioButtonBtnPage() {
  this.expectVisible(this.getRadioButtonBtnPageLoc());  
}

clickFirstBtnRadioButtonBtnPageLoc() {
  this.getFirstBtnRadioButtonBtnPageLoc().click({force:true});
}

expectFirstBtnNotifyOnRadioButtonBtnPageLoc() {
  this.getNotifyOnRadioButtonBtnPageLoc().contains('Yes');
}

clickSecondRadioButtonBtnPageLoc() {
  this.getSecondRadioButtonBtnPageLoc().click({force:true});
}

expectSecondBtnNotifyOnRadioButtonBtnPageLoc() {
  this.getNotifyOnRadioButtonBtnPageLoc().contains('Impressive');
}

clickWebTablesBtn() {
  this.getWebTablesBtnLoc().click();        
}
    
expectWebTablesBtnPage() {
  this.expectVisible(this.getWebTablesBtnPageLoc());   
}

clickAddBtnLoc() {
  this.getAddBtnLoc().click();    
}

expectRegistrationFormLoc() {
  this.expectVisible(this.getRegistrationFormLoc())
}

fillRegistrationForm() {
  this.typeInField(this.getFirstNameLoc(),this.testPerson.firstName);
  this.typeInField(this.getLastNameLoc(),this.testPerson.secondName);
  this.typeInField(this.getEmailLoc(),this.testPerson.email);
  this.typeInField(this.getAgeLoc() ,this.getRandomInt(99)),
  this.getAgeLoc().invoke('val').as('age');  
  this.typeInField(this.getSalaryLoc(),this.getRandomInt(99999999)),
  this.getSalaryLoc().invoke('val').as('salary');
  this.typeInField(this.getDepartmentLoc(),this.testPerson.department);
}
 
clickFormSubmitBtnLoc() {
  this.getFormSubmitBtnLoc().click();
}

expectSearchFieldLoc() {
  this.expectVisible(this.getSearchFieldLoc());
}

clickSearchFieldLoc() {
  this.getSearchFieldLoc().click();
}

typeSearchFieldLoc() {
  this.typeInField(this.getSearchFieldLoc(),this.testPerson.firstName);
}

expectEditBtnLoc() {
  this.expectVisible(this.getEditBtnLoc());
}

clickEditBtnLoc() {
  this.getEditBtnLoc().click();
}

expectFirstNameLoc() {
  this.expectValue(this.getFirstNameLoc(),this.testPerson.firstName);
  this.expectValue(this.getLastNameLoc(),this.testPerson.secondName);
  this.expectValue(this.getEmailLoc(),this.testPerson.email);
  cy.get('@age').then((age: any) => {this.expectValue(this.getAgeLoc(),age)});
  cy.get('@salary').then((salary: any) => {this.expectValue(this.getSalaryLoc(),salary)});
  this.expectValue(this.getDepartmentLoc(),this.testPerson.department);

}

clickCloseBtnLoc() {
  this.getCloseBtnLoc().click();
}

expectDeleteBtndLoc() {
  this.expectVisible(this.getDeleteBtndLoc());
}

clickDeleteBtndLoc() {
  this.getDeleteBtndLoc().click();
}

clickButtonsBtn() {
  this.getButtonsBtnLoc().click();    
}
    
expectButtonsBtnPage() {
  this.expectVisible(this.getButtonsBtnPageLoc());
}
    
clickAllBtnsOnButtonsPage() {
  this.getDoubleClickBtnOnButtonsPage().dblclick();
  this.getRightClickBtnOnButtonsPage().rightclick();
  this.getSimpleClickBtnOnButtonsPage().click();

}    

expectAllNotifyOnButtonsPage() {
  this.expectVisible(this.getDoubleClickNotifyOnButtonsPage());
  this.expectVisible(this.getRightClickNotifyOnButtonsPage());
  this.expectVisible(this.getSimpleClickNotifyOnButtonsPage());
}

clickFormsDropdownMenuLoc () {
  this.getElementBtn().click()
  this.getFormsDropdownMenuLoc().click();
}

clickPracticeFormLoc () {
  this.getPracticeFormLoc().click();
}

clickAndFillForm() {  
this.typeInField(this.getFormFirstNameLoc(),this.testPerson.firstName);
this.typeInField(this.getFormLastNameLoc(),this.testPerson.secondName);
this.typeInField(this.getFormUserEmailLoc(),this.testPerson.email);
this.getFormGenderLoc().click({force:true});
this.typeInField(this.getFormUserPhoneNumberLoc(),this.getRandomInt(9999999999)),
this.getFormUserPhoneNumberLoc().invoke('val').as('phone');
this.getBirthDateFieldLoc().click();
this.getBirthDateYearLoc().select('1999');
this.getBirthDateMonthLoc().select('May');
this.getBirthDateDayLoc().click();
this.typeInField(this.getFormSubjectsDropdownMenuLoc(),'mat{enter}');
this.getFormHobbiesReadingCheckboxLoc().click({force:true});
this.typeInField(this.getFormCurrentAddresLoc(),this.testPerson.currAddres);
this.typeInField(this.getFormStateLoc(),'nc{enter}'); 
this.typeInField(this.getFormCityLoc(),'noida{enter}');
}

clickFormSubmitBtn()  {
  this.getFormSubmitBtnLoc().click({force:true}); 
}

expectFullFilledFormPage() {
  this.expectVisible(this.getExpectFilledForm());
}

expectFullFilledForm() {
  cy.get('@phone').then((phone: any) => {this.expectText(this.getFilledPhoneLoc(),phone.toString())});
  this.expectText(this.getExpectBirthDateLoc(),'21 May,1999');
  this.expectText(this.getFilledStudentFullNameLoc(),'Test Test2');
  this.expectText(this.getFilledStudentEmailLoc(),this.testPerson.email);
  this.expectText(this.getFilledGenderLoc(),'Male');
  this.expectText(this.getFilledSubjectLoc(),'Maths');
  this.expectText(this.getFilledHobbiesLoc(),'Reading');
  this.expectText(this.getFilledAddresLoc(),this.testPerson.currAddres);
  this.expectText(this.getFilledStateAndCity(),'NCR Noida');
}



}

export default new Tasks();