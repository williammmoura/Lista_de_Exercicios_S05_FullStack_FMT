//Exercício 03
/**
 * Crie uma variável chamada ‘arrayNumeros’, ela é um vetor que possui valores de 1 a 9 (ex.: [1, 2, 3, 4, 5, 6, 7, 8, 9]). Criar outra variável chamada ‘arrayInvertido’ inicializada como um vetor vazio (ex.: []).
 * Em seguida, crie e execute uma arrow function que inverta a ordem dos números de ‘arrayNumeros’, armazenando a lista invertida em ‘arrayInvertido’.Apresente no console os dois vetores. 
*/

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayInvertido = [];

const inverterArray = arrayNumeros => {
    return arrayNumeros.reverse();
} 

console.log(arrayNumeros);
console.log(inverterArray(arrayNumeros));