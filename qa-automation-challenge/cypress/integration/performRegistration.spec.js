import HomePage from "../support/pageObjects/HomePage";
import AuthenticationPage from "../support/pageObjects/AuthenticationPage";
import CreateAccountPage from "../support/pageObjects/CreateAccountPage";

describe('Perform Registration feature', ()=>{

    const url = Cypress.config("baseUrl");

    before('Background: Give que usuário esteja na tela de autenticação', ()=>{
        HomePage.go(url);
        HomePage.btnLogin().click();
        AuthenticationPage.pageHeading().should('have.text', 'Authentication');
    })

    it('Scenario: Tentar criar conta sem informar e-mail', ()=>{
        // When clicar no botão criar uma conta sem informar o e-mail
        AuthenticationPage.btnCreareAccount().click();

        // Ten o sistema exibe mensagem "Invalid email address." 
        AuthenticationPage.msgError().should('have.text', 'Invalid email address.');
    })

    it('Scenario: Tentar criar conta com e-mail inválido', ()=>{
        // When informar e-mail inválido
        AuthenticationPage.clearEmail();
        AuthenticationPage.email('teste#teste.com');

        // And clicar no botão criar uma conta
        AuthenticationPage.btnCreareAccount().click();

        // Ten o sistema exibe mensagem "Invalid email address." 
        AuthenticationPage.msgError().should('have.text', 'Invalid email address.');
    })

    it('Scenario: Tentar criar conta com e-mail já cadastrado', ()=>{
      
        // When informar e-mail já cadastrado
        AuthenticationPage.clearEmail();
        AuthenticationPage.email('teste@teste.com');

        // And clicar no botão criar uma conta
        AuthenticationPage.btnCreareAccount().click();

        // Ten o sistema exibe mensagem "An account using this email address has already been registered. Please enter a valid password or request a new one. "
        AuthenticationPage.msgError().should('have.text', 'An account using this email address has already been registered. Please enter a valid password or request a new one. ');
    })

    it('Scenario: Acessar formulário de cadastro', ()=>{
      
        // When informar e-mail válido ainda não cadastrado
        AuthenticationPage.clearEmail();
        AuthenticationPage.email('teste05052022@gmail.com');

        // And clicar no botão criar uma conta
        AuthenticationPage.btnCreareAccount().click();

        // Ten o sistema redireciona para a tela de cadastro da conta
        CreateAccountPage.titleCreateAccount().should('have.text', 'Create an account');

        // And o campo e-mail preenchido com o e-mail informado
        CreateAccountPage.email().should('have.value', 'teste05052022@gmail.com');
    })

    /*  
 Scenario: Criar conta com sucesso
    Give que acessei o formulário de cadastro
    When informar os campos obrigatórios
    And clicar no botão registrar
    Ten o sistema realiza o cadastro com sucesso
    And redireciona para a página minha conta*/


})