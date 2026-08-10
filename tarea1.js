/*  
        Juan Jose Hinestroza Guasguita - 2240080

    Por cada metodo de js para trabjar con Arrays contamos con:
        1. Para que sirve
        2. Ejemplo de como se usa
        3. Respuesta final con el resultado de lo que hace el metodo
*/

/* 1. at()

   ¿Para qué sirve?
   Sirve para obtener un elemento de un arreglo usando su posición(indice).
   Tambien permite usar indices negativos para contar desde el final.

   Ejemplo:
*/

let a = [10, 20, 30, 40];

let b = a.at(1);

console.log(b);

/* 
    R// 
      at() devuelve el elemento que se encuentra en el indice 
      indicado en este caso el numero 20.
*/


/* 2. concat()

   ¿Para qué sirve?
   Sirve para unir dos o más arreglos y crear un nuevo arreglo.
   Pero no modifica los arreglos originales.

   Ejemplo:
*/

let a2 = [1, 2];

let b2 = [3, 4];

let c2 = a2.concat(b2);

console.log(c2);

/* 
    R// 
      concat() une dos o más arreglos y devulve un nuevo arreglo.
      regresando el arreglo [1, 2, 3, 4].
*/


/* 3. copyWithin()

   ¿Para qué sirve?
   Copia una parte de un arreglo dentro del mismo arreglo.

   Ejemplo:
*/

let a3 = [1, 2, 3, 4, 5];

let b3 = a3.copyWithin(0, 3);

console.log(b3);

/* 
    R// 
      copyWithin() copia elementos de una parte del arreglo hacia
      otra posición dentro del mismo arreglo, dando como resultado
      [4, 5, 3, 4, 5].
*/


/* 4. entries()

   ¿Para qué sirve?
   Devuelve un iterador que contiene pares de indice y valor.

   Ejemplo:
*/

let a4 = ["manzana", "pera", "uva"];

let b4 = a4.entries();

for (let c4 of b4) {
    console.log(c4);
}

/* 
    R// 
      entries() permite obtener el indice y el valor de cada
      elemento en este caso devuelve [0, 'manzana'], [1, 'pera'],
      [2, 'uva'].
*/


/* 5. every()

   ¿Para qué sirve?
   Comprueba si todos los elementos cumplen una condición.

   Ejemplo:
*/

let a5 = [2, 4, 6, 8];

let b5 = a5.every(numero => numero % 2 === 0);

console.log(b5);

/* 
    R// 
      every() devuelve true si todos los elementos cumplen la
      condición si uno no la cumple regresa false.
*/


/* 6. fill()

   ¿Para qué sirve?
   Reemplaza los elementos de un arreglo por un valor determinado.

   Ejemplo:
*/

let a6 = [1, 2, 3, 4];

let b6 = a6.fill(0, 1, 3);

console.log(b6);

/* 
    R// 
      fill() rellena una parte o todo el arreglo con un mismo 
      valor, resultado que arroja [1, 0, 0, 4].
*/


/* 7. filter()

   ¿Para qué sirve?
   Crea un nuevo arreglo con los elementos que cumplen una condición.

   Ejemplo:
*/

let a7 = [1, 2, 3, 4, 5];

let b7 = a7.filter(numero => numero % 2 === 0);

console.log(b7);

/* 
    R// 
      filter() selecciona los elementos que cumplen una condición
      y los guarda en un nuevo arreglo en este caso el resultado es
      [2, 4].
*/


/* 8. find()

   ¿Para qué sirve?
   Busca el primer elemento que cumple una condición.

   Ejemplo:
*/

let a8 = [5, 12, 8, 20];

let b8 = a8.find(numero => numero > 10);

console.log(b8);

/* 
    R// 
      find() devuelve el primer elemento que cumple la condición
      que es el 12.
*/


/* 9. findIndex()

    ¿Para qué sirve?
    Busca la posición o indice del primer elemento que cumple
    una condición.

    Ejemplo:
*/

