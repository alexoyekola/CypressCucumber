import {
    Given, When, Then,  
  } from "@badeball/cypress-cucumber-preprocessor";
import { loginScreen } from "@pages/LoginScreen";

//Prelude step
Given("User is on login page", () => {
    loginScreen.openURL();
  });

//Successful Login 
When("User provides correct credentials", () => {
    loginScreen.elements.emailInput().type("alexoyekola@gmail.com");
    loginScreen.elements.passwordInput().type("hudltesting1!");
    loginScreen.elements.loginBtn().click();

})

Then("User is logged in successfully", () => {
    cy.get(".hui-globalnav__home-logo").should('be.visible');
})

//Unsuccessful login
When("User provides incorrect credentials", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.email);
      cy.log(row.password);
      loginScreen.submitLogin(row.email, row.password)
  
    });
  });

Then("User receives error message {string}", (errorMessage) => {
    loginScreen.elements.errorMessage().should('have.text', errorMessage);
})
