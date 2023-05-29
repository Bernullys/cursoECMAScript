// how used to be:

function sumar(number1, number2) {
    var num1 = number1 || 0;
    var num2 = number2 || 0;
    console.log(num1 + num2);
};

sumar(1,1);
sumar(3);
sumar();

//Now with default params:

function suma(numberA = 0, numberB = 0) {
    console.log(numberA + numberB);
};

suma(1,1);
suma(3);
suma();