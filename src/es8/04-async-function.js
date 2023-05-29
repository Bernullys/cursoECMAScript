const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Asincronico!!!"),2000)
            : reject (new Error("Esto es un error"));
    })
};
// todo esto hasta aqui es una promesa
//el asincronismo ejecuta la promesa

const anotherFunction = async () => {
    const cualquierCosa = await fnAsync();
    console.log(cualquierCosa);
    console.log("Hello")
};

console.log("Antes");
anotherFunction();
console.log("Despues");

// el resultado con true: se guarda en memoria todo el codigo, luego imprime "Antes", despues ejecuta anotherFunction la cual ejecuta fnAsync la cual tiene un setTimeout y espera, pero el codigo sigue corriendo por eso se imprime "Despues". Ahora despues de los 2000 ms imprime el resolve "Asincronico!!!" y despues el "Hello", estos ultimos dos ejecutados por anotherFunction.