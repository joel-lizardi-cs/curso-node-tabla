const { crearArchivo, crearArchivoAsync } = require('./helpers/multiplicar');
const argV = require('./config/yargs');

require('colors');

console.clear();

// No hacer
/*const [,,arg3 = 'base=5'] = process.argv;
const [,base = 5] = arg3.split('=');
console.log(process.argv);*/

// Si hacer
//console.log(argV);
//console.log("base yargs: ",argV.base); // o argV.b

crearArchivo(argV.b, argV.l, argV.h)
    .then(nombreArchivo => console.log(`${nombreArchivo.rainbow} creado`))
    .catch(err => console.log(err));

crearArchivoAsync(argV.b, argV.l, argV.h)
    .then(nombreArchivoAsync => console.log(`${nombreArchivoAsync.rainbow} creado`))
    .catch(err => console.log(err));