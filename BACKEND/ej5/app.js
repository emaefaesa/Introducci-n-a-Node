let {paises,favoritos,nombre} = require('./module')

let paisesFinal = []

paisesFinal = paises.a.concat(paises.b,paises.c)

let favoritosFinal = []

for(let i = 0; i < favoritos.length; i++){
    favoritosFinal.push(paisesFinal[favoritos[i]])
}

console.log(favoritosFinal)