Feature: Search


    Background:
        Given User is on google home page
    Scenario: User searches an input
        When  User inputs into search bar
        And   User click 'Google Search'
        Then  User successfully on search results page
