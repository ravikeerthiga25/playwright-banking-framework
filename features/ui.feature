@ui
Feature: UI Validation

  Scenario: Verify Logo
    Given I open the ParaBank website
    Then application logo should display

  Scenario: Verify Navigation Links
    Given I open the ParaBank website
    Then all navigation links should display

  Scenario: Verify Page Title
    Given I open the ParaBank website
    Then correct page title should display

  Scenario: Verify Responsive UI
    Given I open the ParaBank website
    Then UI should align properly