class ApplicationPage {
    elements = {
      startBtn: () => cy.get(".govuk-button--start"),
      continueBtn: () => cy.get(".govuk-button"),
      applicationScrn: () => cy.get(".govuk-fieldset"),
      errorMessage: () => cy.get(".govuk-error-summary__title"),
    };
  
    startApplication() {
      cy.visit("https://www.gov.uk/calculate-your-holiday-entitlement");
      this.elements.startBtn().click({ multiple: true });
    }
  
  }
  
  export const applicationPage = new ApplicationPage();
  