class AuthenticationPage {

    pageHeading() {
        return cy.get('.page-heading')
    }

    btnCreareAccount() {
        return cy.get('#SubmitCreate')
    }

    btnSubmitLogin() {
        return cy.get('#SubmitLogin')
    }

    msgErrorCreateAccount() {
        return cy.get('#create_account_error')
    }

    msgErrorLogin() {
        return cy.get('.alert li')
    }

    clearEmail() {
        return cy.get('#email_create').clear();
    }
    
    emailCreate(email) {
        return cy.get('#email_create').type(email);
    }

    emailLogin(email) {
        return cy.get('#email').type(email);
    }

    clearEmailLogin() {
        return cy.get('#email').clear();
    }

    password(password) {
        return cy.get('#passwd').type(password);
    }

    clearPassword() {
        return cy.get('#passwd').clear();
    }
}
export default new AuthenticationPage()