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
