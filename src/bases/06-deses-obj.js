

// ===================
// DESTRUCTURING
// ===================

const persona ={
    nombre: 'Tony',
    edad:45,
    clave: 'Ironman',
    rango: 'Soldado'

};
// This is known as destructuring. 
//It consists of decomposing the properties of an object into independent variables.
const {nombre:nombre1} = persona;
const {nombre, edad, clave} = persona;


console.log(nombre1); 

console.log(nombre); 
console.log(edad); 
console.log(clave); 


// In this way the object is destructured directly in the function.
// If the object does not have the range property, this variable will be assigned captain.
// " rango = 'Capitan' " 

console.log("----------- FUNCTION -----------");
const obtenerInformacion = ({clave,nombre,edad, rango = 'Capitan'}) => {


console.log( nombre, edad, rango);

    return {

        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:14.235,
            lng:-12.3
        }
    }

}


// This object has the properties that the function returns.
// latlng:{lat,lng} Get the value of the variables "lat" and "lng"
const {nombreClave, anios, latlng:{lat,lng}} = obtenerInformacion(persona);

console.log(nombreClave, anios, lat,lng);