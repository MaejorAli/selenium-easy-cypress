Feature: Single Modal Example

  Scenario: Verify that the single modal can be opened and closed
    Given I navigate to the Single Modal Example page
    When I click the button to open the modal
    Then the modal should be displayed
    When I close the modal
    Then the modal should be dismissed
