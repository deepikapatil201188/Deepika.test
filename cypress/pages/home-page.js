class HomePage {
    visit() {
        cy.visit('/');
    }

    getWhatsNewMenu() {
        return cy.get('nav.navigation ul > li.nav-1 > a[href$="what-is-new.html"]')
    }

    getWomenMenu() {
        return cy.get('nav.navigation a[href$="/women.html"]');
    }

    getWomenTopsMenu() {
        return cy.get('nav.navigation a[href$="tops-women.html"]');
    }

    clickWomenJacketsMenu() {
        this.getWomenMenu().trigger('mouseover');
        this.getWomenTopsMenu().trigger('mouseover');
        return cy.get('nav.navigation a[href$="jackets-women.html"]').click();
    }

    clickWomenHodiesAndSweatShirtsMenu() {
        this.getWomenMenu().trigger('mouseover');
        this.getWomenTopsMenu().trigger('mouseover');
        return cy.get('nav.navigation a[href$="hoodies-and-sweatshirts-women.html"]').click();
    }

    clickWomenTeesMenu() {
        this.getWomenMenu().trigger('mouseover');
        this.getWomenTopsMenu().trigger('mouseover');
        return cy.get('nav.navigation a[href$="tees-women.html"]').click();
    }

    clickWomenTanksMenu() {
        return cy.get('nav.navigation a[href$="tanks-women.html"]').click();
    }

    clickWomenPantsMenu() {
        this.getWomenMenu().trigger('mouseover');
        this.getWomenTopsMenu().trigger('mouseover');
        return cy.get('nav.navigation a[href$="pants-women.html"]').click();
    }

    getWomenShortsMenu() {
        return cy.get('nav.navigation a[href$="shorts-women.html"]');
    }

    getNewYogaCollectionMenu() {
        return cy.get('a[href$="yoga-new.html"]');
    }
}

export default new HomePage;
