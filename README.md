# cursoECMAScript
Historia y versiones de javaScript

ES6

var tiene funcion scope.
let tiene block scope.
const tiene block scope.

Otra forma de declarar funciones (arrow function): const functionName = () => {};
Ojo tienen limitaciones respecto a las funciones declaradas comunmente. Pero tambien tiene una forma mas simple de escribirla (si no tiene multiple lineas de codigo) y ademas tienen el return implicito, osea que no hay que escribirlo.
Se recomienda que las funciones se declaren utilizando const.

Clase 5: Mejoras con los strings con Template Literals

Clase 6: Mejoras con las funciones con Default-params

Clase 7: Desestructuración de objetos. Ver archivo de clase.

Clase 8:    Spread operator ...
            rest

Clase 10: objects literals --- a better way to use objects.

Clase 11: Promesas -- Algo que va a pasar y puede ser ahora, mañana o nunca. (Nuevo concepto ECMA6).

Clase 12: Clases. Las clases tienen metodos, constructor, se llaman con instancias. Se utiliza el this.methodX para llamar sus metodos.
Tambien las funcionalidades get y set.

Clase 13: Modulos.Sintaxis en el archivo. Pero hay que añadir "type": "module" en el package.json para que acepte modulos. Notas de clase indica como importar una funcion o varias del mismo archivo.

Clase 15: Generator --- ver archivo de la clase, esta todo explicado. Hay link para la documentación de los generadores.
Ademas, hay un repaso de como usar for of y for in.

Clase 17: set-add

Clase 18: ES7:
            exponential operator (**)       base ** exponente
            includes method                 variableName.includes(variableSearch) // true or false

Clase 19: ES8:
            Metodos para objetos            Object.entries(objectName)
                                            Object.keys(objectName)
                                            Object.values(objectName)

Clase 20:   Metodos para strings            stringName.padStart(n, "x")); //agrega al inicio n veces el caracter(ess) "x"
                                            stringName.padEnd(n, "x");    //agrega al final n veces el caracter(es) "x"
            Trailing commas                 las comas dentro de un array definen un espacio en ese array incluso si esta vacio.

Clase 21:   Asincronismo. Ver archivo JS --- muy bueno.

Clase 22: Regular Expressions and spread in objects (very basic explination)

Clase 23: finally - se agrego para saber que pasa cuando termina la promesa. Y agregar el codigo que necesitemos. Ojo: no me funciono y no se por que...
        Segunda parte de la clase: Generadores asíncronos: se convinan con las promesas.