/// <reference types="cypress" />

class ProfilePage {
    elements = {
        favoritedArticlesTab: () => cy.contains('Favorited Articles'),
        articles: () => cy.get('.article-preview')
    }

    get favoritedArticlesTab() {
        return this.elements.favoritedArticlesTab()
    }

    get articles() {
        return this.elements.articles()
    }

    getNameOfArticle(article) {
        return article.find('h1').invoke('text')
    }
}

export default new ProfilePage()