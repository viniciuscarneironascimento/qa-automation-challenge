Feature: Perform Registration
	Como usuário do site
	Quero realizar o cadastro
	Para ter uma conta no site da loja 

Background: 
   Give que usuário esteja na tela de autenticação

Scenario: Tentar criar conta sem informar e-mail
	When clicar no botão criar uma conta sem informar o e-mail
	Ten o sistema exibe mensagem "Invalid email address." 

Scenario: Tentar criar conta com e-mail inválido
    When informar e-mail inválido
    And clicar no botão criar uma conta
    Ten o sistema exibe mensagem "Invalid email address." 

Scenario: Tentar criar conta com e-mail já cadastrado
    When informar e-mail já cadastrado
    And clicar no botão criar uma conta
    Ten o sistema exibe mensagem "An account using this email address has already been registered. Please enter a valid password or request a new one. "

Scenario: Acessar formulário de cadastro
    When informar e-mail válido ainda não cadastrado
    And clicar no botão criar uma conta
    Ten o sistema redireciona para a tela de cadastro da conta
    And o campo e-mail preenchido com o e-mail informado

Scenario: Validar campos obrigatórios do formulário
    Give que acessei o formulário de cadastro
    When clicar no botão registrar sem informar os campos obrigatórios
    en o sistema exibe mensagem "There are 8 errors"

Scenario: Criar conta com sucesso
    Give que acessei o formulário de cadastro
    When informar os campos obrigatórios
    And clicar no botão registrar
    Ten o sistema realiza o cadastro com sucesso
    And redireciona para a página minha conta