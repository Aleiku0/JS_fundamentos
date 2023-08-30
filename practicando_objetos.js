//objetos 
const web = {
    nombre: 'nombre',
    link: {
        enlace: 'www.nombre.com'
    },
    redesSociales: {
        youtube: {
            nombre: 'youtube',
            enlace: 'http://www.youtube.com'
        },
        twitter: {
            nombre: 'twitter',
            enlace: 'http://www.twitter.com'
        },
        facebook: {
            nombre: 'facebook',
            enlace: 'http://www.facebook.com'
        }
    }
}


const{twitter,facebook,youtube} = web.redesSociales;

console.log(twitter, facebook , youtube);