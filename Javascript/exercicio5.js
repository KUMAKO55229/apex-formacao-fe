const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let titulos = [];
let Votos = [];

let cont1 = 0;
let cont2 = 0;
let result = 0;

comp();
function comp() {
    rl.question('Informe seu titulo :', (titulo) => {
        if (titulo >= 0) {
            titulos.push(Number(titulo));
            rl.question('Informe seu voto: ', (Voto) => {
                if ((Voto == 1) || (Voto == 2)) {

                    Votos.push(Number(Voto));
                    if (Voto == 1) {
                        cont1++;
                    } else {
                        cont2++;
                    }


                } else {
                    console.log("valor inválido")
                    rl.close();
                }
                comp();

            });
        } else {
            rl.close();

            if (cont1 > cont2) {
                console.log("coandidato 1 ganhou com" + cont1 + "votos");

            } else {
                console.log("coandidato 2 ganhou com" + cont2 + "votos");
            }
        }

    });

}






