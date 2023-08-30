
/*
esta es la manera tradicional de ingresar un strig:

const numero = (num) => 'el número es: ' + num ;
const resultado = numero(10);
console.log(resultado);
*/

//con template string :
const numero = (num) => (`el número es:${num}`); //con esta forma se puede ingresar lógica de js dentro de las llaves
const resultado = numero(10);
console.log(resultado);

// otro ejemplo:
const numeros = (num1,num2) => (`el número es:${num1 + num2}`); //con esta forma se puede ingresar lógica de js dentro de las llaves
const resultado2 = numeros(10,20);
console.log(resultado2);

