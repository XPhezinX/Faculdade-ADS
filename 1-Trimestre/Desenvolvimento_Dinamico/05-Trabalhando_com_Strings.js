// slice = "fatia" a string e tras outra string, sem modificar a original

let frutas = "maça, banana, laranja, uva, acabaxi";
console.log("Tamanho de caracteres da string frutas: ", frutas.length);

let parteFrutas = frutas.slice(5,21);
console.log("Resultado do slice: ", parteFrutas);


// trim() = remove espaços em branco

let frutaComEspaco = "           abacate           ";

let frutasSemEspaco = frutaComEspaco.trim();
console.log("Resultado do trim():", frutasSemEspaco);


// split = separa os itens da string

let listafrutas = "maça,banana,laranja,uva,acabaxi";
let arrayDeFrutas = listafrutas.split(",");
console.log("Resultado do split:", arrayDeFrutas);


// exemplos para subs. rep e concat

let animal1 = "Elefante";
let animal2 = "Girafa";
let animal3 = "Zebra";


// substring = extrai o texto da string

let parteAnimal1 = animal1.substring(3, 7);
console.log("Resultado substring:", parteAnimal1);


// replace = muda o text de uma string

let novoAnimal2 = animal2.replace("fa", "fas")
console.log("Resultado replace", novoAnimal2);


// concat = junta strings

let animaisJuntos = animal1.concat(", ", animal2, ", ", animal3);
console.log("Resultado concat:", animaisJuntos);

// exemplo de To Cases

let nome = "Phelipe Lima";

// ToLowerCase = deixa minusculo o texto de uma string

let nomeMinusculo = nome.toLowerCase();
console.log("Resultado ToLowerCase:", nomeMinusculo);


// ToUpperCase = deixa maiusculo o texto de uma string

let nomeMaiusculo = nome.toUpperCase();
console.log("Resultado ToUpperCase:", nomeMaiusculo);