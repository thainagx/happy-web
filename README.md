# Happy 😀👫❤️

Aplicação web desenvolvida na Next Level Week #3, ministrada pela [@Rocketseat](https://github.com/rocketseat).
<img src="https://github.com/thaina-gomes/happy-web/blob/main/img-readme/capa-aplication.PNG" alt="Happy" width="500px">

## Objetivo 📑

Happy é uma aplicação web que visa uma maior conexão entre visitantes e crianças em orfanatos, por ser uma aplicação customizada, a presente aplicação é voltada para orfanatos e pessoas nas redondezas de Aracruz - ES, Brasil.

## Imagens da aplicação 📸

<img src="https://github.com/thaina-gomes/happy-web/blob/main/img-readme/landing-page.PNG" alt="Landing Page" width="430px"> <img src="https://github.com/thaina-gomes/happy-web/blob/main/img-readme/orphanages-map.PNG" alt="Orphanages Map Image" width="430px">

## Conceitos de back-end, front-end e API ⚙️

### ReactJS:
O *React* é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites.

### API RESTful:

API RESTful é uma interface que fornece dados em um formato padronizado baseado em requisições HTTP.
As APIs Restful aumentam a performance para situações de concorrência, ou seja, quando muitas pessoas estão pedindo a mesma coisa ao mesmo tempo. Elas utilizam verbos para definir qual é a finalidade da requisição que está sendo enviada.

<img src="https://phppot.com/wp-content/uploads/2015/10/restful-web-services-api-architecture.jpg" alt="Diagrama - Happy" width="450px">

**Diagrama de como será a comunicação entre o servidor, o front-end e o browser na aplicação**

### SPA (Single Page Applications):
A sigla *SPA* vem de Single Page Applications. De maneira geral, em uma aplicação SPA, o carregamento dos recursos ocorre apenas uma única vez: na primeira vez em que o usuário acessa a aplicação. Nesse primeiro acesso, todo o conteúdo HTML, CSS e JavaScript já é transferido para o cliente. A partir deste momento, quando o usuário transitar pelas páginas da aplicação, não será necessário mais fazer requisições para o servidor para a carga dessas novas páginas.

### Typescript:
TypeScript é um superset do ECMAScript 6 que, por sua vez, é um superset do ECMAScript 5, que usamos mais frequentemente como base para nosso clássico JavaScript. 
O que o TypeScript traz de diferente do JavaScript são muitas coisas. Realmente muitas coisas. Tanto que seria impossível entrar em detalhes sobre todas elas aqui. O que vou trazer neste artigo é apenas as características mais básicas e como configurar o ambiente para que seu código funcione sem problemas.

## Desenvolvimento da aplicação 💻
Primeiros passos:
- Instalar o Node.js (versão > 12.0)
- Instalar um gerenciador de pacotes para módulos do Node.js (ex: yarnpkg, npm...)
- Utilizando o npx, rodar o comando:
> npx create-react-app web --template typescript
- Utilizando o yarn, rodar o comando:
> yarn create react-app web --template typescript

#### Pacotes utilizados 📦
- **react-leaflet**: utilizado para adicionar o mapa de orfanatos na aplicação
> npm install leaflet react-leaflet
- **react-router-dom**: utilizada para o roteamento da aplicação
> npm install react-router-dom
- **react-icons**: utilizada para adicionar ícones nos botões da aplicação 
> npm install react-icons
- **express**: auxilia nas requisições e respostas da aplicação
> npm install express
- **ts-node-dev**: utilizada para auxiliar na execução do projeto que faz uso de typescript e node
> npm install ts-node-dev
- **typeorm:** TypeORM é um framework de ORM para projetos em Typescript. ORM é a sigla para mapeamento objeto relacional. Através dessa técnica, criamos uma abstração entre as classes do projeto e as tabelas do banco de dados. 
- **SQlite:**  é uma biblioteca em linguagem C que implementa um banco de dados SQL embutido.
>  npm install typeorm sqlite3
- **multer**: biblioteca utilizada para lidar com upload de imagens.
> npm install multer
- **express-async-errors**:  biblioteca utilizada para tratamento de erros no servidor.
> npm install express-async-errors
- **yup**:  biblioteca utilizada para realizar a validação dos dados.
> npm install yup
- **cors**:  biblioteca utilizada para habilitar o acesso de diferentes domínios na nossa aplicação.
> npm install cors
#### Aplicações 📥
- Insomnia (64bits) ou Postman (32bits): É um API desktop para Rest e GraphQL, onde podemos testar nossas requisições.
- Beekeeper Studio: O Beekeeper Studio é um editor de SQL de plataforma cruzada e aplicativo de gerenciamento de banco de dados de código aberto que é poderoso e fácil de usar.
