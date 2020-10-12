# happy-web 👫💗

Aplicação web desenvolvida na Next Level Week #3, ministrada pela @Rocketseat.

![Capa da aplicação](https://drive.google.com/file/d/15ibA683D3J3O43HSr0hlWgcF0HCk_S4i/view?usp=sharing)

## Objetivos 
A aplicação Happy é uma aplicação web que visa uma maior conexão entre visitantes e crianças em orfanatos, por ser uma aplicação customizada, a presente aplicação é voltada para orfanatos e pessoas nas redondezas de Aracruz - ES, Brasil. 

##

Primeiros passos:

- Instalar o Node.js (versão > 12.0)

- Instalar um gerenciador de pacotes para módulos do Node.js (ex: yarnpkg, npm...)

  

## Conceitos de back-end, front-end e API:

  

### API RESTful:

API RESTful é uma interface que fornece dados em um formato padronizado baseado em requisições HTTP.
API RESTful fica parada até que acontece uma requisição. É como um carro estacionado que só é ativado após a ignição com a chave. No caso do exemplo do login da PSN usando os dados do Facebook, a API do Facebook não fica processando os dados de todos os seus usuários continuamente, ela espera até que um usuário peça a permissão para se autenticar.
As APIs Restful aumentam a performance para situações de concorrência, ou seja, quando muitas pessoas estão pedindo a mesma coisa ao mesmo tempo. Elas utilizam verbos para definir qual é a finalidade da requisição que está sendo enviada.

  


```mermaid

graph TD

A[App Front-end - HTML, CSS, JS] -- Requisição/ orfanatos --> B[Server Back-end - Banco de dados, e-mail, autenticação]

B -- Lista de orfanatos em JSON --> A