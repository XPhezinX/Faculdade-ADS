let pessoa = {
    "nome": "Joao",
    "idade": 30,
    "endereco": {
        "rua": "Rua Principal",
        "numero": 123
    },
    "telefones": ["1234-5678", "8765-4321"]
};

console.log(pessoa);

//acessar dados

console.log("\nAcessar Dados:");
console.log(pessoa.nome);
console.log(pessoa["idade"]);
console.log(pessoa.endereco.rua);
console.log(pessoa.endereco.numero);
console.log(pessoa["telefones"][0]);
console.log(pessoa["telefones"][1]);

//adicionar dados

console.log("\nAdcionar Dados:");
pessoa.email = "joao@example.com";
console.log(pessoa);

//modificar dados

console.log("\nModificar Dados:");
pessoa.idade = 31;
pessoa.endereco.rua = "Rua Secundaria"
console.log(pessoa);

//remover dados

console.log("\nRemover Dados:");
delete pessoa.telefones;
console.log('pessoa');

//operacao com arrays

console.log("\nOperaçoes com Arrays:");
pessoa.hobbies = ["leitura", "esportes"];
console.log(pessoa.hobbies[1]);
pessoa.hobbies.push("viagens");
console.log(pessoa.hobbies);

//iterar sopbre as propriedades do objeto

console.log("\nIterar Sobre as Propriedades do Objeto:");

for (let chave in pessoa) {
    console.log(chave + ": " + pessoa [chave]);
}

//converter de e para JSON

console.log("\nConverter de e para JSON");
let jsonTexto = JSON.stringify(pessoa);

console.log(jsonTexto);

// agora de volta para string
let objetoPessoa = JSON.parse(jsonTexto);
console.log(objetoPessoa);