# qa-automation-challenge
Desafio de automação de controle de qualidade do SAFE Labs

# Objetivo: 
Desenvolver um projeto de automação para apreciação das técnicas aplicadas.

# Planejamento: 
1- Levantar os requisitos de softwares necessários para a instalação e configuração do framework de automação;

2- Descrever passo a passo como realizar esta configuração;

3- Identificar os requisitos e critérios de aceite;

4- Planejar os cenários de testes com base nos requisitos e escrevê-los em Gherkin;

5- Criar scripts automatizados no Cypress.



# Levantar os requisitos de softwares necessários para a instalação e configuração do framework de automação

Pré-requisitos: ter o VS Code e Git instalados

1- Inicialmente será necessário instalar o NODE JS que é a plataforma onde o Cypress irá rodar.
Obter a versão LTS disponível no endereço https://nodejs.org. Executar a instalação default do arquivo com extensão .msi
O gerenciador de pacotes NPM (node package manager) é instalado junto com o NODE.

2- Criar uma pasta para o projeto no seu disco local;

3- Utilizar o terminal do VS Code para iniciar um projeto com a estrutura do NODE
- Acessar o diretório onde a pasta do projeto foi criada e digitar o comando: "npm init"
Serão exibidas as seguintes perguntas na tela:
- package name: é o nome do projeto
- versão: (1.0.0)  será a versão
- desciption: Desafio de automação de controle de qualidade do SAFE Labs
- entry point: (index.js)  //mantém a sugestão
- test command:  "npx cypress open"  //linha de comando criada para abrir o cypress na execução dos testes //significa que ao executar "npm run teste" o node vai rodar (run) o comando "test" que por sua vez executa o comando "npx cypress open" para abrir o Cypress. //Npx é um comando para rodar uma bibliotea executável NODE
- git repository:    não necessário
- keywords:    não necessário
- author: Vinicius Carneiro Nascimento
- licence: MIT   //usar este padrão

confirma: yes
Um arquivo "package.json" é criado com estas informações

4- Instalando o CYPRESS
- Através do terminal executar o comando: npm install cypress --save-dev
No arquivo package.json, na seção dependencias, conferir se o cypress foi adicionado. 

5- Antes de enviar para o repositório remoto, criar o arquivo ".gitignore" e incluir a pasta "NODE_MODULES" para que não seja adicionada nos commits.

6- Necessário instalar a biblioteca Faker para gerar dados dinâmicos. Usar o comando no terminal:
npm install faker@5.5.3 --save-dev


