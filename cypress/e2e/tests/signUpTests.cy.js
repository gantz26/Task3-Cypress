/// <reference types="cypress" />
import signUpPage from '../../pages/signUpPage.js'
import homePage from '../../pages/homePage.js'
import { getUser } from '../../helpers/helper.js'

describe('Sign up page', () => {
    let user
    beforeEach(() => {
        signUpPage.openSignUpPage()
        user = getUser()
    })

    it('Sign up with valid credentials', () => {
        signUpPage.signUp(user.username, user.email, user.password)
        homePage.getProfileLink(user.username).should('have.text', user.username)
    })

    it('Sign up with an empty email field', () => {
        signUpPage.signUp(user.username, '', user.password)
        signUpPage.errorMessages.should('contain.text', 'email can\'t be blank')
    })

    it('Sign up with an empty username field', () => {
        signUpPage.signUp('', user.email, user.password)
        signUpPage.errorMessages.should('contain.text', 'username can\'t be blank')
    })

    it('Sign up with an empty password field', () => {
        signUpPage.signUp(user.username, user.email, '')
        signUpPage.errorMessages.should('contain.text', 'password can\'t be blank')
    })
})