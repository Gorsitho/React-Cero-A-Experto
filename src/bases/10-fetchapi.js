

// ===================
// Fetch API
// ===================
 // La API Fetch proporciona una interfaz para recuperar recursos (incluso a través de la red). 
 //Resultará familiar a cualquiera que haya usado XMLHttpRequest, pero la nueva API ofrece un conjunto
 // de características más potente y flexible.

const apiKey='2vkgAxoSAf8vYaTEU8r8b5kF0IHiaYKx';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// Promesas en cadena
peticion.then( resp => resp.json())
.then( ({data}) => { 

    
    const { url } = data.images.original; // Desestructuración
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
    console.log(data.images.original.url)


})  // Desestructuración
.catch( console.warn );
