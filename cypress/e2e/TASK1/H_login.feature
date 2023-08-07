Feature: localhost:3000
    Scenario: Login to the application
        Given Login view opened
        When Sign in to the application
        Then Welcome user message is displayed