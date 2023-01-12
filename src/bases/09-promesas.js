

// ===================
// PROMISE
// ===================

import {getHeroesById} from './bases/08-imp-exp';

// A promise represents a value that may be available now, in the future, or never.







const getHeroesByIdAsync = (id) => {

    return new Promise( (resolve, reject) =>{

        setTimeout(()=>{ 
            
            const heroe = getHeroesById(id);
            console.log(heroe);
    
            console.log('2 segundos después');

            if(id){
                resolve(heroe);
            }else{
                reject("No se pudo encontrar el héroe");
            }
            
         
        }, 2000)
    
    }); 


}

getHeroesByIdAsync(3).then( heroe => {

    console.log('Then de la promesa',heroe);

}).catch( err => console.warn(err) );