//es un metodo que crea un nuevo array con los resultados de llamada a la funcion indicada

const obtenerPokemones = async() => {
    try {
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await respuesta.json();
        const arrayNombres = data.results.map( poke => poke.url);
        console.log(arrayNombres);
    }catch (e) {
        console.log(e);
    }
}
obtenerPokemones();