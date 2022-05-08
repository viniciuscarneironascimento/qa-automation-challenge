class Header {

    btnLogin() {
        return cy.get('.login')
    }

    nameUserLogged() {
        return cy.get('.header_user_info a[class="account"] span')
    }

    signOut() {
        return cy.get('.header_user_info a[class="logout"]')
    }
}
export default new Header()