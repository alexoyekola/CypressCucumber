class StartPage {
    elements = {
      startBtn: () => cy.get(".govuk-button--start"),
      applicationScrn: () => cy.get(".govuk-fieldset"),
    };
  
    clickStart() {
      this.elements.startBtn().click({ multiple: true });
    }
  
  }
  
  export const startPage = new StartPage();
  