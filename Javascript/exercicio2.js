const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Informe o valor: ', (entrada) => {
  
  step2(entrada);
});

function step2(entrada){
  for (var i = 0 ; i<=10; i ++){
      console.log(produto(entrada,i));
  }
  rl.close();
}

function produto(a, b){
  return Number(a)*Number(b) ;
}