let a9 = [5, 12, 8, 20];

let b9 = a9.findIndex(numero => numero > 10);

console.log(b9);

/*
    R//
      findIndex() devuelve el indice del primer elemento que cumple
      la condición, en este caso devuelve 1 porque el numero 12
      se encuentra en la posición 1.
*/


/* 10. findLast()

    ¿Para qué sirve?
    Busca el ultimo elemento que cumple una condición.

    Ejemplo:
*/

let a10 = [5, 12, 8, 20, 15];

let b10 = a10.findLast(numero => numero > 10);

console.log(b10);

/*
    R//
      findLast() devuelve el ultimo elemento que cumple la condición,
      en este caso devuelve el numero 15.
*/


/* 11. findLastIndex()

    ¿Para qué sirve?
    Busca el indice del ultimo elemento que cumple una condición.

    Ejemplo:
*/

let a11 = [5, 12, 8, 20, 15];

let b11 = a11.findLastIndex(numero => numero > 10);

console.log(b11);

/*
    R//
      findLastIndex() devuelve el indice del ultimo elemento que
      cumple la condición, en este caso devuelve 4 porque el numero
      15 se encuentra en la posición 4.
*/


/* 12. flat()

    ¿Para qué sirve?
    Sirve para unir los elementos de arreglos que se encuentran
    dentro de otro arreglo.

    Ejemplo:
*/

let a12 = [1, [2, 3], [4, 5]];

let b12 = a12.flat();

console.log(b12);

/*
    R//
      flat() aplana los arreglos que se encuentran dentro de otro
      arreglo, dando como resultado [1, 2, 3, 4, 5].
*/


/* 13. flatMap()

    ¿Para qué sirve?
    Sirve para transformar cada elemento de un arreglo y despues
    aplanar el resultado en un solo nivel.

    Ejemplo:
*/

let a13 = [1, 2, 3];

let b13 = a13.flatMap(numero => [numero, numero * 2]);

console.log(b13);

/*
    R//
      flatMap() transforma cada elemento y despues aplana el resultado,
      en este caso devuelve [1, 2, 2, 4, 3, 6].
*/


/* 14. forEach()

    ¿Para qué sirve?
    Sirve para recorrer todos los elementos de un arreglo y ejecutar
    una función para cada uno de ellos.

    Ejemplo:
*/

let a14 = ["manzana", "pera", "uva"];

a14.forEach(fruta => {
    console.log(fruta);
});

/*
    R//
      forEach() permite recorrer cada elemento del arreglo y realizar
      una acción por cada uno, en este caso muestra manzana, pera y uva.
*/


/* 15. includes()

    ¿Para qué sirve?
    Sirve para comprobar si un arreglo contiene un determinado valor.

    Ejemplo:
*/

let a15 = ["manzana", "pera", "uva"];

let b15 = a15.includes("pera");

console.log(b15);

/*
    R//
      includes() devuelve true si el valor buscado se encuentra dentro
      del arreglo, en este caso devuelve true porque existe "pera".
*/


/* 16. indexOf()

    ¿Para qué sirve?
    Busca la primera posición en la que aparece un determinado valor.

    Ejemplo:
*/

let a16 = ["manzana", "pera", "uva", "pera"];

let b16 = a16.indexOf("pera");

console.log(b16);

/*
    R//
      indexOf() devuelve el indice de la primera aparición del valor,
      en este caso devuelve 1 porque "pera" aparece por primera vez
      en la posición 1.
*/


/* 17. join()

    ¿Para qué sirve?
    Sirve para unir todos los elementos de un arreglo en una cadena
    de texto utilizando un separador.

    Ejemplo:
*/

let a17 = ["manzana", "pera", "uva"];

let b17 = a17.join(", ");

console.log(b17);

/*
    R//
      join() une todos los elementos del arreglo en una cadena de texto,
      en este caso devuelve "manzana, pera, uva".
*/


