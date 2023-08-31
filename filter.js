// crea un nuevo array con los elementos que cumplan con la funcion.

const obtenerPokemones = async() => {
    try{
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await respuesta.json();
        const arrayNombres = data.results.filter(poke.name !== 'bulbasaur');// creo un arreglo con todos los nombre de pokemones excepto bulbasour
        console.log(arrayNombres);
    }catch(e){
        console.log(e);
    }
}
obtenerPokemones();