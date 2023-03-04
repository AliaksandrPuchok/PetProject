
Feature: Login functionality
  As a user
  I want to log in to the website
  So that I can access my account

  Background:
    Given I am on the login page

  Scenario: Login with valid credentials
    When I enter valid username and password and click the Login button
    Then I should be logged in
    Then the API should return a success status code
 
  # Scenario: Login with invalid credentials
  #   When I enter invalid username and password and click the Login button
  #   Then I should see an error message