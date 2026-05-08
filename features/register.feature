Feature: Registration Module

  Scenario: Successful Registration
    Given I open the ParaBank website
    When I click register link
    And I fill all valid registration details
    And I click register button
    Then account should be created successfully