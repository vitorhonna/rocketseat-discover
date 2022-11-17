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
