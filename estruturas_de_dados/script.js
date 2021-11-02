// Estruturas de dados com JavaScript

/**
 * ARRAYS
 *
 * Acesso por index, indexação começa no 0
 * Respeita ordem de inserção dos elementos
 * Aceita valores duplicados
 * São dinâmicos
 * Pode conter dados de diversos tipos
 * Possuem métodos próprios como push(), pop(), etc...
 * É iterável (pode usar for...of)
 *
 */

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

/**
 * PILHAS (Stacks)
 *
 * Linear, um elemento após o outro
 * LIFO: Last In First Out
 * O último a entrar na pilha é o primeiro a sair
 *
 * Métodos fundamentais:
 *    push(): adicionar elemento (ao topo)
 *    pop(): remover elemento (do topo)
 *    peek(): obter elemento (do topo)
 *
 */

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

/**
 * FILAS (Queue)
 *
 * Linear, um elemento após o outro
 * FIFO: First In First Out
 * O primeiro a entrar na fila é o primeiro a sair
 *
 * Métodos fundamentais:
 *    enqueue(): adicionar elemento (ao fundo)
 *    dequeue(): remover elemento (da frente)
 *
 */

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
