Feature: Login 


    Background:
        Given User is on login page
    Scenario: User logs in successfully
        When  User provides correct credentials 
        Then  User is logged in successfully
    Scenario: User logs in unsuccessfully
        When  User provides incorrect credentials 
            |          email        |   password   |
            |         testName      |   hudlTest   |
        Then  User receives error message "We didn't recognize that email and/or password.Need help?"
    