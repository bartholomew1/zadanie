Feature: zadanie
    Scenario: Invalid credentials
        Given Login view opened
        When Provide invalid credentials
        Then Handle error message