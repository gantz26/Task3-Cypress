/// <reference types="cypress" />

class SignUpPage {
    elements = {
        usernameInput: () => cy.get('input[name="username"]'),
        emailInput: () => cy.get('input[name="email"]'),
        passwordInput: () => cy.get('input[name="password"]'),
        signUpButton: () => cy.get('button[type="submit"]'),
        errorMessages: () => cy.get('ul.error-messages')
    }

    get errorMessages() {
        return this.elements.errorMessages()
    }

    openSignUpPage() {
        cy.visit('/register')
    }

    signUp(userName, email, password) {
        if (userName !== '') this.elements.usernameInput().type(userName)
        if (email !== '') this.elements.emailInput().type(email)
        if (password !== '') this.elements.passwordInput().type(password)
        this.elements.signUpButton().click()
    }
}

export default new SignUpPage()