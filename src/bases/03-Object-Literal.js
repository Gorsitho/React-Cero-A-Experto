

// ===================
// OBJECT LITERAL 
// ===================


// The object literal are known as dictionaries. This depends on the programming language.
// The object literal works with pairs of values.

const persona = {

    nombre: 'Tony',
    apellido: 'Stark',
    edad:45,
    direccion:{
        ciudad: 'New York',
        zip: 55,
        lat: 14,
        lng: 34.9999
    }

};

const personaReference = persona; // This create a reference of an object, namely, its a same object
const persona2 = { ...persona } // This code works to create a new object without use the reference {...} 
 persona2.nombre = 'Daniel';


console.log( persona );
console.log( personaReference );
console.log( persona2 );

console.table( {persona: persona}); // With "table" prints the variable as a table