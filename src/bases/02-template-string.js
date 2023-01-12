

// ===================
// TEMPLATE STRING
// ===================


const nombre = "Daniel";
const apellido = "Velásquez";


// this is an Backticks -> " ` " its very important that you know how to use it
const nombreCompleto = `${nombre} ${apellido}`;  // this is an improved string
//const nombreCompleto = nombre+" "+apellido;  <- is the same as the previous line of code


console.log(nombreCompleto);

function getSaludo(nombreCompleto){

return '¡Hola Mundo! Soy ' + nombreCompleto ;

}


console.log(`Este es un texto: ${ getSaludo(nombreCompleto)}`);