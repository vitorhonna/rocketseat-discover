# NodeJS: O motor da nave

## Módulos

- `console.log(__dirname)`: imprime o nome do diretório.
- `console.log(__filename)`: imprime o nome do arquivo.

- Para utilizar módulos já existentes: `require(<moduleName>)`. Por exemplo:

```js
const path = require("path");
// "path" é um módulo que já existe, será importado e salvo na const 'path' como um objeto. Ele já possui diversos métodos (ver doc).
const filename = path.basename(__filename); // receberá o nome do arquivo
```

- Criando módulos: 
  1. Criar arquivo *myModuleName.js* que será o módulo
  1. Exportar o conteúdo do módulo com `module.exports = <myModuleContent>`
  1. Nos outros arquivos, importar o módulo com `require("<path para myModuleName.js>")`

Exemplo:

```js
// myModule.js
module.exports = "Enviando dados do meu módulo";
```

```js
// script.js
const myModule = require("./myModule.js");
console.log(myModule); // Imprime "Enviando dados do meu módulo"
```

- Módulo `process`: contém muitas informações sobre como o programa está sendo rodado. Por exemplo: `process.argv` traz um array de argumentos, sendo o primeiro o node, o segundo o programa que está sendo executado e em seguida inputs do usuário. Por exemplo:

```js
// rodando: $ node script Vitor Honna

console.log(process.argv) 
// Imprime: 
/*
[
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\github\\rocketseat-discover\\nodeJS\\script',
  'Vitor',
  'Honna'
]
*/

const firstName = process.argv[2];
const lastName = process.argv[3];
console.log(`Hello, ${firstName} ${lastName}`); // Imprime: "Hello, Vitor Honna"
```

- Passando flags como argumentos: 