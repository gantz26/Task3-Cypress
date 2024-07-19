/// <reference types="cypress" />
import homePage from '../../pages/homePage.js'
import signUpPage from '../../pages/signUpPage.js'
import signInPage from '../../pages/signInPage.js'
import settingsPage from '../../pages/settingsPage.js'
import { getUser } from '../../helpers/helper.js'

describe('Sign in page', () => {
    let user
    beforeEach(() => {
        signUpPage.openSignUpPage()
        user = getUser()
        signUpPage.signUp(user.username, user.email, user.password)
        homePage.getProfileLink(user.username).should('have.text', user.username)
        homePage.settingsLink.click()
        settingsPage.logout()
        signInPage.openSignInPage()
    })

    it('Sign in with valid credentials', () => {
        signInPage.signIn(user.email, user.password)
        homePage.getProfileLink(user.username).should('have.text', user.username)
    })

    it ('Sign in with an invalid email', () => {
        const newUser = getUser()
        signInPage.signIn(newUser.email, user.password)
        signInPage.erroeMessages.should('contain.text', 'email or password is invalid')
    })

    it ('Sign in with an invalid password', () => {
        const newUser = getUser()
        signInPage.signIn(user.email, newUser.password)
        signInPage.erroeMessages.should('contain.text', 'email or password is invalid')
    })
})