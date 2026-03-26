
Feature: Login page testcases

  Background: Background Logic
    Given I navigate to Login page "https://playground.bsparksoftwaretechnologies.com/login"

  @smoke
  Scenario: Login with valid userDetails
    When I enter username "Derek@example.com" and password "abdcd123@#"
    And I click login button
    Then I validate home page title "Bspark Software Technologies || Playground"

  @smoke @regression
  Scenario: Login with invalid userDetails
    When I enter username "Derek@xyz.com" and password "abdcd123@#"
    And I click login button
    Then I validate error message "Invalid email or password"
