Feature: Login Help


    Background: 
        Given User is on login page
    Scenario: Need help password reset
        When  User clicks 'Need Help?'
        Then  User is on the password reset screen
    Scenario: Need help password reset - unsuccessful login
        When  User logs in unsuccessfully
         |          email        |   password   |
         |         testName      |   hudlTest   |
        And   User clicks 'Need Help?'in error message 
        Then  User is on the password reset screen
    Scenario: Check 'Remember me'
        When  User clicks checkbox 'Remember me'
        Then  Box should display check
    Scenario: Uncheck 'Remember me'
        Then  Box should not display check
    Scenario: Sign up
        When  User clicks sign up
        Then  User successfully on Request demo page