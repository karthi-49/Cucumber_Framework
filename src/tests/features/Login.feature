Feature: Login page testcases

Scenario: Login with valid userDetails
Given I open browser 
And I navigate to Login page "https://playground.bsparksoftwaretechnologies.com/login"
When I enter username "Derek@example.com" and password "abdcd123@#"
And I click login button
Then I validate home page title "Dashboard"

Scenario: Login with invalid userDetails
Given I open browser
And I navigate to Login page "https://playground.bsparksoftwaretechnologies.com/login"
When I enter username "Derek@xyz.com" and password "abdcd123@#"
And I click login button
Then I validate error message "Invalid email or password"