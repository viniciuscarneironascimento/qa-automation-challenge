class AuthenticationPage {

    pageHeading() {
        return cy.get('.page-heading')
    }

    btnCreareAccount() {
        return cy.get('#SubmitCreate')
    }

    msgError() {
        return cy.get('#create_account_error')
    }

    clearEmail() {
        return cy.get('#email_create').clear();
    }

    email(email) {
        return cy.get('#email_create').type(email);
    }
}
export default new AuthenticationPage()