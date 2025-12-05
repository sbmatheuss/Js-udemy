/* 
  Matheus Braga tem 23 anos, pesa 84kg
  tem 1.8 de altura e seu IMC é de 25.925925925925924
  Matheus Braga nasceu em 2002
*/

const nome = 'Matheus Braga';
const sobrenomme = 'Braga';
const idade = 23;
const peso = 84;
const alturaEmM = 1.80;

let imc = peso / (alturaEmM * 2)
let anoNascimento = 2025 - idade


console.log(`${nome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em: ${anoNascimento}`);
