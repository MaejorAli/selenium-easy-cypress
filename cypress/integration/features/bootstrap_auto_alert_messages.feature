Feature: Bootstrap Auto-Alert Messages

  Scenario: Display and auto-close alert messages
    Given I navigate to the Bootstrap Alert Messages page
    When I trigger an alert message
    Then the alert message should be displayed
    Then I wait for 5 seconds
    Then the alert message should be dismissed