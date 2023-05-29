// how was used to be:

let hello = "Hello";
let world = "World";
let phrase = hello + " " + world + "!";
console.log(phrase);


let lorem = "contenido de la primera linea \n" + "contenido de la segunda linea";
console.log(lorem);



// How can be now: Template literals

let phrase2 = `${hello} ${world}!`;
console.log(phrase2);


let lorem2 = `Esta es una linea
Esta es otra linea
Y esta otra más`;
console.log(lorem2);