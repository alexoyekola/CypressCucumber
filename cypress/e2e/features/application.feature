Feature: Process Application


    Background:
        Given User has started an application
    Scenario: Full leave year holiday calculation
        When  User selects holiday entitlement base
        And   User selects 'full leave year'
        And   User inputs days worked per week
        Then  User successfully completed application
    Scenario: Invalid days worked per week 
        When  User selects holiday entitlement base
        And   User selects 'full leave year'
        And   User inputs invalid days worked per week
        Then  User error message "There is a problem" is displayed
    Scenario: leaving part way through a leave year holiday calculation
        When  User selects holiday entitlement base
        And   User selects 'leaving part way through a leave year'
        And   User inputs end employment date 
        And   User inputs leave year date
        And   User inputs days worked per week
        Then  User successfully completed application  
    Scenario: Invalid leave year date - leaving part way through a leave year holiday calculation
        When  User selects holiday entitlement base
        And   User selects 'leaving part way through a leave year'
        And   User inputs end employment date 
        And   User inputs a leave year date after end employment date
        Then  User error message "There is a problem" is displayed 
    Scenario: Starting and leaving part way through a leave year holiday calculation
        When  User selects holiday entitlement base
        And   User selects 'starting and leaving part way through a leave year'
        And   User inputs start & end employment dates
        And   User inputs days worked per week
        Then  User successfully completed application
    Scenario: Invalid end date - Starting and leaving part way through a leave year holiday calculation
        When  User selects holiday entitlement base
        And   User selects 'starting and leaving part way through a leave year'
        And   User inputs start employment date & end date after 'start date'
        Then  User error message "There is a problem" is displayed 