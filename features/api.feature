Feature: ParaBank API Testing

  Scenario: Get customer account details
    When I send API request to get account details
    Then API response should be successful