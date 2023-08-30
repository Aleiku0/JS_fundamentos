/*
What does destructuring mean? It's a JavaScript expression that allows us to extract data from arrays, 
objects, maps and sets — which we're going to learn more about in a future ES6.io video —into their own 
variable. It allows us to extract properties from an object or items from an array, multiple at a time.
Let's take a look at what problem JavaScript destructuring really solves. Sometimes you need top level 
variables like so:
*/

const person = {
    first :'Wes',
    last :'Bos',
    country : 'Canada',
    link:{
        social:{
            facebook: 'http://facebook.com', //objetos anidados
            twitter: 'http://twitter.com'
        },
        web:{
            blog: 'https://wesbos.com'
        }
    }
}

/*---------------------------------------
const first = person.first;
const last = person.last;

demasiadas variables y código repetitivo
-----------------------------------------*/


/* Con destructuring object se puede reducir el codigo de la siguiente manera:*/

const {first, last} = person;

console.log(first); // Wes
console.log(last);  // Bos


//para los objetos anidados:

/*---------------------------------------
const twitter =person.link.social.twitter;
const facebook = person.link.social.facebook;

demasiadas variables y código repetitivo
-----------------------------------------*/

const{twitter, facebook} = person.link.social;
console.log(twitter, facebook); // log 2 variables
