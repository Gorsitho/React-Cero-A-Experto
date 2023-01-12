

// ===================
// IMPORT AND EXPORT
// ===================

// This is the way to import a data
//import  heroes,{owners} from '../data/heroes'; //must be unstructured to import "owners"

import  heroes, {owners} from '../data/heroes';

console.log(owners);

console.log( heroes );




// =====================
// "heroes.find" find the element with that specific property
export const getHeroesById = (id) => {

    return heroes.find( (heroe) => heroe.id === id);
}

console.log(getHeroesById(2));

// =====================
// This is the same code but more simplified

export const getHeroesById2 = (id) => heroes.find( (heroe) => heroe.id === id);

console.log(getHeroesById2(1));


// =====================
// "heroes.filter" find all elements that have 'DC'

const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

console.log(getHeroesByOwner('DC'));