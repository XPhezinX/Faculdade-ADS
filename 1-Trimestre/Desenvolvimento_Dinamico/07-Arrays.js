//arrays é uma estrutura de dados que arazena uma coleção de elementos, Suas operações consistem em remover, acessar e modificar. Pode conter uma string, float ou numérico

//Exemplo de array:

//let array = [1, 15, 3.5, null, 'Ana', true, 200];

//criar um array

let array1 = []; //forma não tão oficial
let array2 = new Array(); //melhor forma, ela instancia a variável como arrray
let array3 = ["maçã", "banana", "uva"] //pode também criar um array já com valores

console.log('Array 1', array1);
console.log('Array 2', array2);

//adicionar elementos a um array


//ERRADO:
//array1 = ["teste"]; aqui ele vai só substituir

//CORRETO:

console.log("\nArray após adicionar elementos");

array1.push('ele1');
array2.push('ele2');
array3.push('ele3');

//acessar elementos de um array

let primeiroElemento = array1[0]; //utiliza-se a posição do elemento
let erro = array[1];
let segundoElemento = array1[0];
let terceiroElemento = array1[3];


console.log('\nPrimeiro elemento', primeiroElemento);
console.log('Erro:', erro);
console.log('\nSegundo elemento', segundoElemento);
console.log('\nTerceiro elemento', terceiroElemento);


//modificar elementos de um array

array1[0] = "novo elemento" //se fizer algo diferente disso, pode acaba subistituind s valores
console.log ('\nArray após modificar elemntos:', array1);



//MÉTODOS BASICOS DE ARRAY

//push = "empilhar" algum elemento para q ele fique em cima
//pop = remover elemento de um array, tirar o último
//shift = deslocar um elemento, à esquerda

//EXEMPLOS:

//push

let frutas = ["maçã", "banana", "laranja", "uva"];
console.log("Array inicial: ", + frutas);
console.log("Comprimento do array: ", + frutas.length);

let novoComprimento = frutas.push("manga", "abacate");
console.log('\nArray atualizado push: ' + frutas);
console.log('Novo comprimento do array: ' + novoComprimento);


//pop

let ultimaFruta = frutas.pop(); //não precisa de parâmetro, pq ele vai remover o ultimo
console.log('\nArray atualizado pop: ' + frutas);
console.log('Última fruta removida ' + ultimaFruta);


//shift

let primeiraFruta = frutas.shift();
console.log('\nArray atualizado shift: ' + frutas);
console.log('Última fruta removida ' + primeiraFruta);