/*

Diferencias ente Arrow Funtions y Funciones Regulares

Sintaxis

    Regular

    function suma(a, b) {
        return a + b;
    }

    Arrow

    const suma = (a, b) => a + b;

this
    regular: cuenta con su propio "this" que depende de como se llama la función.

    arrow: No cuenta con "this" propio, hereda el del contexto donde fue definida.

Objeto arguments
    regular: tiene acceso a "arguments".

    arrow: no tiene "arguments" propio, hay que usar rest.

Uso como constructor
    regular: puede usarse con "new".

    arrow: no puede usarse con "new", lanza TypeError.

Sintaxis reducida

    Las arrow permiten retorno implícito si el cuerpo es una sola
    expresión: const doble = x => x * 2;

*/ 

// Función regular

function esParOImparRegular(numero) {

    if (numero % 2 === 0) {
        console.log(`${numero} es PAR (función regular)`);
    } else {
        console.log(`${numero} es IMPAR (función regular)`);
    }
}

// Arrow Function

const esParOImparArrow = (numero) => {
    if (numero % 2 === 0) {
        console.log(`${numero} es PAR (arrow function)`);
    } else {
        console.log(`${numero} es IMPAR (arrow function)`);
    }
};


//pruebas para usar

esParOImparRegular(7);
esParOImparRegular(10);
 
esParOImparArrow(3);
esParOImparArrow(8);