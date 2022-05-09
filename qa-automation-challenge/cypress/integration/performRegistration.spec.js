import Header from "../support/pageObjects/Header";
import HomePage from "../support/pageObjects/HomePage";
import AuthenticationPage from "../support/pageObjects/AuthenticationPage";
import CreateAccountPage from "../support/pageObjects/CreateAccountPage";
import MyAccountPage from "../support/pageObjects/MyAccountPage";

describe('Perform Registration feature', ()=>{

    const url = Cypress.config("baseUrl");
    const faker = require('faker');
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email(firstName);

    const cliente = {
            userName: `${firstName} ${lastName}`,
            firstName: `${firstName}`,
            lasttName: `${lastName}`,
            password: '12345',
            adress1: 'Rua A',
            city: 'Alagoinhas',
            state: 'Florida',
            codePostal: '12345',
            phoneMobile: '11 99999999'
    }

    const todosTitles = [
    'You must register at least one phone number.',
    'lastname is required.',
    'firstname is required.',
    'passwd is required.',
    'address1 is required.',
    'city is required.',
    "The Zip/Postal code you've entered is invalid. It must follow this format: 00000",
    'This country requires you to choose a State.'
    ]

    before('Background: Give que usuário esteja na tela de autenticação', ()=>{
        HomePage.go(url);
        Header.btnLogin().click();
        AuthenticationPage.pageHeading().should('have.text', 'Authentication');
    })

    it('Scenario: Tentar criar conta sem informar e-mail', ()=>{
        // When clicar no botão criar uma conta sem informar o e-mail
        AuthenticationPage.btnCreareAccount().click();

        // Ten o sistema exibe mensagem "Invalid email address." 
        AuthenticationPage.msgErrorCreateAccount().should('have.text', 'Invalid email address.');
    })

    it('Scenario: Tentar criar conta com e-mail inválido', ()=>{
        // When informar e-mail inválido
        AuthenticationPage.clearEmail();
        AuthenticationPage.emailCreate('teste#teste.com');

        // And clicar no botão criar uma conta
        AuthenticationPage.btnCreareAccount().click();

        // Ten o sistema exibe mensagem "Invalid email address." 
        AuthenticationPage.msgErrorCreateAccount().should('have.text', 'Invalid email address.');
    })

    it('Scenario: Tentar criar conta com e-mail já cadastrado', ()=>{
        // When informar e-mail já cadastrado
        AuthenticationPage.clearEmail();
        AuthenticationPage.emailCreate('teste@teste.com');

        // And clicar no botão criar uma conta
        AuthenticationPage.btnCreareAccount().click();

        // Ten o sistema exibe mensagem "An account using this email address has already been registered. Please enter a valid password or request a new one. "
        AuthenticationPage.msgErrorCreateAccount().should('have.text', 'An account using this email address has already been registered. Please enter a valid password or request a new one. ');
    })

    it('Scenario: Acessar formulário de cadastro', ()=>{
        // When informar e-mail válido ainda não cadastrado
        AuthenticationPage.clearEmail();
        AuthenticationPage.emailCreate(email);

        // And clicar no botão criar uma conta
        AuthenticationPage.btnCreareAccount().click();

        // Ten o sistema redireciona para a tela de cadastro da conta
        CreateAccountPage.titleCreateAccount().should('have.text', 'Create an account');

        // And o campo e-mail preenchido com o e-mail informado
        CreateAccountPage.email().should('have.value', email);
        Header.btnLogin().click();
    })

    it('Scenario: Validar campos obrigatórios do formulário', ()=>{
        // Give que acessei o formulário de cadastro
        AuthenticationPage.clearEmail();
        AuthenticationPage.emailCreate(email);
        AuthenticationPage.btnCreareAccount().click();
        CreateAccountPage.titleCreateAccount().should('have.text', 'Create an account');
        CreateAccountPage.email().should('have.value', email);

        // When clicar no botão registrar sem informar os campos obrigatórios
        CreateAccountPage.btnRegister().click();

        // Ten o sistema exibe mensagem "There are 8 errors"
        CreateAccountPage.msgError().should('contain.text', 'There are 8 errors');

        cy.get('.alert ol li').each( (item, index) => {
            cy.wrap(item).should('contain.text', todosTitles[index])
        })
        Header.btnLogin().click();
    })

    it('Scenario: Criar conta com sucesso', ()=>{
        // Give que acessei o formulário de cadastro
        AuthenticationPage.clearEmail();
        AuthenticationPage.emailCreate(email);
        AuthenticationPage.btnCreareAccount().click();
        CreateAccountPage.titleCreateAccount().should('have.text', 'Create an account');
        CreateAccountPage.email().should('have.value', email);

        // When informar os campos obrigatórios
        CreateAccountPage.fillForm(cliente);

        // And clicar no botão registrar
        CreateAccountPage.btnRegister().click();

        // Ten o sistema realiza o cadastro com sucesso
        Header.nameUserLogged().should('have.text', cliente.userName);

        //  And redireciona para a página minha conta
        MyAccountPage.titleMyAccount().should('have.text', 'My account');
        MyAccountPage.msgWelcome().should('have.text', 'Welcome to your account. Here you can manage all of your personal information and orders.');
        Header.signOut().should('be.visible');
    })
})