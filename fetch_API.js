/* ---------------------------------------------------

-fetch nos permite consumir una API
-una API es una respuesta del servidor, que nos 
entrega datos para consumir en un sitio web.Pueden ser API
públicas o privadas (estas ultimas piden info de acceso).

https://pokeapi.co/api/v2/
------------------------------------------------------*/

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(data => {
        console.log(data.results); // La propiedad correcta es "results", no "result"
        data.results.forEach(element => {
            console.log(element.name);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
