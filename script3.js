//Exercício 03
/**
 * Crie uma variável chamada ‘arrayNumeros’, ela é um vetor que possui valores de 1 a 9 (ex.: [1, 2, 3, 4, 5, 6, 7, 8, 9]). Criar outra variável chamada ‘arrayInvertido’ inicializada como um vetor vazio (ex.: []).
 * Em seguida, crie e execute uma arrow function que inverta a ordem dos números de ‘arrayNumeros’, armazenando a lista invertida em ‘arrayInvertido’.Apresente no console os dois vetores. 
*/

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arrayInvertido = [];

// const inverterArray = arrayNumeros => {
//     return arrayNumeros.reverse();
// } 

// console.log(arrayNumeros);
// console.log(inverterArray(arrayNumeros));


//Exercício 04
/* Utilizando o mesmo vetor ‘arrayNumeros’, que possui valores de 1 a 9. Crie agora uma variável chamada ‘arrayImpares’.
Utilizando a funcionalidade de arrays ‘filter’ em ‘arrayNumeros’, crie uma arrow function que teste se um valor passado por parâmetro é ímpar    (retornando 1 ou true se for ímpar, 0 ou false se for par) e passe esta função como parâmetro de ‘filter’. Por fim, confira se o vetor ‘arrayImpares’ possui todos os números ímpares presentes em ‘arrayNumeros’.
*/
// let arrayImpares = [];

// const arrayImpar = impar => impar.filter(numImpar => numImpar % 2 != 0);

// console.log(arrayNumeros); 
// console.log(arrayImpar(arrayNumeros));


//Exercício 05
/* Utilizando o mesmo vetor ‘arrayNumeros’, que possui valores de 1 a 9. Crie agora uma variável chamada ‘arrayQuadrados’.
Utilizando a funcionalidade de arrays ‘map’ em ‘arrayNumeros’, crie uma arrow function que calcule o quadrado de um valor passado por parâmetro e passe esta função como parâmetro de ‘map’. Por fim, confira se o vetor ‘arrayQuadrados’ possui todos os quadrados dos números presentes em ‘arrayNumeros’ e exiba-os no console.
*/

let arrayQuadrados = [];

const numQuadrados = arrayNumeros => arrayNumeros.map(num => {
    return num ** 2;
});

console.log(arrayNumeros)
console.log(numQuadrados(arrayNumeros));