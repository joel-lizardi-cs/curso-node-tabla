const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base = 5, l, h = 10) => {

    return new Promise((resolve, reject) => {

        let salida = '';
        let consola = '';

        for(let i = 1; i <= h; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
        }

        if(l) {
            console.log("=================".green);
            console.log(`   Tabla del ${colors.blue(base)}   `);
            console.log("=================".green);
            console.log(consola);
        }

        /*fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if(err) throw err;
            console.log(`tabla-${base}.txt creado`);
        });*/
        
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        
        resolve(`./salida/tabla-${base}.txt`);

    });

}

const crearArchivoAsync = async(base = 5, l, h = 10) => {

    try {

        let salida = '';
        let consola = '';

        for(let i = 1; i <= h; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
        }

        if(l) {
            console.log("=================".green);
            console.log(`   Tabla del ${colors.blue(base)}   `);
            console.log("=================".green);
            console.log(consola);
        }

        /*fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if(err) throw err;
            console.log(`tabla-${base}.txt creado`);
        });*/

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;


    } catch(err) {
        throw err;
    }
    
}

module.exports = {
    crearArchivo,
    crearArchivoAsync
}