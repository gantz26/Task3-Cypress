import signUpPage from "../../pages/signUpPage"
import homePage from "../../pages/homePage"
import settingsPage from "../../pages/settingsPage"
import { getUser } from "../../helpers/helper"

describe('Settings page', () => {
    let user
    beforeEach(() => {
        signUpPage.openSignUpPage()
        user = getUser()
        signUpPage.signUp(user.username, user.email, user.password)
        homePage.getProfileLink(user.username).should('have.text', user.username)
    })

    it('Sign out', () => {
        homePage.settingsLink.click()
        settingsPage.logout()
        homePage.signInLink.should('be.visible')
    })
})