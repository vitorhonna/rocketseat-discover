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
  1. Criar arquivo _myModuleName.js_ que será o módulo
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

console.log(process.argv);
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

- **Passando flags como argumentos**: utilizar "--flagName" antes do argumento e, no código, adicionar uma função que faça a captura do argumento a partir da flag. Desta forma é possível receber dados sem que uma ordem específica precise ser seguida, já que a flag sempre virá antes do argumento e indicará seu conteúdo. Ex: `--name "Vitor"`

## NPM - Node Package Manager

- **Iniciando um pacote com npm:** `npm init`, em seguida seguir as instruções. Para responder sim automaticamente para todas as perguntas usar `npm init -y`. Cria um arquivo _package.json_.

- **Instalar módulos do repositório npm:** `npm install <module-name>` ou `npm i <module-name>`. Ex: `npm install cfonts`. Quando um módulo é instalado, ele é automaticamente adicionado às dependências do projeto em _package.json_. É possível instalar diversos módulos de uma única vez passando seus nomes separados por espaço: `npm i <module-name-1> <module-name-2> <module-name-3>...`.

- **Dependências de desenvolvimento:** Também é possível instalar um módulo como dependência de desenvolvimento de um projeto usando a flag _"-D"_: `npm i <module-name> -D`.

- **Mapeamento dos módulos:** fica guardado no arquivo _package-lock.json_. Não deve ser modificado manualmente.

- **Atualizar o mapeamento:** `npm update`. Atualiza o projeto para seguir a versão mais nova de _package.json_, por exemplo, caso algum pacote tenha sido removido ou adicionado manualmente no arquivo _package.json_.

- **Dependências:** para instalar as dependências de um projeto (listadas no _package.json_): `npm install`. Ao instalar um módulo como dependência, ele também contém um _package.json_ que pode conter outras dependências, que por sua vez também podem ter dependências. Ao fazer a instalação, todas as dependências são instaladas recursivamente e ficam salvas no diretório _node_modules_, esse diretório não deve ser versionado com git, para isso, adicionar _node_modules/_ no arquivo _.gitignore_.

- **Criar scripts que vão rodar junto com o npm:** na parte _"scripts"_ do arquivo _package_json_ é possível criar scripts que poderão ser executados a partir do npm. A sintaxe é mesma de um json: `"<scriptName>": "<commands>"`. Para rodar o script, utilizar: `npm run <scriptName>`. Por exemplo:

```js
"scripts": {
    "helloWorld": "node script.js --greeting 'Hello' --name 'World'"
  }
```

```bash
npm run helloWorld # Imprime 'Hello', 'World'
```

As palavras _start_ e _test_ são especiais. Scripts com esses nomes podem ser rodados diretamente com: `npm start` / `npm test`.

- **Dependências globais:** Usar a flag _"-g"_, por exemplo: `npm i cfonts -g`. São pacotes instalados no computador e não necessariamente ligados a um projeto. Sua instalação não adiciona o pacote às dependências de projeto listadas em _package.json_. Dependências globais são instaladas no diretório dados retornado por `npm root -g` e não na pasta do projeto. Para desinstalar uma dependência global, utilizar `npm uninstall <module-name> -g`. Por exemplo: `npm uninstall cfonts -g`.

- **Versão dos pacotes:** Quando um pacote é instalado, seu nome e versão são listados na parte _"dependencies"_ de _package.json_. A versão contém três números separados por ponto: a major, minor e o patch - `major.minor.patch`. Por exemplo: `"cfonts": "^2.10.0"`, a versão major é a 2, minor 10 e patch 0. Mudanças na major podem quebrar projetos, na minor e patch geralmente não. O símbolo que precede a numeração e versão indica como o npm lida com atualizações de versão do pacote:
  - `^major.minor.patch`: `^` permite a atualização da **minor** e do **patch**.
  - `~major.minor.patch`: `~` permite somente a atualização do **patch**.
  - `major.minor.patch`: quando não há símbolo, a versão é fixa e **nenhuma atualização** é permitida.
  - `*`: permite a atualização de **tudo** (major, minor e patch).

Para instalar uma versão específica de um pacote, passar a versão com um _"@"_ após o nome do pacote: `npm i <module-name>@<major.minor.patch>`. Por exemplo: `npm i moment@1.5.1`.

Para listar versões desatualizadas de pacotes: `npm outdated`. Mostra uma lista de pacotes com a versão atual, a versão desejada e a mais recente.

