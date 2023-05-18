import {
    Given, When, Then,  
  } from "@badeball/cypress-cucumber-preprocessor";
import { googleHome } from "@pages/GoogleHome";

//Prelude step
Given("User is on google home page", () => {
    googleHome.openURL();
  });


//Inputting on the search bar and clicking the search button
When("User inputs into search bar", () => {
    cy.get("#L2AGLb").click();
    googleHome.elements.searchBar().type("Hello World");
})

When ("User click 'Google Search'", () => {
    googleHome.elements.searchBtn().eq(0).click({ multiple: false });
})

//On the results page
Then("User successfully on search results page", () => {
    googleHome.elements.searchBar().should('be.visible');
})