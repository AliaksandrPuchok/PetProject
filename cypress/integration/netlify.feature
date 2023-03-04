Feature: Test form elements on trytestingthis.netlify.app

  Scenario: Fill in form elements and submit
    Given I am on the form page1
    When I fill in the Text Box1
    When I select the Check Box1
    When I select the Radio Button1
    When I select date
    When I select a color from the Color Picker1
    When I move the Range Slider1
    When I fill in the Number Input1
    When I submit the form1
    Then the form should be submitted successfully1