Feature: Fund Transfer Module

  Background:
    Given I open the ParaBank website
    When I login with valid credentials

  Scenario: Successful Fund Transfer
    When I click transfer funds link
    And I enter valid transfer amount
    And I click transfer button
    Then fund transfer should be successful

  Scenario: Transfer Zero Amount
    When I click transfer funds link
    And I enter zero transfer amount
    And I click transfer button
    Then transfer validation message should display

  Scenario: Transfer Negative Amount
    When I click transfer funds link
    And I enter negative transfer amount
    And I click transfer button
    Then transfer error message should display

  Scenario: Transfer Without Balance
    When I click transfer funds link
    And I enter huge transfer amount
    And I click transfer button
    Then insufficient balance message should display