class HomePage {

    go(url) {
        cy.visit(url)
    }

}
export default new HomePage()