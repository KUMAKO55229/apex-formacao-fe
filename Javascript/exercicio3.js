const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var itens = [];
entradaArray();



function entradaArray() {
    rl.question(`Informe o valor ${itens.length}:`, (entrada) => {

        itens.push(Number(entrada));
        if (itens.length < 10) {
            entradaArray();
        } else {
            rl.close();
            console.log(itens.sort((a, b) => { return a > b; }));

        }
    });
}