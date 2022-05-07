class Header {

    btnLogin() {
        return cy.get('.login')
    }

    nameUserLogged() {
        return cy.get('.header_user_info a[class="account"] span')
    }
}
export default new Header()