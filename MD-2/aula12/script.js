

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 29,

}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}


/*

Resumo

- O objeto guarda dados relacionados
- for...in percorre as chaves do objeto
- pessoa[chave] acessa o valor de cada chave
- O código imprime todas as propriedades do objeto

*/