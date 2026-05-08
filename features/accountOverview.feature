Feature: Account Overview Module

  Background:
    Given I open the ParaBank website
    When I login with valid credentials

  Scenario: View Account Summary
    When I click accounts overview link
    Then account details should display

  Scenario: Verify Balance
    When I click accounts overview link
    Then account balance should display correctly

  Scenario: Click Account Number
    When I click accounts overview link
    And I click account number
    Then transaction history should display