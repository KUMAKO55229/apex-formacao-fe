const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let C = 0;
let F = 0 ;
rl.question('Informe uma temperatura em Fahrenheit: ', (TemperaturaF) => {
    F = TemperaturaF;
    C = ( ( F - 32 ) * 5 ) / 9;
    console.log( "A temperatura equivalente em graus Celsius é" + " "+ C);

    
  });