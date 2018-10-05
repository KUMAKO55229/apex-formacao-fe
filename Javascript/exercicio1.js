const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let valor1;
let valor2;


rl.question('Informe o primeiro valor: ', (entrada) => {
  valor1 = entrada;
  step2();
});

function step2(){
  rl.question('Informe o segundo valor: ', (entrada2) => {
    valor2 = entrada2;
    let total = soma(valor1, valor2);
    console.log(total >=100 ? total : 'Valor menor que cem');

    rl.close();
  });
}

function soma(a, b){
  return Number(a) + Number(b);
}