# JavaScript - Anotações

## **O Guia Estelar de JavaScript**

## Criando objetos utilizando classes com construtores:

```js
class Student {
  constructor(name, age, stars, isSubscribed) {
    this.name = name;
    this.age = age;
    this.stars = stars;
    this.isSubscribed = isSubscribed;
  }
}

const students = [];

students[0] = new Student("Vitor", 26, 4.5, true);
students[1] = new Student("Maria", 24, 4.8, false);

console.log(students);
console.log(students[0]);
console.log(students[1]);

for (let student of students) {
  let msg = `The student ${student.name} is ${student.age}, has
${student.stars} stars and ${student.isSubscribed ? "is" : "isn't"} subscribed.`;

  console.log(msg);
}
```

## Importar funções de outros arquivos.js

### WEB

```html
<script src="script.js" type="module"></script>
```

```js
// soma.js
export function soma(num1, num2) {
  return num1 + num2;
}
```

```js
// script.js
import { soma } from "./soma.js";
console.log(soma(1, 5));
```

### NODE

```js
// soma.js
module.exports = {
  soma: function (num1, num2) {
    return num1 + num2;
  },
};
```

```js
let m = require("./soma.js");
console.log(m.soma(1, 5));
```

## Manipulando Arrays

```js
let techs = ["html", "css", "js"];
```

Adicionar um item no final do array

```js
techs.push("nodejs"); // techs = ["html", "css", "js", "nodejs"]
// retorna o novo número de elementos: 4
```

Adicionar no início

```js
techs.unshift("sql"); // techs = ["sql", "html", "css", "js", "nodejs"]
// retorna o novo número de elementos: 5
```

Remover do final

```js
techs.pop(); // techs = ["sql", "html", "css", "js"]
// retorna o elemento removido: "nodejs"
```

Remover do início

```js
techs.shift(); // techs = ["html", "css", "js"]
// retorna o elemento removido: "sql"
```

Pegar somente alguns elementos (não altera o array, só retorna)

```js
// Um argumento: pega elementos a partir do valor passado:
// techs = ["html", "css", "js"]
techs.slice(1); // retorna ["css", "js"]

// Dois argumentos: indica index de início e o número de itens:
// techs = ["html", "css", "js"]
techs.slice(0, 1); // retorna ["html"]
techs.slice(0, 2); // retorna ["html", "css"]
techs.slice(1, 2); // retorna ["css"]
techs.slice(1, 3); // retorna ["css", "js"]
```

Remover um ou mais itens em qualquer posição (altera o array)

```js
// Mesma lógica de seleção de `slice`, mas remove o q foi retornado
techs.splice(0, 1); // techs = [ 'css', 'js'
// retorna ["html"]
```

Encontrar a posição de um elemento

```js
// techs = ["css", "js"]
techs.indexOf("css"); // retorna 0
techs.indexOf("js"); // retorna 1
techs.indexOf("html"); // retorna -1 (não está na lista)
```

Remover um item específico

```js
// techs = techs = ["css", "js"]
// pegar index do item a ser removido:
let index = techs.indexOf("css"); // 0
// remover passando o index (numero de itens=1)
techs.splice(index, 1);
```

Verificar se algo está na lista

```js
// techs = ["js"]
techs.includes("js"); // true
techs.includes("qwerty"); // false
```

## Expressões e Operadores

### Operadores

- Unary: `++`, `--`, `typeof`, `delete`
- Binary: `+`, `-`, `*`, `/`, `%`
- Ternary: \<expression> `?` \<value/code if true> `:` \<value/code if false>

### Falsy e Truthy

São considerados `false`:

- `false`
- `0`
- `-0`
- `""`
- `null`
- `undefined`
- `NaN`

São considerados `true`:

- `true`
- `{}`
- `[]`
- `1`
- `1.23`
- `"0"`
- `"false"`
- `-1`
- `Infinity`
- `-Infinity`

## Condicionais e Controle de Fluxo

- `if`, `else if`, `else`
- `switch`, `case`, `break`

Lidando com erros

- `throw`: dispara um erro e para a execução da aplicação/função
- `try` `catch`: tenta uma execução e captura possíveis erros, não para a execução

