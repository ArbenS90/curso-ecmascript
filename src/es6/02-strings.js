//template literals 
let hello = 'Hello';
let world = 'World';

//forma vieja de concatenar
let epicPhrase = hello + ' ' + world + '!';
//console.log(epicPhrase);

//nueva forma "template literals"
//se debe usar comilla francesa ``
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

//multi linea string
//sirve para realizar un salto de linea
let lorem = 'esto es un string \n ' + 'esto es otra linea';

//usando template literals para realizar salto de linea.
let lorem2 = `esta es una frase epica
    la continuacion de la frase epica
    `;

