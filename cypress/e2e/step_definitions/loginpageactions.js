import {
    When, Then,  
  } from "@badeball/cypress-cucumber-preprocessor";
import { loginPageActions } from "@pages/LoginPageActions";


//Global Step
Then("User is on the password reset screen", () => {
    cy.get('[data-qa-id="lets-reset-password-headline"]').should('be.visible');
    cy.get('[data-qa-id="lets-reset-password-headline"]').should('have.text', "Let’s reset your password");
})


//Selecting need help straight from login screen
When("User clicks 'Need Help?'", () => {
    cy.get('[data-qa-id="need-help-link"]').click();
})

//Selecting need help after unsuccessful login
When("User logs in unsuccessfully", () => {
   cy.get('#email').type("testname");
   cy.get('#password').type("password");
   cy.get('#logIn').click()
})

When("User clicks 'Need Help?'in error message", () => {
    cy.get('.uni-link.uni-link--default.uni-margin--quarter--left').click();
})



//Checking and unchecking 'Remember me' 
When("User clicks checkbox 'Remember me'", () => {
    cy.get('.uni-form__check-item').click();
})

Then("Box should display check", () => {
    cy.get('.uni-form__check-item--is-checked').should('have.class', 'uni-form__check-item--is-checked');
})

Then("Box should not display check", () => {
    cy.get('.uni-form__check-item').should('have.class', 'uni-form__check-item').should('not.have.class', 'uni-form__check-item--is-checked');
})

//Sign up functionality
When("User clicks sign up", () => {
    cy.get('[href="/register/signup"]').click();
})

Then("User successfully on Request demo page", () => {
    cy.get("#register_demo").should('be.visible');
    cy.get("#register_elite-contact").should('be.visible');
})