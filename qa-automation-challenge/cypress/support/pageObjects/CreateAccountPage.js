class CreateAccountPage {

    titleCreateAccount() {
        return cy.get('h1')
    }

    email() {
        return cy.get('#email')
    }
}
export default new CreateAccountPage()