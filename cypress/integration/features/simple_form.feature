Feature: Simple Form Demo
  As a user
  I want to enter a message in the simple form
  So that I can see the same message displayed on the screen

  Scenario: Display entered message
    I navigate to the Simple Form Demo page
    When I enter a message "Sunny day! Innit?"
    And I click the "Show Message" button
    Then I should see the message "Hello, world!" displayed
