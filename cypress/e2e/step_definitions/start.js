import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import {startPage} from '@pages/StartPage'
  
  Given("User is on start application page", () => {
    cy.visit("https://www.gov.uk/calculate-your-holiday-entitlement");
  });

  When("User clicks start", () => {
    startPage.clickStart();
  });
  When("User clicks 'Start again'", () => {
    cy.get('a[data-track-action="Start again"]').click();
  })
  Then("User successfully started application", () => {
    startPage.elements.applicationScrn().should('be.visible');
  })
  Then("User successfully restarted application", () => {
    startPage.elements.startBtn().should('be.visible');
  })