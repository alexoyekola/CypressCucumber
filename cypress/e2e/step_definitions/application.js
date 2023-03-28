import {
    Given, When, Then,  
  } from "@badeball/cypress-cucumber-preprocessor";
import { applicationPage } from "@pages/ApplicationPage";
 
//Prelude step
  Given("User has started an application", () => {
    applicationPage.startApplication();
  });

//Global steps
  When("User selects holiday entitlement base", () => {
    cy.get('#response-0').click();
    cy.get('.gem-c-button--bottom-margin').click();
  });

  When("User inputs days worked per week", () => {
    cy.get('#response').type("5");
    cy.get('.gem-c-button--bottom-margin').click();
  });

  When("User inputs invalid days worked per week", () => {
    cy.get('#response').type("0.5");
    cy.get('.gem-c-button--bottom-margin').click();
  });
 
  Then("User successfully completed application", () => {
    cy.get('.govuk-heading-xl').should('be.visible');
  });

  Then("User error message {string} is displayed", (errorMessage) => {
    applicationPage.elements.errorMessage().should("include.text", errorMessage);
  });
  
//full leave year
  When("User selects 'full leave year'", () =>{
    cy.get('#response-0').click();
    cy.get('.gem-c-button--bottom-margin').click();
  });

//leaving part way through a leave year
  When("User selects 'leaving part way through a leave year'", () => {
    cy.get('#response-2').click();
    cy.get('.gem-c-button--bottom-margin').click();
  });
  When("User inputs end employment date", () => {
    cy.get('#response-0').type("02");
    cy.get('#response-1').type("01");
    cy.get('#response-2').type("1990");
    cy.get('.gem-c-button--bottom-margin').click();
  });
  When("User inputs leave year date", () => {
    cy.get('#response-0').type("01");
    cy.get('#response-1').type("01");
    cy.get('#response-2').type("1990");
    cy.get('.gem-c-button--bottom-margin').click();
  });
  When("User inputs a leave year date after end employment date", () => {
    cy.get('#response-0').type("03");
    cy.get('#response-1').type("01");
    cy.get('#response-2').type("1990");
    cy.get('.gem-c-button--bottom-margin').click();
  });

//starting and leaving part way through a leave year
  When("User selects 'starting and leaving part way through a leave year'", () => {
    cy.get('#response-3').click();
    cy.get('.gem-c-button--bottom-margin').click();
  });

  When("User inputs start & end employment dates", () => {
    cy.get('#response-0').type("02");
    cy.get('#response-1').type("01");
    cy.get('#response-2').type("1990");
    cy.get('.gem-c-button--bottom-margin').click();
    cy.get('#response-0').type("03");
    cy.get('#response-1').type("01");
    cy.get('#response-2').type("1990");
    cy.get('.gem-c-button--bottom-margin').click();
  });

  When("User inputs start employment date & end date after 'start date'", () => {
    cy.get('#response-0').type("02");
    cy.get('#response-1').type("01");
    cy.get('#response-2').type("1990");
    cy.get('.gem-c-button--bottom-margin').click();
    cy.get('#response-0').type("01");
    cy.get('#response-1').type("01");
    cy.get('#response-2').type("1990");
    cy.get('.gem-c-button--bottom-margin').click();
  });