```js
function sayMyName(name = "") {
  if (name === "") {
    throw new Error("Nome é obrigatório");
  }
  console.log("Name: " + name);
}

// Caso 1
sayMyName("Ana"); // Se sayMyName disparar um erro, a execução para aqui
console.log("Continuação..."); // Execução dependerá da função anterior não disparar erros

// Caso 2
try {
  sayMyName("Ana"); // Se sayMyName disparar um erro, ele será pego pelo catch
} catch (error) {
  console.log("Deu ruim, veja:"); // Executa em caso de erro
  console.log(error);
}
console.log("Continuação..."); // Executa mesmo que haja um erro em sayMyName
```

## Iterando com for..in e for..of

```js
// Objetos não-iteráveis: objetos
let person = {
  name: "Vitor",
  age: 26,
  height: 172,
};

for (let key in person) {
  console.log(key);
  console.log(person[key]);
}

// for (let property of person) {} // ERRO: "Uncaught TypeError: person is not iterable"

// Objetos iteráveis: Arrays, Strings
let people = ["Vitor", "Luis", "Daniel", "Mayk"];

for (let index in people) {
  console.log(index);
  console.log(people[index]);
}

for (let person of people) {
  console.log(person);
}
```
#

## **Estruturas de dados com JavaScript**

### ARRAYS

- Acesso por index, indexação começa no 0
- Respeita ordem de inserção dos elementos
- Aceita valores duplicados
- São dinâmicos
- Pode conter dados de diversos tipos
- Possuem métodos próprios como push(), pop(), etc...
- É iterável (pode usar for...of)

```js
const pilotos = ["Senna", "Prost", "Schumacher", "Hamilton"];

// Acessar tamanho
console.log(pilotos[0]); // Senna
console.log(pilotos.length); // 4

// Iterável
for (let piloto of pilotos) {
  console.log(piloto);
}

// Adicionar elemento
pilotos.push("Alonso");
console.log(pilotos);

// Encontrar um elemento
const senna = pilotos.find((piloto) => piloto === "Senna");
console.log(senna);

// Matrizes = arrays de arrays
const matriz_identidade = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
// 1 0 0
// 0 1 0
// 0 0 1
```

### PILHAS (Stacks)

- Linear, um elemento após o outro
- LIFO: Last In First Out
- O último a entrar na pilha é o primeiro a sair
- Métodos fundamentais:
  - push(): adicionar elemento (ao topo)
  - pop(): remover elemento (do topo)
  - peek(): obter elemento (do topo)

```js
// Modelagem
class Stack {
  constructor() {
    this.data = [];
    this.top = -1;
  }

  push(value) {
    this.top++;
    this.data[this.top] = value;
    return this.data;
  }

  pop() {
    if (this.top < 0) return undefined;
    const poppedTop = this.data[this.top];
    delete this.data[this.top];
    this.top--;
    return poppedTop;
  }

  peek() {
    return this.top >= 0 ? this.data[this.top] : undefined;
  }
}

// Utilização
let pilha = new Stack();
console.log(pilha);

pilha.push(11);
pilha.push(22);
pilha.push(33);
pilha.push(44);
pilha.push(55);
console.log(pilha.data);
console.log(pilha.top);
console.log(pilha.peek());
pilha.pop();
pilha.pop();
pilha.pop();
console.log(pilha.data);
```

### FILAS (Queues)

- Linear, um elemento após o outro
- FIFO: First In First Out
- O primeiro a entrar na fila é o primeiro a sair
- Métodos fundamentais:
  - enqueue(): adicionar elemento (ao fundo)
  - dequeue(): remover elemento (da frente)

```js
// Modelagem
class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(item) {
    this.data.push(item);
    return this.data;
  }

  dequeue() {
    const item = this.data.shift();
    return item;
  }
}

// Utilização

const fila = new Queue();

fila.enqueue(11);
fila.enqueue(22);
fila.enqueue(33);
fila.enqueue(44);
fila.enqueue(55);
console.log(fila.data);
console.log(fila.dequeue());
console.log(fila.dequeue());
console.log(fila.dequeue());
console.log(fila.data);
```

#

## **JavaScript: Pilotando com a DOM**

## Selecionando elementos

- `getElementById`
- `getElementsByClassName`
- `getElementsByTagName`
- `querySelector`
- `querySelectorAll`

```html
<h1 id="blog-title" class="title">Content Title</h1>

<p class="text">Lorem ipsum 1</p>
<p class="text">Lorem ipsum 2</p>
```

