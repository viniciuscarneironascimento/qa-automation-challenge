class HomePage {

    go(url) {
        cy.visit(url)
    }

    btnLogin() {
        return cy.get('.login')
    }
}
export default new HomePage()