/* 18. keys()

    ¿Para qué sirve?
    Devuelve un iterador que contiene los indices del arreglo.

    Ejemplo:
*/

let a18 = ["manzana", "pera", "uva"];

let b18 = a18.keys();

for (let c18 of b18) {
    console.log(c18);
}

/*
    R//
      keys() permite obtener los indices de cada elemento del arreglo,
      en este caso devuelve 0, 1 y 2.
*/


/* 19. lastIndexOf()

    ¿Para qué sirve?
    Busca la ultima posición en la que aparece un determinado valor.

    Ejemplo:
*/

let a19 = ["manzana", "pera", "uva", "pera"];

let b19 = a19.lastIndexOf("pera");

console.log(b19);

/*
    R//
      lastIndexOf() devuelve el indice de la ultima aparición del valor,
      en este caso devuelve 3 porque "pera" aparece por ultima vez
      en la posición 3.
*/


/* 20. map()

    ¿Para qué sirve?
    Sirve para crear un nuevo arreglo modificando cada uno de los
    elementos del arreglo original.

    Ejemplo:
*/

let a20 = [1, 2, 3, 4];

let b20 = a20.map(numero => numero * 2);

console.log(b20);

/*
    R//
      map() aplica una función a cada elemento y devuelve un nuevo
      arreglo con los resultados, en este caso [2, 4, 6, 8].
*/


/* 21. pop()

    ¿Para qué sirve?
    Sirve para eliminar el ultimo elemento de un arreglo.

    Ejemplo:
*/

let a21 = [10, 20, 30];

let b21 = a21.pop();

console.log(b21);
console.log(a21);

/*
    R//
      pop() elimina y devuelve el ultimo elemento del arreglo,
      en este caso elimina y devuelve 30.
      El arreglo queda como [10, 20].
*/


/* 22. push()

    ¿Para qué sirve?
    Sirve para agregar uno o más elementos al final de un arreglo.

    Ejemplo:
*/

let a22 = [10, 20];

let b22 = a22.push(30, 40);

console.log(a22);
console.log(b22);

/*
    R//
      push() agrega elementos al final del arreglo y devuelve
      la nueva longitud del arreglo.
      En este caso el arreglo queda [10, 20, 30, 40] y su longitud es 4.
*/


/* 23. reduce()

    ¿Para qué sirve?
    Sirve para reducir todos los elementos de un arreglo 
    a un solo valor.

    Ejemplo:
*/

let a23 = [1, 2, 3, 4];

let b23 = a23.reduce(
    (acumulador, numero) => acumulador + numero,
    0
);

console.log(b23);

/*
    R//
      reduce() combina todos los elementos del arreglo para obtener
      un unico resultado, en este caso suma todos los numeros y
      devuelve 10.
*/


/* 24. reduceRight()

    ¿Para qué sirve?
    Funciona de forma similar a reduce(), pero comienza a trabajar
    desde el ultimo elemento hacia el primero.

    Ejemplo:
*/

let a24 = ["A", "B", "C"];

let b24 = a24.reduceRight(
    (acumulador, letra) => acumulador + letra,
    ""
);

console.log(b24);

/*
    R//
      reduceRight() combina los elementos comenzando desde el ultimo
      hasta el primero, en este caso devuelve "CBA".
*/


/* 25. reverse()

    ¿Para qué sirve?
    Sirve para invertir el orden de los elementos de un arreglo.

    Ejemplo:
*/

let a25 = [1, 2, 3, 4];

let b25 = a25.reverse();

console.log(b25);

/*
    R//
      reverse() invierte el orden de los elementos del arreglo,
      en este caso devuelve [4, 3, 2, 1].
*/


/* 26. shift()

    ¿Para qué sirve?
    Sirve para eliminar el primer elemento de un arreglo.

    Ejemplo:
*/

let a26 = [10, 20, 30];

