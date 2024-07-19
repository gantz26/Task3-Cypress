/// <reference types="cypress" />
import signUpPage from "../../pages/signUpPage";
import homePage from "../../pages/homePage";
import { getUser } from "../../helpers/helper";
import profilePage from "../../pages/profilePage";

describe('Article tests', () => {
    let user
    beforeEach(() => {
        signUpPage.openSignUpPage()
        user = getUser()
        signUpPage.signUp(user.username, user.email, user.password)
        homePage.getProfileLink(user.username).should('have.text', user.username)
        homePage.globalFeedLink.click()
    })

    it('Add an article to favorited articles', () => {
        homePage.oneOfArticles().then($article => {
            homePage.getNameOfArticle(cy.wrap($article)).then($title => {
                const articleName = $title
                cy.log(articleName)
                let currentValue
                homePage.disabledFavouritebutton(cy.wrap($article)).invoke('text').then($value => {
                    currentValue = parseInt($value)
                    cy.log(currentValue)
                })
                homePage.disabledFavouritebutton(cy.wrap($article)).click()
                let newValue
                homePage.activedFavouritebutton(cy.wrap($article)).invoke('text').then($value => {
                    newValue = parseInt($value)
                    expect(newValue).to.be.equal(currentValue + 1)
                })
                homePage.getProfileLink(user.username).click()
                profilePage.favoritedArticlesTab.click()
                cy.log(articleName)
                profilePage.articles.should('contain.text', articleName)
            })
        })
    })

    it('Sorting articles by option', () => {
        homePage.tags.each(($element, index, $list) => {
            cy.log(`TAG: ${$element.text()}`)
            cy.wrap($element).click()
            homePage.pagination.then($pages => {
                cy.log(`PAGE LIST LENGTH: ${$pages.length}`)
                for (let i = 0; i < $pages.length; ++i) {
                    cy.log(`PAGE TEXT: ${homePage.pagination.eq(i)}`)
                    homePage.pagination.eq(i).click()
                    homePage.articles.each(($article_element, article_index, $articleList) => {
                        homePage.getTagListOfArticle(cy.wrap($article_element)).should('contain.text', $element.text())
                    })
                }
            })
        })
    })
})