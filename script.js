// let weight;

// // console.log(typeof weight); // undefined

// const student = {
//   name: "Vitor",
//   age: 26,
//   stars: 4.5,
//   isSubscribed: true,
// };

// console.log(typeof student); // object

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
${student.stars} stars and ${
    student.isSubscribed ? "is" : "isn't"
  } subscribed.`;

  console.log(msg);
}

console.log();
// Importando funções de outro arquivo *.js no para WEB (adicionar type="module" na tag):
/*
import { soma } from './soma.js'
console.log(soma(1,5))
*/

// Importando funções de outro arquivo *.js no NODE:
/*
let m = require('./soma.js');
console.log(m.soma(1,5))
*/

