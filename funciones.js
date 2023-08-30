//funciones

function sumar(num){
    console.log(num);
}
sumar(10);


//funciones de flecha

const sumarDos = (num) =>{
    console.log(num);
}
sumarDos(20);


//funcion de flecha reduccion de código, sin parentesis cuando se tiene un solo parámetro.

const sumarDosRed = num =>{
    console.log(num);
}
sumarDosRed(20);

//Con return
const sumarDosReturn = (num1 , num2) =>{
    return (num1 + num2);
}

/* se puede gsumarDosReduardar el resultado de este return
creando una variable para guardar el valor de la funcion flecha*/
const resultado = sumarDosReturn(20,30);

console.log(resultado);

//otro ejemplo:

const mensaje = () => {
    return 'Hola mundo';
}//sin parametros siempre usar los parentesis

const resultadoMensaje = mensaje();
console.log (resultadoMensaje);

//ejemplo mensaje con parámetro

const mensajeConParametro = nombre =>{
    return 'Hola '+ nombre + '!';
}

const mensajeConParametroResultado = mensajeConParametro('Alejandra');
console.log(mensajeConParametroResultado);

/* la función de flecha retorna el resultado por lo tanto se podria escribir de la siguiente manera: */

const holaMundo = mensaje => ('hola '+ mensaje );
const resultadoHolaMundo = holaMundo ('mundo');
console.log(resultadoHolaMundo);


//asignar valor por defecto, por si usuario no envia parametro para funcion flecha
const sumarTres = (num = 0) => {
    console.log (num + 3);
}

sumarTres();