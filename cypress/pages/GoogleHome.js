class GoogleHome {
    elements = {
      searchBar: () => cy.get("#APjFqb"),
      searchBtn: () => cy.get('[value="Google Search"]'),
      resultStats: () => cy.get("#result-stats")

    };
  
    openURL(){
        cy.visit("https://www.google.com/");
    }
  
  }
  
  export const googleHome = new GoogleHome();
  