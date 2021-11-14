// console.log("Hello, NodeJS");

const path = require("path");
const filename = path.basename(__filename);
// console.log("filename = ", filename);

const myModule = require("./myModule.js");
// console.log(myModule);

const firstName = process.argv[2];
const lastName = process.argv[3];
// console.log(`Hello, ${firstName} ${lastName}`);

// console.log(process.argv)

// Desafio:

const getFlagValue = require("./getFlagValue.js");
const name = getFlagValue("--name");
const greeting = getFlagValue("--greeting");

console.log(`${greeting}, ${name}`);
