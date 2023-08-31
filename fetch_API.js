/* ---------------------------------------------------

-fetch nos permite consumir una API
-una API es una respuesta del servidor, que nos 
entrega datos para consumir en un sitio web.Pueden ser API
públicas o privadas (estas ultimas piden info de acceso).

https://pokeapi.co/api/v2/

Para esto recordar todo el apartado de promesas
------------------------------------------------------*/

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(data => {
        console.log(data.results); // esto lo que hace es mostrarme todos los objetos contenidos en el archivo json
        data.results.forEach(elemento => { //recorre los cada uno de los elementos del arreglo (o sea los objetos)
            console.log(elemento.name); // muestra solamente los nombre de los obejos (en este caso el nombre de los pokemon)
        });
    })
    .catch(error => {
        console.error('Acá se puede escribir el error que se necesite', error); //catch sirve para capturar el error
    });

