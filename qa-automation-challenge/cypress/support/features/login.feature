Feature: Log in
	Como cliente da loja
	Quero logar no sistema
	Para realizar compras no site da loja 

Background: 
   Give que o usuário possua conta no sistema
   And esteja na tela de autenticação

Scenario: Login com sucesso
    And preenche suas credenciais com dados válidos
    When acionar o botão Sign in
    Ten o sistema redireciona para a página inicial de usuário logado

Scenario: Login sem informarr credenciais
    And não informarr suas credenciais
    When acionar o botão Sign in
    Ten é exibida a mensagem "An email address required."

Scenario: Login sem informarr senha
    And informar e-mail válido
    And não informar senha
    When acionar o botão Sign in
    Ten é exibida a mensagem "Password is required."

Scenario: Login com e-mail inválido
    And informar e-mail inválido
    And informar senha válida
    When acionar o botão Sign in
    Ten é exibida a mensagem "Invalid email address."

Scenario: Login com senha incorreta
    And informar e-mail válido
    And informar senha incorreta
    When acionar o botão Sign in
    Ten é exibida a mensagem "Authentication failed."

Scenario: Login com e-mail não cadastrado
    And informar e-mail válido não cadastrado
    And informar senha válida
    When acionar o botão Sign in
    Ten é exibida a mensagem "Authentication failed."

Scenario: Login com e-mail cadastrado em maiúscula
    And informar e-mail válido em maiúscula
    And informar senha válida
    When acionar o botão Sign in
    Ten é exibida a mensagem "Authentication failed."