const fs = require('fs');

const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('============================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('============================='.green);

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
        }

        resolve(data);
        return;
    });
};


let crearArchivo = (base, limite) => {

    console.log('============================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('============================='.green);

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
                //throw new Error(err);
            } else resolve(`tabla-${base}.txt`);
            // return `tabla-${base}.txt`;
        });


    });
};

module.exports = {
    crearArchivo,
    listarTabla
};