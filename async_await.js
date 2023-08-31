/*--------------------------------------
async: se comporta de forma asincrona, devuelve un objeto 


await:

---------------------------------------*/
const obtenerPokemones = async () => {
    //await de momento solo funciona dentro de una funcion async

    try {
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await respuesta.json();
        console.log(data.results);
        data.results.forEach(elemento => {
            console.log(elemento.nombre);
        });

    } catch (error) {
        console.log(error);
    }


}

obtenerPokemones();