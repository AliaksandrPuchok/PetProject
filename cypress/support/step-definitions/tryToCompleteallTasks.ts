import { Given, Then, When, } from '@badeball/cypress-cucumber-preprocessor';
import Tasks from '../../pageobjects/tryToCompleteAllTasks.po';

Given('I am on Main page', () => {
    Tasks.visitMainPage()
});

Then('I should see the main page', () => {
    Tasks.expectMainPage()
});

When('I click on the Elements button', () => {
    Tasks.clickElementBtn()
});

Then('I should see the Elements button page', () => {
    Tasks.expectElementPage()
});

When('I select the Text Box button', () => {
    Tasks.clickTextBtn()
});

Then('I should see Text Box field container', () => {
    Tasks.expectTextBtnPage()
});

When('I am filling in the table of the Text Box element', () => {
    Tasks.clickUserNameFieldLoc()
});

Then('I click on Submit button', () => {
    Tasks.clickSubmitBtnLoc()
});

Then('I should see confirmation table with information', () => {
    Tasks.expectConfirmationTableFilled()
});

When('I select the Check Box button', () => {
    Tasks.clickCheckBoxBtn()
});

Then('I should see the Check Box page', () => {
    Tasks.expectCheckBoxBtnPage()
});

When('I click on expand all button', () => {
    Tasks.clickCheckBoxExpandAllBtn()
});

Then('I should see the expand all button works', () => {
    Tasks.expectCheckBoxExpandAllPage()
});

When('I mark all parameters', () => {
    Tasks.clickFirstCheckBoxBtnPage()
});

Then('I check that all parameters had been selected', () => {
    Tasks.expectFirstResultCheckBoxBtnPage()
}); 

When('I select the Radio button', () => {
    Tasks.clickRadioButtonBtn()
});

Then('I should see the Radio button page', () => {
    Tasks.expectRadioButtonBtnPage()
});

When('I select the first button', () => {
    Tasks.clickFirstBtnRadioButtonBtnPageLoc()
});

Then('i should see the rusult of pressing the first button', () => {
    Tasks.expectFirstBtnNotifyOnRadioButtonBtnPageLoc()
});

When('I select the second button', () => {
    Tasks.clickSecondRadioButtonBtnPageLoc()
});

Then('I should see the rusult of pressing the second button', () => {
    Tasks.expectSecondBtnNotifyOnRadioButtonBtnPageLoc()
});

When('I select the Web Tables button', () => {
    Tasks.clickWebTablesBtn()
});

Then('I should see the Web Tables page', () => {
    Tasks.expectWebTablesBtnPage()
});

When('I click Add button', () => {
    Tasks.clickAddBtnLoc()
});

Then('I should see Registration Form', () => {
    Tasks.expectRegistrationFormLoc()
});

When('I fill registraion form', () => {
    Tasks.fillRegistrationForm()
});

When('I click Submit button on registration page', () => {
    Tasks.clickFormSubmitBtnLoc()
});

Then('I should see profiles table', () => {
    Tasks.expectSearchFieldLoc()
});

When('I click on search field', () => {
    Tasks.clickSearchFieldLoc()
});

Then('I fill the details of a new account', () => {
    Tasks.typeSearchFieldLoc()
});

When('I should see the Edit button', () => {
    Tasks.expectEditBtnLoc()
});

Then('I click on the Edit button', () => {
    Tasks.clickEditBtnLoc()
});

When('I should see Registration form', () => {
    Tasks.expectRegistrationFormLoc()
}); 
Then('I check the First Name field', () => {
    Tasks.expectFirstNameLoc()
});   
When('I click on close button', () => {
    Tasks.clickCloseBtnLoc()
});   
Then('I should see edited profiles table', () => {
    Tasks.expectRegistrationFormLoc()
});  
When('I should see delete button for new profile', () => {
    Tasks.expectDeleteBtndLoc()
});  
Then('I click on delete button for new profile', () => {
    Tasks.clickDeleteBtndLoc()
});   

When('I click on the Buttons page', () => {
    Tasks.clickButtonsBtn()
});

Then('I should see the Buttons page', () => {
    Tasks.expectButtonsBtnPage()
});

When('I click on all buttons on the Buttons page', () => {
    Tasks.clickAllBtnsOnButtonsPage()
});

Then('I check that all buttons was clicked', () => {
    Tasks.expectAllNotifyOnButtonsPage()
});





When('I select the Form button', () => {
    Tasks.clickFormsDropdownMenuLoc();
});

Then('I click Practice Form', () => {
    Tasks.clickPracticeFormLoc();
}); 

When('I am filling in the form', () => {
    Tasks.clickAndFillForm();
});

Then('I click on Form Submit button', () => {
    Tasks.clickFormSubmitBtn()
});

Then ('I should see full fulled form page', () => {
    Tasks.expectFullFilledFormPage()
});

Then ('I should see full fulled form', () => {
    Tasks.expectFullFilledForm()
});







