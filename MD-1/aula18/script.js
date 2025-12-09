const pessoa = {
  nome: "Ana",
  sobrenome: "Carolina",
  idade: 20,

  fala() {
    console.log(`A minha idade atual é ${this.idade}`);
  },

  incrementaIdade() {
    this.idade++;
  }


}


pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();
