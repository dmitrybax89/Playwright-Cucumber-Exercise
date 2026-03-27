Feature: Login Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario: Validate the login page title
    # TODO: Fix this failing scenario
    Then I should see the title "Swag Labs"

  Scenario: Validate login error message
    Then I will login as 'locked_out_user'
    Then I should see the error message "Epic sadface: Sorry, this user has been locked out."

  Scenario: Validate login with invalid credentials
    Then I will login as 'invalid_user'
    Then I should see the error message "Epic sadface: Username and password do not match any user in this service"