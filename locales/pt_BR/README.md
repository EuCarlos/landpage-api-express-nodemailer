# LandPage React
_Para a versão em português deste README, [clique aqui](/locales/pt_BR/README.md)._
## Descrição do projeto
LandPage criado com react e typescript inspirado na página de [Inbound Emotion](https://www.inboundemotion.com/es/diccionario-inbound-marketing)

<p>
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/EuCarlos/landpage-api-express-nodemailer?style=flat-square">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/EuCarlos/landpage-api-express-nodemailer?color=orange&style=flat-square">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/EuCarlos/landpage-api-express-nodemailer?color=yellow&style=flat-square">
    <img alt="GitHub" src="https://img.shields.io/github/license/EuCarlos/landpage-api-express-nodemailer?style=flat-square">
    <img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/eucarlos/landpage-api-express-nodemailer?style=flat-square">
</p>

___
### Instalação

Clone o repositório:

    git clone https://github.com/EuCarlos/landpage-api-express-nodemailer.git && cd landpage-api-express-nodemailer

Instale as dependências usando o Yarn:

    yarn install // or -> npm install 

### Variaveis de Ambiente
criar um arquivo `.env` igual ao arquivo `.env.example` e preencha com suas credenciais do github

### Rodar o projeto
#### 1. Inicie o docker

    docker-compose up -d

#### 2. Rode as _migrations_

    yarn prisma migrate dev

#### 3. Inicie o servidor Node:

    yarn dev

___
## O Projeto

### Objetivo geral: 
Desenvolva uma API de Landpage e integre com Front-end, teoria e prática do conhecimento adquirido à realidade.

### Requisitos funcionais
* [**RF001**] - O sistema deve possuir um formulário que receba os seguintes campos: Nome, Email, Empresa e Site.
* [**RF002**] - O sistema deverá mostrar uma mensagem após o envio do formulário.
* [**RF003**] - O sistema deverá enviar um e-mail para notificação sobre o conteúdo esperado.
* [**RF004**] - O sistema deve contar o número de pessoas que preencheram o formulário.
* [**RF005**] - O sistema deve mostrar (em algum lugar na página de destino) comentários sobre o conteúdo relacionado.

### Requisitos não funcionais
* [**RNF001**] - O Sistema deve ser responsivo (adaptável para desktop, tablets e celulares).
* [**RNF002**] - O sistema deve ser desenvolvido utilizando React e TypeScript.
* [**RNF003**] - O sistema deve estar conectado a uma API de envio de mensagens (criada por mim).
* [**RNF004**] - O sistema deve ter uma boa interface para interação homem-máquina.
* [**RNF005**] - O sistema deve receber variáveis de ambiente.


### Protótipo do projeto

O projeto é uma landing page onde é apresentado um texto (em português) com informações gerais sobre o e-book, com um formulário no lado direito da tela. Na tela do site, também são mostrados comentários de pessoas que receberam seu e-book por e-mail e relatam a experiência. Na parte inferior da página há botões para acessar Github, LinkedIn, Dribbble, Instagram e o site pessoal do autor da página.

Front-End: [@EuCarlos/landpage-react](https://github.com/EuCarlos/landpage-react)

## Estrutura de diretórios
```
.
├── prisma
│    ├── migrations
│    │    ├── ..._create_subscriber
│    │    │         └── migrations.sql
│    │    └── ..._create_message
│    │              └── migrations.sql
│    └── dev.db
├── src
│    ├── mail
│    │    ├── nodemail.ts
│    │    └── template.ts
│    ├── prisma
│    │    └── index.ts
│    ├── routes
│    │    └── routes.ts
│    └── server.ts
├── tests
│    └── http_test
│         └── routes.http
├── .gitignore
├── .env
├── docker-compose.yml
├── README.md
├── tsconfig.json
├── LICENSE
└── yarn.lock
```

____
<p align="center">
Criado com 💜 por <a href="https://github.com/eucarlos/">Carlos Alves</a>
</p>