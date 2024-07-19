/// <reference types="cypress" />

class HomePage {
    elements = {
        settingsLink: () => cy.get('a[href="/settings"]'),
        signInLink: () => cy.get('a[href="/login"]'),
        globalFeedLink: () => cy.contains('Global Feed'),
        articles: () => cy.get('.article-preview'),
        tags: () => cy.get('a.tag-pill'),
        pagination: () => cy.get('ul.pagination').find('.page-link')
    }

    getProfileLink(username) {
        return cy.get(`a[href="/profile/${username}"]`)
    }
    
    get tags() {
        return this.elements.tags()
    }

    get pagination() {
        return this.elements.pagination()
    }

    get settingsLink() {
        return this.elements.settingsLink()
    }

    get signInLink() {
        return this.elements.signInLink()
    }

    get globalFeedLink() {
        return this.elements.globalFeedLink()
    }

    get articles() {
        return this.elements.articles()
    }

    openHomePage() {
        cy.visit('/')
    }

    oneOfArticles() {
        return this.elements.articles().then($articles => {
            const index = Math.floor(Math.random() * $articles.length)
            return $articles.eq(index)
        })
    }

    getNameOfArticle(article) {
        return article.find('h1').invoke('text')
    }

    disabledFavouritebutton(article) {
        return article.find('button.btn.btn-sm.btn-outline-primary.pull-xs-right')
    }

    activedFavouritebutton(article) {
        return article.find('button.btn.btn-sm.btn-primary.pull-xs-right')
    }

    getTagListOfArticle(article) {
        return article.find('li.tag-pill')
    }
}

export default new HomePage()