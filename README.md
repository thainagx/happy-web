# happy-web 👫💗

Aplicação web desenvolvida na Next Level Week #3, ministrada pela [@Rocketseat](https://github.com/rocketseat).

![Capa da aplicação](https://github.com/thaina-gomes/happy-web/blob/main/img-readme/capa-aplication.PNG)

## Objetivo

A aplicação Happy é uma aplicação web que visa uma maior conexão entre visitantes e crianças em orfanatos, por ser uma aplicação customizada, a presente aplicação é voltada para orfanatos e pessoas nas redondezas de Aracruz - ES, Brasil.

## Imagens da aplicação

![Landing Page Image](https://github.com/thaina-gomes/happy-web/blob/main/img-readme/landing-page.PNG)

![Orphanages Map Image](https://github.com/thaina-gomes/happy-web/blob/main/img-readme/orphanages-map.PNG)

## Conceitos de back-end, front-end e API:

### ReactJS:
O *React* é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites.

### API RESTful:

API RESTful é uma interface que fornece dados em um formato padronizado baseado em requisições HTTP.
As APIs Restful aumentam a performance para situações de concorrência, ou seja, quando muitas pessoas estão pedindo a mesma coisa ao mesmo tempo. Elas utilizam verbos para definir qual é a finalidade da requisição que está sendo enviada.
 
 <br>

mermaid
graph TD
A[App Front-end - HTML, CSS, JS] -- Requisição/ orfanatos --> B[Server Back-end - Banco de dados, e-mail, autenticação]
B -- Lista de orfanatos em JSON --> A
C[Browser - Cliente]

*Diagrama de como será a comunicação entre o servidor, o front-end e o browser na aplicação*

### SPA (Single Page Applications):
A sigla *SPA* vem de Single Page Applications. De maneira geral, em uma aplicação SPA, o carregamento dos recursos ocorre apenas uma única vez: na primeira vez em que o usuário acessa a aplicação. Nesse primeiro acesso, todo o conteúdo HTML, CSS e JavaScript já é transferido para o cliente. A partir deste momento, quando o usuário transitar pelas páginas da aplicação, não será necessário mais fazer requisições para o servidor para a carga dessas novas páginas.

### Typescript:
TypeScript é um superset do ECMAScript 6 que, por sua vez, é um superset do ECMAScript 5, que usamos mais frequentemente como base para nosso clássico JavaScript. 
O que o TypeScript traz de diferente do JavaScript são muitas coisas. Realmente muitas coisas. Tanto que seria impossível entrar em detalhes sobre todas elas aqui. O que vou trazer neste artigo é apenas as características mais básicas e como configurar o ambiente para que seu código funcione sem problemas.

## Desenvolvimento da aplicação
Primeiros passos:
- Instalar o Node.js (versão > 12.0)
- Instalar um gerenciador de pacotes para módulos do Node.js (ex: yarnpkg, npm...)
- Utilizando o npx, rodar o comando:
> npx create-react-app web --template typescript
- Utilizando o yarn, rodar o comando:
> yarn create react-app web --template typescript
