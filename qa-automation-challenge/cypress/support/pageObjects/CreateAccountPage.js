class CreateAccountPage {

    titleCreateAccount() {
        return cy.get('h1')
    }

    email() {
        return cy.get('#email')
    }

    msgError() {
        return  cy.get('.alert p')
    }

    titleMr() {
        // campo radiobutton Mr:    (fazer um comando de check)
        return  cy.get('#id_gender1')
    }

    firstName() {
        return  cy.get('#customer_firstname')
    }

    lasttName() {
        return  cy.get('#customer_lastname')
    }

    password() {
        return cy.get('#passwd')
    }

    adress1() {
        return cy.get('#address1')
    }

    city() {
        return cy.get('#city')
    }

    codePostal() {
        return cy.get('#postcode')
    }

    state() {
        return cy.get('#id_state')
    }

    phoneMobile() {
        return cy.get('#phone_mobile')
    }

    fillForm(cliente){
        this.titleMr().check();
        this.firstName().type(cliente.firstName);
        this.lasttName().type(cliente.lasttName);
        this.password().type(cliente.password);
        this.adress1().type(cliente.adress1);
        this.city().type(cliente.city);
        this.state().select(cliente.state);
        this.codePostal().type(cliente.codePostal);
        this.phoneMobile().type(cliente.phoneMobile);
    }
  
    btnRegister() {
        return cy.get('#submitAccount')
    }
    
}
export default new CreateAccountPage()