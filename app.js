//Hay 3 tipos de require:
//El primero es un tipo propio de node.. que node ya lo tiene
const { crearArchivo, listarTabla } = require('./multiplicar/creaciontabla');

const { argv } = require('./config/yargs');

//const colors = require('colors');
const colors = require('colors/safe');
// Con destructuración como arriba o como una varable como abajo, solo para cargar el argv
// const argv = require('./config/yargs').argv;
// const argv = require('./config/yargs'); aqui se usario todo el modul o exportado y abria que póner algo como let argv1 = argv.argv para usar solo un objeto, clase o fucnión del archivo exportado.

// La segunda, otros de paquetes que no exiten en node como express
// son paquetes de otras personas hiciron por nosotros, se instala para utilizarse, no vienen en la documentación de node
// const fs = require('express');
//El tercer tipo, que son los archivos o require que nosostros creamos para el proyecto
// se identifican con un ./ o ../
// conts fs = require('./fs')

//let base = process.argv[2];

let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(parametro);
// console.log(base);

console.log('base: ', argv.base, '\nlimite: ', argv.limite);
// console.log(argv2);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(listado => console.log(listado))
            .catch(err => {
                console.log("ERROR: ", err);
            });
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(colors.blue(`Archivo creado: `), colors.red(archivo)))
            .catch(err => {
                console.log("ERROR: ", err);
            });

        break;
    default:
        console.log('No se reconoce comando: ', comando);
        break;
}

// crearArchivo(argv.base, argv.limite)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(err => {
//         console.log("ERROR: ", err);
//     });