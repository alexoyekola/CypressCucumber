class GoogleHome {
    elements = {
      searchBar: () => cy.get("#email"),
  
    };
  

    submitLogin(email,password){
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.loginBtn().click();
    }
    openURL(){
        cy.visit("https://www.google.com/");
    }
  
  }
  
  export const googleHome = new GoogleHome();
  