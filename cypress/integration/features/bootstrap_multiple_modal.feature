Feature: Bootstrap Multiple Modal Example

  Scenario: Open and close multiple modals
    Given I navigate to the Multiple Modal Example page
    When I open the first modal
    Then the first modal should be displayed
    When I open the second modal from within the first modal
    Then the second modal should be displayed
    When I close the second modal
    Then the first modal should still be displayed
    When I close the first modal
    Then the first modal should be dismissed
