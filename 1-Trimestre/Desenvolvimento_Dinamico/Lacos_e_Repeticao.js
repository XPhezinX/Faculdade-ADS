//loop for --------------------------------------------------------

for (let rua = 1; rua <= 10; rua ++) {
    console.log("Entrega feita na rua:", rua);
}



//loop While --------------------------------------------------------

let quantidadeFlexoes = 0;
let cansaco = false;

while (!cansaco) {
    quantidadeFlexoes++;
    console.log("eu fiz", quantidadeFlexoes, "flexoes!");
    
    if (quantidadeFlexoes === 10) {
        cansaco = true;
    } 
}



//loop do while --------------------------------------------------------

let tempoDeAndar = 0;
let caiu = false;

do {
    tempoDeAndar++;
    console.log("andei de bicicleta por ", tempoDeAndar, "minutos...");

    if (tempoDeAndar === 10) {
        caiu = true;
    }

} while (!caiu && tempoDeAndar < 10);