class LoginScreen {
    elements = {
      emailInput: () => cy.get("#email"),
      passwordInput: () => cy.get("#password"),
      loginBtn: () => cy.get("#logIn"),
      errorMessage: () => cy.get('[data-qa-id="error-display"]')
    };
  

    submitLogin(email,password){
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.loginBtn().click();
    }
    openURL(){
        cy.visit("https://www.hudl.com/login");
    }
  
  }
  
  export const loginScreen = new LoginScreen();
  