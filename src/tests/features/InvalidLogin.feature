@Login
Feature: Login page testcases with invalid credentials

  Background: Background Logic
    Given I navigate to Login page "https://playground.bsparksoftwaretechnologies.com/login"
  
  @datadriven
  Scenario Outline: Login with multiple invalid userDetails
    When I enter username "<EmailID>" and password "<Password>"
    And I click login button
    Then I validate error message "<Error_Message>"

    Examples:
      | EmailID         | Password     | Error_Message             |
      | sample1@xyz.com | sssbdcd123@# | Invalid email or password |
      | sample1@xyz.com | abdcd123@#   | Invalid email or password |
      | Derek@xyz.com   | sssbdcd123@# | Invalid email or password |
