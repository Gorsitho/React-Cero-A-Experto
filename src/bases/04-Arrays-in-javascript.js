

// ===================
// ARRAYS IN JAVASCRIPT
// ===================

const arreglo = new Array(10);
arreglo.push(1); // The Push modifies the main object. Its recommended not to use it. 


const arreglo2 = [1,2,3,4];

let arreglo3 = [ ...arreglo2, 5 ]; // "..." this is to pass the values of the array to the new one.

const arreglo4 = arreglo3.map( function(numero){ return numero*2 });
// "map" create a new array according to the function.

console.log(" ARREGLO ");
console.log(arreglo);
console.log(" ARREGLO 2 ");
console.log(arreglo2);
console.log(" ARREGLO 3 ");
console.log(arreglo3);
console.log(" ARREGLO 4 ");
console.log(arreglo4);