/*--------------------------------------
async: se comporta de forma asincrona


await:

---------------------------------------*/
const obtenerPokemones = async () => {
    //await de momento solo funciona dentro
    //de una funcion async

    try {
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await respuesta.json()
        console.log(data,results)
    } catch (error) {
        console.log(error);
    }


}