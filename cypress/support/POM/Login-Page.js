class Login {

    get = {
        userNameInput: () => cy.get('[name="username"]'),
        passwordInput: () => cy.get('[name="password"]'),
        submitButton: () => cy.get('[type="submit"]'),
    }

    // Acciones
    enterUsername(type){
        this.get.userNameInput().type(type)
    }

    enterPassword(type){
        this.get.passwordInput().type(type)
    }

    submitLogin(){
        this.get.submitButton().click()
    }

}

export const login = new Login;