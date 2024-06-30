Feature: Bootstrap Alert Messages

  Scenario: Display and close alert messages
    Given I navigate to the Bootstrap Alert Messages page
    When I trigger an alert message
    Then the alert message should be displayed
    When I close the alert message
    Then the alert message should be dismissed
    