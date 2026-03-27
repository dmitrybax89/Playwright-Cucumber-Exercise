Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
    Then I will login as 'standard_user'
    Then I will add the backpack to the cart
    Then Select the cart (top-right)
    Then Click on Checkout button
    Then I fill out checkout form
    Then I click on continue
    Then I click on Finish button
    Then I have to validate success message