Feature: Select List Demo

  Scenario: Verify that a day can be selected from the dropdown list and the correct message is displayed
    Given I navigate to the Select List Demo page
    When I select "Monday" from the dropdown list
    Then the displayed message should match the selected day "Monday"