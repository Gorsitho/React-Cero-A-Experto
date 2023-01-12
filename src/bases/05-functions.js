

// ===================
// FUNCTIONS IN JAVASCRIPT
// ===================


//It's better create a constant so as not to be able change the value accidentally.
const saludar = function saludar (nombre){  

    return `Hola, ${nombre}`;
}

// ARROW FUNCTION
const saludar2 = (nombre) => {  

    return `Hola, ${nombre}`;
}

// if the arrow function only has one return, you can do this.
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `HOLA A TODOS`;



console.log( saludar('Daniel') );
console.log( saludar2('José') );
console.log( saludar3('Gabriel') );
console.log( saludar4() );

const getUser = () =>{

    return{
        uid:'ABC123',
        username:'gorsitho'
    }
}

// It's important that you use "()" in this arrow function because js without "()" can't recognize the body of the code.
const getUser2 = () =>({
        uid:'ABC123',
        username:'gorsithoxd'
});


console.log( getUser() );

console.log( getUser2() );
