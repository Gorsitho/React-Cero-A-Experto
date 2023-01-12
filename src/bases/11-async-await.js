

// ===================
// Async and await
// ===================
// -> AWAIT: El "await" operador se utiliza para esperar "Promise" y obtener su valor de cumplimiento.
//    Solo se puede usar dentro de una función asíncrona o en el nivel superior de un módulo .


const getImagen = async() =>{

    try {
        const apiKey='2vkgAxoSAf8vYaTEU8r8b5kF0IHiaYKx';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await resp.json();
    
    
        const { url } = data.images.original; // Desestructuración
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        console.log(data.images.original.url);
    } catch (error) {
        console.error(error);
    }


}

getImagen();

