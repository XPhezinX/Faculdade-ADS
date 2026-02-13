//if e else --------------------------------------------------------

let clima = 'chovendo';

if (clima === 'chovendo') {
    console.log('Levar guarda-chuva, está chovendo');
} else {console.log("Não precisa levar um guarda-chuva");}




//switch é um interruptor --------------------------------------------------------

function checkTrafficLight(lightColor) {

    switch (lightColor) {
        case 'verde':
            console.log("Pode atravessar a rua");
            break;

        case 'amarelo':
            console.log("Prepare-se para parar!");
            break;

        case 'vermelho':
            console.log("Pare!");
            break;
        
        default:
            console.log("Cor inválida!");
    }
}

checkTrafficLight('verde');
