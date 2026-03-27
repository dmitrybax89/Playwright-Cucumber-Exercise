Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario Outline: Validate product sort by price <sort>
    Then I will login as 'standard_user'
    Then I sort items by "<sort>"
    Then items should be sorted by price "<order>"
    Examples:
      | sort                | order |
      | Price (low to high) | asc   |
      | Price (high to low) | desc  |

  Scenario Outline: Validate product sort by name <sort>
    Then I will login as 'standard_user'
    Then I sort items by "<sort>"
    Then items should be sorted by name "<order>"
    Examples:
      | sort          | order |
      | Name (A to Z) | asc   |
      | Name (Z to A) | desc  |