// Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. 
// Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

// function retornaMes(numero) {
//     if (numero == 1) {
//         return `Janeiro`;  
//     } else if (numero == 2) {
//         return `Fevereiro`;
//     } else if (numero == 3) {
//         return `Março`;
//     } else if (numero == 4) {
//         return `Abril`;
//     } else if (numero == 5) {
//         return `Maio`;
//     } else if (numero == 6) {
//         return `Junho`;
//     } else if (numero == 7) {
//         return `Julho`;
//     } else if (numero == 8) {
//         return `Agosto`;
//     } else if (numero == 9) {
//         return `Setembro`;
//     } else if (numero == 10) {
//         return `Outubro`;
//     } else if (numero == 11) {
//         return `Novembro`;
//     } else if (numero == 12) {
//         return `Dezembro`;
//     } else {
//         return `Inválido`;  
//     }
// }

// console.log(retornaMes(1));
// console.log(retornaMes(12));
// console.log(retornaMes(8));

function receberNomeDoMes(numero) {
  const mapeamento = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  return mapeamento[--numero];
}

console.log(receberNomeDoMes(9));