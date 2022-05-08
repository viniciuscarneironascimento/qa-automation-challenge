class MyAccountPage {

    titleMyAccount() {
        return cy.get('.page-heading')
    }

    msgWelcome() {
        return cy.get('.center_column p')
    }
}
export default new MyAccountPage()