```js
const titleElement = document.getElementById("blog-title");
console.log(titleElement);
// Retorna um objeto com o elemento selecionado por ID (tipo Element)

const textElements = document.getElementsByClassName("text");
console.log(textElements);
// Retorna uma lista de objetos que possuem a classe, mesmo que exista apenas 1 (tipo HTML Collection)
console.log(textElements[0]);

const metaElements = document.getElementsByTagName("body");
console.log(metaElements);
// Retorna uma lista de objetos que possuem a tag, mesmo que exista apenas 1 (tipo HTML Collection)

// const element = document.querySelector("");
// Recebe um seletor CSS e retorna o primeiro objeto que for encontrado (tipo Element):

const titleElement2 = document.querySelector("#blog-title");
console.log(titleElement2); // Retorna a mesma coisa que titleElement

// const element = document.querySelectorAll("");
// Recebe um seletor CSS e retorna uma lista com todos os objetos que forem encontrados (tipo Node List):

const textElements2 = document.querySelectorAll(".text");
console.log(textElements2); // Retorna uma lista semelhante a textElements, porém Node List
```

Node List possui o método "forEach()"

Referências sobre a diferença entre HTML Collection e Node List:

- https://medium.com/@layne_celeste/htmlcollection-vs-nodelist-4b83e3a4fb4b

- https://dev.to/jharteaga/difference-between-htmlcollection-and-nodelist-25bp

<br>

## Manipulando conteúdos

https://github.com/vitorhonna/curso-prog-br#modificando-elementos

- `textContent`: Recebe texto simples, retorna todo o texto que a tag contém, mesmo que algo esteja sendo escondido da visualização por meio de CSS, porém sem as tags.

```js
titleElement.textContent = "New title"; // Modifica o conteúdo de texto
console.log(titleElement.textContent); // Também retorna o texto
titleElement.textContent += " - Updates Concatenados"; // Usar += para concatenar
```

- `innerText`: Recebe texto simples, retorna somente o texto visível que a tag contém.

```js
textElements[0].innerText = "<b>Lorem ipsum dolor sit amet<b>"; // Não aplica o negrito, mostra como texto puro
```

- `innerHTML`: Recebe html e interpreta, retorna o conteúdo total, incluindo as tags.

```js
textElements[1].innerHTML = "<b>Lorem ipsum dolor sit amet<b>"; // Aplica negrito ao texto
```

- `value`: Altera o atributo "value"

```html
<input value="valor1" />
```

```js
const inputElement = document.querySelector("input");
console.log(inputElement);
inputElement.value = "valor2"; // Atribui e retorna o valor
```

- Outros atributos:
  - `setAttribute(<"attr">, <"value">)`
  - `getAttribute(<"attr">)`
  - `removeAttribute(<"attr">)`

```html
<h1 id="blog-title">Content Title</h1>
```

```js
titleElement.setAttribute("class", "title");
console.log(titleElement); // Classe "title" adicionada
console.log(titleElement.getAttribute("class")); // Retorna "title"
titleElement.setAttribute("anyAttr", "value"); // Add atributo personalizado
titleElement.removeAttribute("anyAttr"); // Remove atributo
```

<br>

## Manipulando estilos e classes

- Propriedade `.style`: permite adicionar CSS inline. As propriedades CSS devem ser escritas em camelCase, não kebab-case.

```js
titleElement.style.backgroundColor = "blue"; // não background-color
titleElement.style.color = "white";
```

- Propriedade `.classList`: retorna um DOMTokenList, que é uma lista de classes e possui diversos métodos, os mais utilizados sendo:

```js
console.log(titleElement.classList); // Retorna um DOMTokenList de tamanho 1, com '0: "title"'
titleElement.classList.add("green");
console.log(titleElement.classList); // Retorna um DOMTokenList de tamanho 2, com '0: "title"' e '1: "green"'
titleElement.classList.remove("green");
console.log(titleElement.classList); // Retorna um DOMTokenList de tamanho 1, com '0: "title"'
titleElement.classList.toggle("red"); // Se existe, remove. Se não existe, adiciona.
console.log(titleElement.classList); // Retorna um DOMTokenList de tamanho 2, com '0: "title"' e '1: "red"'
```

<br>

## Navegando pelos elementos

```html
<div id="div">
  Texto puro 1
  <span id="child1">Filho 1</span>
  Texto puro 2
  <span id="child2">Filho 2</span>
  Texto puro 3
  <span id="child3">Filho 3</span>
  Texto puro 4
</div>
```

