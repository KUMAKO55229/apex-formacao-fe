const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let vetor = [];
for (var i = 0; i < 5; i++) {
    vetor.push(string("chave"));

}

rl.question('Informe o valor: ', (entrada) => {

    Vericifacao(entrada);
});

function Vericifacao() {
    for (var i = 0; i < 5; i++) {
        vetor.push(string("chave"));
    
    }for (var i = 0; i < 5; i++) {
     if (vetor[i]=="chave"){
         return console.log(true);
        
     }else{
         return console.log(false);s
     }

}
 
}
