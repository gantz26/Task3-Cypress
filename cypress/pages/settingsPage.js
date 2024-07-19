/// <reference types="cypress" />

class SettingsPage {
    elements = {
        logoutButton: () => cy.contains('Or click here to logout.')
    }

    logout() {
        this.elements.logoutButton().click()
    }
}

export default new SettingsPage()