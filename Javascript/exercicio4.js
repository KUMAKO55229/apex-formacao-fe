const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let valor1;
let valor2;
var op = 0;
rl.question(`Informe o valor 1:`, (entrada) => {
    valor1 = entrada;
    rl.question(`Informe o valor 2:`, (entrada) => {
        valor2 = entrada;


        
    rl.question('Informe uma operação: \n  A- Soma de 2 números. \n B- Diferença entre 2 números (maior pelo menor).\n C- Produto entre 2 números.\n D- Divisão entre 2 números (o denominador não pode ser zero). ', (op) => {

        step2(op);
    });


    });
});



function step2(op) {
    var resultado;
    switch (op.toUpperCase()) {

        case "A": console.log(soma(valor1, valor2));

            break;
        case "B": console.log(Diferença(valor1, valor2));
            break;
        case "C": console.log(Produto(valor1, valor2));
            break;
        case "D": console.log(Divisão(valor1, valor2));
            break;
    }
    rl.close();
}
function soma(a, b) {
    return Number(a) + Number(b);

}
function Diferença(a, b) {

    return Number(a) - Number(b);

}
function Produto(a, b) {

    return Number(a) * Number(b);

}

function Divisão(a, b) {
    if (number(b) != 0) {
        Number(a) / Number(b);
    } else {
        console.log("o denominador não pode ser zero");
    }
}