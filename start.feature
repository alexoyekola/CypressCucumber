Feature: Start/Restart Application


    Background:
        Given User is on start application page
    Scenario: User starts an application
        When  User clicks start
        Then  User successfully started application
    Scenario: User restarts an application
        When  User clicks start
        And   User selects holiday entitlement base
        And   User clicks 'Start again'
        Then  User successfully restarted application
    
