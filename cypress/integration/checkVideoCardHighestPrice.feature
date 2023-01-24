Feature: Check the highest price of video card

Scenario: I check the highest price of video card
  Given I am on main page
  When I click on catalog button
  Then I should see catalog page
  When I click Computers and Networks button
  Then I should see Computers and Networks dropdown menu
  When I click on accessories
  Then I should see accessories options page
  When I click on video cards button
  Then I should see video cards catalog
  When I click filters button
  Then I should see filters dropdown
  When I choose the most expencive option
  Then I should see the page is loaded
  Then I check that the highest video card price is higher than 35000


 #Scenario: Test some functions
  #Given I am on smartphone page
  #When I choose the one i want
  #Then I wanna check will I have enough for my phone 1000