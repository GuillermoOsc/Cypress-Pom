class homeSaucePage{

// Se mapean los elementos del login - user, pasword, botón de inicio de sesión y msje de error de sesión.  ( ver carpeta pom dentro de e2e)

    elements = {
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button'),
        errorMessage: () => cy.get('h3[data-test="error"]')
    }

    typeUsername(username){
        this.elements.usernameInput().type(username);
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    clickLogin(){
        this.elements.loginBtn().click();
    }


}

module.exports = new homeSaucePage();