```js
const divElement = document.querySelector("#div");
console.log(divElement);

/* PAI: parentNode ou parentElement */
console.log(divElement.parentNode); // Retorna o pai (Node): body
console.log(divElement.parentElement); // Retorna o pai (Element): body

/* FILHOS: childNodes, firstChild e lastChild ou children, firstElementChild e lastElementChild */
console.log(divElement.childNodes); // Retorna uma NodeList com os filhos: tamanho 7 com texts (4) e tags span (3):
// NodeList(7) [text, span, text, span, text, span, text] (antes de colocar os ids nos spans)
// Se houver espaços/quebras de linha/textos, serão considerados "text" na lista de filhos

console.log(divElement.children); // Retorna uma HTMLCollection com os filhos
// Ignora os espaços/quebras de linha/textos puros: tamanho 3 com apenas tags span (3):
// HTMLCollection(3) [span, span, span] (antes de colocar os ids nos spans)

// Primeiro filho:
console.log(divElement.firstChild); // Retorna o primeiro filho (Node): texto " Texto puro 1 " com as quebras de linha
console.log(divElement.firstElementChild); // Retorna o primeiro filho (Element): tag span <span>Filho 1</span>

// Último filho:
console.log(divElement.lastChild); // Retorna o primeiro filho (Node): texto " Texto puro 4 " com as quebras de linha
console.log(divElement.lastElementChild); // Retorna o primeiro filho (Element): tag span <span>Filho 3</span>

/* IRMÃOS: nextSibling e previousSibling ou nextElementSibling e previousElementSibling */
const child2 = document.querySelector("#child2");
console.log(child2);

// Irmão anterior
console.log(child2.nextSibling); // (Node): texto " Texto puro 3 " com as quebras de linha
console.log(child2.nextElementSibling); // (Element): tag span <span>Filho 3</span>

// Irmão posterior
console.log(child2.previousSibling); // (Node): texto " Texto puro 2 " com as quebras de linha
console.log(child2.previousElementSibling); // (Element): tag span <span>Filho 1</span>
```

<br>

## Criando e adicionando elementos na página

```js
// Criar um novo elemento
const newDiv1 = document.createElement("div");
newDiv1.style.backgroundColor = "gray";
newDiv1.innerHTML =
  '<br><span style="background-color: yellow">Texto na nova div1</span>';

const newDiv2 = document.createElement("div");
newDiv2.style.backgroundColor = "yellow";
newDiv2.innerHTML =
  '<br><span style="background-color: gray">Texto na nova div2</span>';

const newDiv3 = document.createElement("div");
newDiv3.style.backgroundColor = "red";
newDiv3.innerHTML =
  '<br><span style="background-color: white">Texto na nova div3</span>';

const newDiv4 = document.createElement("div");
newDiv4.style.backgroundColor = "green";
newDiv4.innerHTML =
  '<br><span style="background-color: white">Texto na nova div4</span>';

const body = document.querySelector("body");

// Adicionar como primeiro filho
body.prepend(newDiv1); // Adiciona "newDiv1" como o primeiro filho de "body"

// Adicionar como último elemento
body.append(newDiv2); // Adiciona "newDiv1" como o último filho de "body"

// Adicionar antes de uma tag específica
const script = body.querySelector("script"); // Pega a tag script de dentro do body, será a referência
console.log(script);
body.insertBefore(newDiv3, script);

// Não existe "insertAfter", mas para inserir após uma tag especifica, pode-se fazer:
body.insertBefore(newDiv4, inputElement.nextSibling); // Insere após o elemento de input
```

<br>

## Eventos

Eventos podem ser adicionados "inline" na tag como um atributo. Os nomes começam com "on...", por exemplo: `onclick`, `ondblclick`, etc.
Para um evento, deve ser passada uma função que será executada.

```html
<h2 onclick="print()">Click here to print!</h2>
```

```js
function print() {
  console.log("Print!!");
}
```

Também é possível adicionar os eventos diretamente por JS:

```html
<input value="valor1" />
```

