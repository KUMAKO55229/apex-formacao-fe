const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Informe o dano :', (Dano) => {
    Dano =  Dano;
    rl.question('Informe a saude :', (Saude) => {
        Saude = Saude;
        console.log(acao(Dano,Saude));
       
    });
});

function acao(a, b) {
    if (a > b) {
        return true;
    } else {
        return false;
    }
}
