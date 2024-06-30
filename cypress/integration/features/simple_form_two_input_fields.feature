Feature: Simple Form Demo - Multiple Input Fields

  Scenario: Verify the sum of two input fields
    Given I open the simple form page
    When I enter a number "10" into the first input field
    And I enter a number "20" into the second input field
    And I click the "Get Total" button
    Then I should see the total "30" displayed
