import Header from "../support/pageObjects/Header";
import HomePage from "../support/pageObjects/HomePage";
import AuthenticationPage from "../support/pageObjects/AuthenticationPage";
import MyAccountPage from "../support/pageObjects/MyAccountPage";

describe('Login feature', ()=>{

    const url = Cypress.config("baseUrl");
    const emailValid = 'teste05052022@gmail.com';

    before('Background: Give que o usuário possua conta no sistema And esteja na tela de autenticação', ()=>{
        HomePage.go(url);
        Header.btnLogin().click();
        AuthenticationPage.pageHeading().should('have.text', 'Authentication');
    })

    it('Scenario: Login sem informarr credenciais', ()=>{
        // And não informarr suas credenciais
        // When acionar o botão Sign in
        AuthenticationPage.btnSubmitLogin().click();

        // Ten é exibida a mensagem "An email address required."
        AuthenticationPage.msgErrorLogin().should('have.text', 'An email address required.');
    })

    it('Scenario: Login sem informar senha', ()=>{
        // And informar e-mail válido
        AuthenticationPage.clearEmailLogin();
        AuthenticationPage.emailLogin(emailValid);
        // And não informar senha

        // When acionar o botão Sign in
        AuthenticationPage.btnSubmitLogin().click();

        // Ten é exibida a mensagem "Password is required."
        AuthenticationPage.msgErrorLogin().should('have.text', 'Password is required.');
    })

    it('Scenario: Login com e-mail inválido', ()=>{
        // And informar e-mail inválido
        AuthenticationPage.clearEmailLogin();
        AuthenticationPage.emailLogin('teste05052022#gmail.com');
        
        // And informar senha válida
        AuthenticationPage.clearPassword();
        AuthenticationPage.password('12345');

        // When acionar o botão Sign in
        AuthenticationPage.btnSubmitLogin().click();

        // Ten é exibida a mensagem "Password is required."
        AuthenticationPage.msgErrorLogin().should('have.text', 'Invalid email address.');
    })

    it('Scenario: Login com senha incorreta', ()=>{
        // And informar e-mail válido
        AuthenticationPage.clearEmailLogin();
        AuthenticationPage.emailLogin(emailValid);
        
        // And informar senha incorreta
        AuthenticationPage.clearPassword();
        AuthenticationPage.password('ABCDE');

        // When acionar o botão Sign in
        AuthenticationPage.btnSubmitLogin().click();

        // Ten é exibida a mensagem "Authentication failed."
        AuthenticationPage.msgErrorLogin().should('have.text', 'Authentication failed.');
    })

    it('Scenario: Login com e-mail não cadastrado', ()=>{
        // And informar e-mail válido não cadastrado
        AuthenticationPage.clearEmailLogin();
        AuthenticationPage.emailLogin('teste99052022@gmail.com');
        
        // And informar senha válida
        AuthenticationPage.clearPassword();
        AuthenticationPage.password('12345');

        // When acionar o botão Sign in
        AuthenticationPage.btnSubmitLogin().click();

        // Ten é exibida a mensagem "Authentication failed."
        AuthenticationPage.msgErrorLogin().should('have.text', 'Authentication failed.');
    })

    it('Scenario: Login com sucesso', ()=>{
        // And preenche suas credenciais com dados válidos
        AuthenticationPage.clearEmailLogin();
        AuthenticationPage.emailLogin(emailValid);
        AuthenticationPage.clearPassword();
        AuthenticationPage.password('12345');

        // When acionar o botão Sign in
        AuthenticationPage.btnSubmitLogin().click();

        // Ten o sistema redireciona para a página inicial de usuário logado
        MyAccountPage.titleMyAccount().should('have.text', 'My account');
        MyAccountPage.msgWelcome().should('have.text', 'Welcome to your account. Here you can manage all of your personal information and orders.');
    })
})