Para atualizar a versão dos pacotes: `npm upgrade` (segue as regras descritas previamente). Contudo, mesmo instalando uma nova versão, a versão anotada em _package.json_ não é modificada. A mudança fica mapeada em _package-lock.json_. Rodar novamente `npm i <module-name>` atualiza a versão anotada em _package.json_ mas **não** instala a versão mais recente.

Para se certificar de estar instalando a versão mais recente do pacote utilizar _"@latest"_ após o nome do pacote: : `npm i <module-name>@latest`. Por exemplo: `npm i moment@latest`. A versão anotada em _package.json_ também é atualizada.

- **Desinstalar um pacote:** `npm uninstall <module-name>`. Também remove suas sub dependências que haviam sido instaladas automaticamente.

## BestMe App: Interagindo com o aplicativo

- `process.stdout.write(<"message">)`: Imprime para o terminal, semelhante a `console.log()`, porém não aceita qualquer tipo de argumento, apenas strings.

- `process.stdin.on(<eventName>, <function>)`: Fica a espera de um evento, parece um EventListener. Por exemplo, para entrada de dados: `process.stdin.on("data", (data) => process.stdout.write(data.toString().trim()+"\n"))` recebe uma entrada de dados, imprime de volta e fica a espera de outras entradas de dados.

- `process.exit()`: Para a execução do programa.

- `process.on(<eventName>, <function>)`: O processo também pode ficar a espera de um evento, para chamar uma função callback quando algo ocorrer. Por exemplo, para executar uma função quando `process.exit()` for chamado: `process.on("exit", () => {console.log("Tchau")})` (imprime "Tchau" logo antes de finalizar a execução).

## Timer

- `setTimeout(<callbackFunction>, <time>)`: recebe uma função e um tempo em _ms_, executa a função após esse tempo. O _timeout_ pode ser nomeado atribuindo-o a uma variável. Ex:

```js
let timer3s = setTimeout(() => {
  console.log("3 seconds have passed!");
}, 3000);
```

- `clearTimeout(<timeoutName>)`: recebe o nome de um _timeout_ e cancela a execução.

```js
clearTimeout(timer3s);
```

- `setInterval(<callbackFunction>, <time>)`: recebe uma função e um tempo em _ms_, executa a função repetidamente com esse intervalo de tempo. Assim como o _timeout_, o _interval_ pode ser nomeado atribuindo-o a uma variável.

- `clearInterval(<intervalName>)`: recebe o nome de um _interval_ e cancela a execução.

## Event Module

- Importar o EventEmitter: `const { EventEmitter } = require("events");`.
- Criar um novo handler de eventos: `const <"eventHandlerName"> = new EventEmitter();`. Ex: `const eventHandler = new EventEmitter();`.
- Emitir eventos: `<"eventHandlerName">.emit(<"eventName">)`. Ex: `eventHandler.emit("saySomething");`.
- Ouvir eventos:`<"eventHandlerName">.on(<"eventName">, <callbackFunction>)`. Ex: `eventHandler.on("saySomething", () => {console.log("I can hear you!")});`.

Também é possível passar argumentos:

```js
const { EventEmitter } = require("events");

const eventHandler = new EventEmitter();

eventHandler.on("saySomething", (name) => {
  console.log(`I can hear you, ${name}!`);
});

eventHandler.emit("saySomething", "Vitor");
eventHandler.emit("saySomething", "Daniel");
eventHandler.emit("saySomething", "Heimer");

// Imprime:
// I can hear you, Vitor!
// I can hear you, Daniel!
// I can hear you, Heimer!
```

- Para ouvir eventos somente uma vez, utilizar `<"eventHandlerName">.once(<"eventName">, <callbackFunction>)`. Ex: `eventHandler.once("saySomething", () => {console.log("I heard you!")});`. A função só é executada na primeira vez que é ouvida!

- Herdando do EventEmitter:

```js
// const { inherits } = require("util"); // ** Deprecado **
const { EventEmitter } = require("events");

// function Character(name) {
//   this.name = name;
// }

// inherits(Character, EventEmitter);

// ** Fazer assim: **
class Character extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

const chapolin = new Character("Chapolin");

chapolin.on("help", () => {
  console.log(`Eu! O ${chapolin.name} Colorado!`);
});

console.log("Oh! E agora, quem poderá me defender?");

chapolin.emit("help");
```
Neste exemplo, *EventEmitter* é um *superConstrutor* e *Character* é um *construtor*. Assim, os objetos instanciados de *Character* também herdarão as propriedades e métodos de *EventEmitter*, como `.emit()` e `.on()`.