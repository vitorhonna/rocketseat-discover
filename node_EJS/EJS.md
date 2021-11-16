# NodeJS + EJS: HTML inteligente

EJS é uma linguagem de modelagem para criação de páginas HTML usando JS.

`npm init -y`
`npm install ejs`
`npm install express`: cria um servidor e renderiza os arquivos para serem mostrados no navegador.

- Servidor: criar um arquivo _server.js_ com as rotas e a porta.

```js
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("/sobre", function (req, res) {
  res.render("pages/about");
});

const port = 8080;
app.listen(port);
console.log(`💻 Server is running on PORT ${port} 📡`);
```

- Páginas: organizar em _partials_ e _pages_.
  - **_partials_**: contém seções de páginas que podem aparecer em diversas páginas, como o head, header e footer. Cada arquivo contém o código HTML condizente com sua função.
  - **_pages_**: são arquivos HTML que representam as páginas, devem ser envolvidos com a estrutura HTML tradicional (`<!DOCTYPE html><html lang="pt-br"></html>`). Em seu interior, podem importar seções prontas do _partials_ utilizando: `<%- include(<"partialName">); %>`.

Exemplo:

```html
<!-- Partial: footer.ejs -->
<footer>
  <p>Feito com ❤ por Vitor Honna</p>
</footer>
```

```html
<!-- Page: index.ejs importando diversos partials (head, header e footer) -->
<!DOCTYPE html>
<html>
  <%- include("../partials/head"); %>

  <body>
    <%- include("../partials/header"); %>
    <main>
      <!-- Content -->
    </main>
    <%- include("../partials/footer"); %>
  </body>
</html>
```

Ao realizar uma importação, é possível passar informações que poderão ser utilizadas dentro dos partials. Essas informações são passadas como objetos:

```html
<!-- Partial: header.ejs utilizando informações recebidas da chamada (pageName) -->
<header>
  <p>Página: <%- pageName %></p>
</header>
```

```html
<!-- Page: page.ejs importando diversos partials e passando informações para o header (pageName) -->
<!DOCTYPE html>
<html>

  <%- include("../partials/head"); %>

  <body>
    <%- include("../partials/header", {pageName: "Minha Página"}); %>
    <%- include("../partials/main"); %>
    <%- include("../partials/footer"); %>
  </body>

</html>
```

Também é possível passar dados do backend (arquivo JS) para os templates EJS. A sintaxe é a mesma mostrada anteriormente para o *include* (passando um objeto):

```js
// server.js
app.get("/", function (req, res) {

  const subtitle =
    "EJS é uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript";

  res.render("pages/index", {
    subtitle: subtitle,
  });

});
```

No front, os valores são acessados envolvendo a variável com `<%= "varName" %>`: 

```js
// index.ejs
<p>Subtítulo: <%= subtitle %></p>
```

É possível fazer loops utilizando JS em meio ao HTML. 

```html
<ul>
  <% items.forEach((item) => { %>

    <li><strong><%= item.title %></strong> <%= item.message%></li>

  <% }); %>
</ul>
```