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
# Then I check that the highest video card price is higher than 35000
Then I verify that the highest video card price is above 35000
When I click on the Filters button again
When I choose the most cheap option
Then I check that the cheapest video card price is lower than 35000
Then I want to find out the price difference between cheaperPrice and highestPrice





#Scenario: I check that the highest Apple smartphone
  #Given I am on page
  # When I click on Catalog button
  # Then I should see Catalog page
  # When I click Electronics
  # Then I should see Electronics dropdown menu
  # When I click on Mobile phones and accessories
  # Then I should Mobile phones and see accessories options page
  # When I click on Smartphones button
  # Then I should see Smartphones catalog
  # When I choose a manufacturer in the filter
  # When I click filter button
  # Then I should see filter dropdown
  # When I choose Most expencive option
  #Then I check that the highest Apple smartphone price is higher than 5000

