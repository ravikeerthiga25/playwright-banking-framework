Feature: Loan Request Module

  Background:
    Given I open the ParaBank website
    When I login with valid credentials

  Scenario: Valid Loan Request
    When I click request loan link
    And I enter valid loan amount
    And I click apply loan button
    Then loan request should be successful

  Scenario: Empty Loan Amount
    When I click request loan link
    And I leave loan amount empty
    And I click apply loan button
    Then loan validation message should display

  Scenario: Negative Loan Amount
    When I click request loan link
    And I enter negative loan amount
    And I click apply loan button
    Then loan error message should display

  Scenario: Huge Loan Amount
    When I click request loan link
    And I enter huge loan amount
    And I click apply loan button
    Then proper loan validation should display