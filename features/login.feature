Feature: ParaBank Login Functionality

  Scenario: Valid Login
    Given I open the ParaBank website
    When I enter valid username and password
    And I click the login button
    Then I should login successfully

  Scenario: Invalid Password
    Given I open the ParaBank website
    When I enter valid username and invalid password
    And I click the login button
    Then Error message should display

  Scenario: Empty Username
    Given I open the ParaBank website
    When I leave username empty and enter password
    And I click the login button
    Then Login should fail

  Scenario: Empty Password
    Given I open the ParaBank website
    When I enter username and leave password empty
    And I click the login button
    Then Login should fail

  Scenario: Empty Fields
    Given I open the ParaBank website
    When I leave username and password empty
    And I click the login button
    Then Login should fail

  Scenario: Logout Functionality
    Given I open the ParaBank website
    When I login with valid credentials
    And I click logout button
    Then I should logout successfully