

// ===================
// DESTRUCTURING WITH ARRAYS
// ===================

const personajes = ['Goku','Vegeta','Trunks'];

// Ignore the first position and just take the second value
const [ , p2 ] = personajes;

console.log( p2 );


const retornaArreglo = () => {

    return['ABC', 123];


}

const [letras, numeros] = retornaArreglo();
console.log(letras,numeros);


// Tarea 

const tarea1 = (valor) => {
    return [valor, ()=> {console.log('HOLA MUNDO')}];
}

const arr = tarea1('Goku');
// Use the return function 
arr[1]();


const [nombre,setNombre] = tarea1('Vegeta');
console.log(nombre);
setNombre(); // This is ()=> {console.log('HOLA MUNDO')
