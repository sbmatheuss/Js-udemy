// IEE 754-2008

let num1 = 0.7; // Number
let num2 = 0.1; // Number

// num1 = ((num1 * 100) + (num2 * 100)) / 100 // 0.8
// num1 = ((num1 * 1000) + (num2 * 1000)) / 1000 // 0.9
// num1 = ((num1 * 10000) + (num2 * 10000)) / 10000 // 1.0

num1 = Number(num1.toFixed(2)) 

console.log(num1)
console.log(Number.isInteger(num1)) // Verifica se é um número inteiro