let b26 = a26.shift();

console.log(b26);
console.log(a26);

/*
    R//
      shift() elimina y devuelve el primer elemento del arreglo,
      en este caso elimina y devuelve 10.
      El arreglo queda como [20, 30].
*/


/* 27. slice()

    ¿Para qué sirve?
    Sirve para obtener una parte de un arreglo sin modificar
    el arreglo original.

    Ejemplo:
*/

let a27 = [10, 20, 30, 40, 50];

let b27 = a27.slice(1, 4);

console.log(b27);

/*
    R//
      slice() copia una parte del arreglo y devuelve un nuevo arreglo,
      en este caso devuelve [20, 30, 40].
*/


/* 28. some()

    ¿Para qué sirve?
    Comprueba si al menos uno de los elementos cumple una condición.

    Ejemplo:
*/

let a28 = [1, 3, 5, 8];

let b28 = a28.some(numero => numero % 2 === 0);

console.log(b28);

/*
    R//
      some() devuelve true si al menos uno de los elementos cumple
      la condición, en este caso devuelve true porque existe el numero 8.
*/


/* 29. sort()

    ¿Para qué sirve?
    Sirve para ordenar los elementos de un arreglo.

    Ejemplo:
*/

let a29 = [10, 2, 30, 5];

let b29 = a29.sort((a, b) => a - b);

console.log(b29);

/*
    R//
      sort() ordena los elementos del arreglo de acuerdo con la función
      indicada, en este caso los ordena de menor a mayor y devuelve
      [2, 5, 10, 30].
*/


/* 30. splice()

    ¿Para qué sirve?
    Sirve para agregar, eliminar o reemplazar elementos dentro
    de un arreglo.

    Ejemplo:
*/

let a30 = ["manzana", "pera", "uva"];

let b30 = a30.splice(1, 1, "mango");

console.log(a30);
console.log(b30);

/*
    R//
      splice() permite modificar el contenido del arreglo.
      En este caso elimina "pera" y coloca "mango" en su lugar,
      dejando el arreglo como ["manzana", "mango", "uva"].
*/


/* 31. toLocaleString()

    ¿Para qué sirve?
    Sirve para convertir los elementos del arreglo a texto utilizando
    el formato correspondiente a una región o idioma.

    Ejemplo:
*/

let a31 = [1000, 2000, 3000];

let b31 = a31.toLocaleString("es-CO");

console.log(b31);

/*
    R//
      toLocaleString() convierte el arreglo en una cadena de texto
      utilizando el formato de la región indicada.
      En este caso devuelve "1.000,2.000,3.000".
*/


/* 32. toString()

    ¿Para qué sirve?
    Sirve para convertir un arreglo en una cadena de texto.

    Ejemplo:
*/

let a32 = ["manzana", "pera", "uva"];

let b32 = a32.toString();

console.log(b32);

/*
    R//
      toString() convierte el arreglo en una cadena de texto,
      separando los elementos mediante comas.
      En este caso devuelve "manzana,pera,uva".
*/


/* 33. unshift()

    ¿Para qué sirve?
    Sirve para agregar uno o más elementos al inicio de un arreglo.

    Ejemplo:
*/

let a33 = [20, 30];

let b33 = a33.unshift(10);

console.log(a33);
console.log(b33);

/*
    R//
      unshift() agrega elementos al inicio del arreglo y devuelve
      la nueva longitud.
      En este caso el arreglo queda [10, 20, 30] y su longitud es 3.
*/


/* 34. values()

    ¿Para qué sirve?
    Devuelve un iterador que contiene los valores del arreglo.

    Ejemplo:
*/

let a34 = ["manzana", "pera", "uva"];

let b34 = a34.values();

for (let c34 of b34) {
    console.log(c34);
}

/*
    R//
      values() permite obtener y recorrer los valores de un arreglo,
      en este caso muestra manzana, pera y uva.
*/