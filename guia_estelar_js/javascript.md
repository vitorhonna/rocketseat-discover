# O Guia Estelar de JavaScript - Anotações

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
