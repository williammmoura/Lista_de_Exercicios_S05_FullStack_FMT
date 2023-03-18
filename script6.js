//Exercício 06
/*
Dada a seguinte lista, utilizando o método forEach e salve no localstorage cada um dos elementos.
[ “Banana”, “Morango”, “Maçã”, “Uva”, “Pêra” ]
*/

let arrayFrutas = ['Banana', 'Morango', 'Maçã', 'Uva', 'Pêra'];

arrayFrutas.forEach((item, index) => {
    //Criando uma chave para cada item.
    let chave = 'frutas' + index;
    //Salvando o item no localStorage (browser)
    localStorage.setItem(chave, item);
});