/// <reference types="cypress" />

class SignInPage {
    elements = {
        emailInput: () => cy.get('input[name="email"]'),
        passwordInput: () => cy.get('input[name="password"]'),
        signInbutton: () => cy.get('button[type="submit"]'),
        erroeMessages: () => cy.get('ul.error-messages')
    }

    get erroeMessages() {
        return this.elements.erroeMessages()
    }

    openSignInPage() {
        cy.visit('/login')
    }

    signIn(email, password) {
        if (email !== '') this.elements.emailInput().type(email)
        if (password !== '') this.elements.passwordInput().type(password)
        this.elements.signInbutton().click()
    }
}

export default new SignInPage()