```js
const input = document.querySelector("input");

function print() {
  console.log("Print!!");
}

input.onkeypress = print; // Aqui deve ser passado apenas o nome da função, como uma variável

// É possível definir a função diretamente:
input.onfocus = function () {
  console.log("Recebendo input...");
};

// Adicionar evento com addEventListener passando o evento e a função:
input.addEventListener("blur", function () {
  console.log("Parei de receber input.");
});
// Obs: os nomes de eventos quando passados para o EventListener não têm o 'on' no início.
// Obs2: É mais recomendável passar eventos utilizando addEventListener pois isso evita que algum evento seja sobrescrito, com addEventListener é possível que com um único evento de click, por exemplo, várias funções sejam executadas.

// As funções passadas para eventos podem receber, entre outros, o parâmetro 'event', que contém diversas informações sobre o evento, como a posição do mouse em um click, uma tecla pressionada, etc:

const h2Element = document.querySelector("h2");

h2Element.addEventListener("dblclick", (event) => {
  console.log(event);
});
```

<br>

#

# Trilha Especializar

## **JS Assíncrono e Promises**

### Promises
Uma Promise pode ter 4 estados:
- `pending`: estado inicial, quando é criado
- `fulfilled`: promessa concluída com sucesso
- `rejected`: promessa rejeitada, erro
- `settled`: promessa concluída, não importa se com sucesso ou erro


Por exemplo, pedindo um uber:
```js
let driverAccepts = true;

console.log('Pedir Uber');

const promise = new Promise((resolve, reject) => {
    return driverAccepts ? resolve('Carro chegou!') : reject('Pedido Negado');
});

promise
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => console.log('Operação Finalizada'));

console.log('Aguardando...');
```

### Promises com Fetch (browser)

É possível encadear promises.

Por exemplo, para pegar os repos de um user do github:
```js
fetch('https://api.github.com/users/vitorhonna')
  .then((response) => response.json())
  .then((data) => fetch(data.repos_url))
  .then((r) => r.json())
  .then((d) => console.log(d))
  .catch((error) => console.log(error))
```

### Fetch no node

Instalar:
`npm install node-fetch`

Importar:
`import fetch from 'node-fetch'`


### Promises com Axios (node)

Instalar Axios:
`npm install axios`

Setar tipo como módulo no package.json:
`"type": "module"`

```js
import axios from 'axios';

axios
    .get('https://api.github.com/users/vitorhonna')
    .then((response) => axios.get(response.data.repos_url))
    .then((repos) => console.log(repos.data))
    .catch((error) => console.log(error));
```

## Promessas em paralelo: `Promise.all([<array de promises])`

Recebe um array de promises e retorna um array de responses:

```js
import axios from 'axios';

Promise.all([
    axios.get('https://api.github.com/users/vitorhonna'),
    axios.get('https://api.github.com/users/vitorhonna/repos'),
])
    .then((responses) => {
        console.log(responses[0].data.login);
        console.log(responses[1].data.length);
    })
    .catch((error) => console.error(error.message));
```

## Async / Await

É uma maneira de se escrever promises (syntactic sugar). 

No exemplo do uber (acima):
```js
let driverAccepts = true;

console.log('Pedir Uber');

const promise = new Promise((resolve, reject) => {
    return driverAccepts ? resolve('Carro chegou!') : reject('Pedido Negado');
});

async function start() {
    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Operação Finalizada')
    }
}

start();

console.log('Aguardando...');
```

## Async / Await com Fetch

No exemplo dos repos do github:
```js
import fetch from 'node-fetch';

async function start() {
    try {
        const response = await fetch('https://api.github.com/users/vitorhonna');
        const user = await response.json();
        const reposResponse = await fetch(user.repos_url);
        const repos = await reposResponse.json();
        console.log(repos);
    } catch (error) {
        console.log(error);
    }
}

start();
```

Funções assíncronas retornas promises, então é possível mesclar as sintaxes para fazer um código mais enxuto:

```js
import fetch from 'node-fetch';

async function start() {
    const user = await fetch('https://api.github.com/users/vitorhonna').then((r) => r.json());
    const repos = await fetch(user.repos_url).then((r) => r.json());
    console.log(repos);
}

start().catch((error) => console.log(error));
```

## Async / Await com Axios

```js
import axios from 'axios';

async function getRepos() {
    const user = await axios.get('https://api.github.com/users/vitorhonna')
    const reposResponse = await axios.get(user.data.repos_url)
    const repos = reposResponse.data
    console.log(repos)
}

getRepos().catch(error => console.error(error));
```

#

## **Trabalhando com APIs**

#

## **Fundamentos de ReactJS**

#

## **Fundamentos de Typescript**