Feature: Bill Pay Module

  Background:
    Given I open the ParaBank website
    When I login with valid credentials

  Scenario: Successful Bill Payment
    When I click bill pay link
    And I enter valid bill payment details
    And I click send payment button
    Then bill payment should be successful

  Scenario: Empty Payee Name
    When I click bill pay link
    And I leave payee name empty
    And I click send payment button
    Then bill pay validation message should display

  Scenario: Invalid Account Number
    When I click bill pay link
    And I enter invalid bill account number
    And I click send payment button
    Then bill pay error message should display

  Scenario: Empty Amount
    When I click bill pay link
    And I leave bill amount empty
    And I click send payment button
    Then bill pay validation message should display